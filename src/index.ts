import * as core from '@actions/core'
import { basename, join } from 'path'
import boxen from 'boxen'

import { ensureDirExists, getConfigOptions } from './utils/files'
import { isValidFile } from './utils/validators'
import { mergeProps, toInt } from './utils/commons'
import { serialize } from './utils/serializers'

import { profile } from './utils/profiles'

import { ConfigOptions } from '../typings/domain-types'
import { FormatPattern } from '../typings/enum-types'

const sharp = (globals => {
    globals.cache({ files: 0 })
    globals.cache(false)

    return globals
    // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
})(require('sharp'))

const processSourceFile = async (options: ConfigOptions): Promise<boolean> => {
    const { width, height, quality, formatType, sourceFile, targetPath, targetFile } = options

    const formatOptions = mergeProps(profile.formatOptions, { quality })
    const resizeOptions = mergeProps(profile.resizeOptions, { width, height })

    core.info(
        boxen(
            `
        Processing input source file: [${sourceFile}] with parameters:
        format type=[${formatType}],
        format options=${serialize(formatOptions)},
        resize options=${serialize(resizeOptions)}
        `,
            profile.outputOptions
        )
    )

    ensureDirExists(targetPath)

    const fileName = join(targetPath, targetFile)

    try {
        const status = await sharp(sourceFile, formatOptions)
            .trim()
            .resize(resizeOptions)
            .withMetadata()
            .toFormat(formatType)
            .toFile(fileName)

        core.info(
            boxen(`Resizing operation completed with parameters: ${serialize(status)}`, profile.outputOptions)
        )

        return true
    } catch (e) {
        core.error(`Cannot process input file image: ${sourceFile}`)
        throw e
    }
}

const buildConfigOptions = (options: Partial<ConfigOptions>): ConfigOptions => {
    const width = options.width || parseInt(getRequiredProperty('width'))
    const height = options.height || parseInt(getRequiredProperty('height'))

    const quality = options.quality || toInt(getProperty('quality'))

    const formatData = options.formatType || getRequiredProperty('formatType')
    const formatType = FormatPattern[formatData]

    const sourceFile = options.sourceFile || getRequiredProperty('sourceFile')
    const targetPath = options.targetPath || getRequiredProperty('targetPath')
    const targetFile = options.targetFile || getProperty('targetFile') || basename(sourceFile)

    return {
        width,
        height,
        quality,
        formatType,
        sourceFile,
        targetPath,
        targetFile,
    }
}

const getRequiredProperty = (property: string): string => {
    return getProperty(property, { required: true })
}

const getProperty = (property: string, options?: core.InputOptions): string => {
    return core.getInput(property, options)
}

const executeOperation = async (...options: Partial<ConfigOptions>[]): Promise<boolean> => {
    const result: boolean[] = []

    for (const option of options) {
        const options = buildConfigOptions(option)
        const status = await processSourceFile(options)
        result.push(status)
    }

    return result.every(value => value)
}

const runResizingOperation = async (): Promise<void> => {
    const sourceData = getProperty('sourceData')

    let status: boolean
    if (isValidFile(sourceData)) {
        const options = getConfigOptions(sourceData)
        status = await executeOperation(...options)
    } else {
        status = await executeOperation({})
    }

    core.setOutput('changed', status)
}

export default async function run(): Promise<void> {
    try {
        await runResizingOperation()
    } catch (e) {
        core.setFailed(`Cannot process input image data, message: ${e.message}`)
    }
}

void run()
