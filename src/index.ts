import * as core from '@actions/core'
import { basename, join } from 'path'
import boxen from 'boxen'

import { ensureDirExists, getDataAsJson } from './utils/files'
import { isValidFile } from './utils/validators'
import { mergeProps, toFormatString, toInt } from './utils/commons'

import { profile } from './utils/env'

import { ConfigOptions } from '../typings/domain-types'
import { FormatPattern } from '../typings/enum-types'

const sharp = (globals => {
    globals.cache({ files: 0 })
    globals.cache(false)

    return globals
    // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
})(require('sharp'))

const processSourceFile = async (options: ConfigOptions): Promise<void> => {
    const { width, height, quality, formatType, sourceFile, targetPath, targetFile } = options

    const formatOptions = mergeProps(profile.formatOptions, { quality })
    const resizeOptions = mergeProps(profile.resizeOptions, { width, height })

    core.info(
        boxen(
            `
        Processing source file: [${sourceFile}] with parameters:
        input format type=[${formatType}],
        input format options=${toFormatString(formatOptions)},
        input resize options=${toFormatString(resizeOptions)}
        `,
            profile.outputOptions
        )
    )

    ensureDirExists(targetPath)

    const fileName = join(targetPath, targetFile)

    const status = await sharp(sourceFile, formatOptions)
        .trim()
        .resize(resizeOptions)
        .withMetadata()
        .toFormat(formatType)
        .toFile(fileName)

    core.info(
        boxen(
            `Resizing operation completed with parameters: ${toFormatString(status)}`,
            profile.outputOptions
        )
    )
}

const buildConfigOptions = (options: Partial<ConfigOptions>): ConfigOptions => {
    const width = options.width || core.getInput('width', { required: true })
    const height = options.height || core.getInput('height', { required: true })

    const quality = options.quality || toInt(core.getInput('quality'))

    const formatData = options.formatType || core.getInput('formatType', { required: true })
    const formatType = FormatPattern[formatData]

    const sourceFile = options.sourceFile || core.getInput('sourceFile', { required: true })
    const targetPath = options.targetPath || core.getInput('targetPath', { required: true })
    const targetFile = options.targetFile || core.getInput('targetFile') || basename(sourceFile)

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

const runResizingOperation = async (): Promise<void> => {
    const sourceData = core.getInput('sourceData')

    if (isValidFile(sourceData)) {
        const options = getDataAsJson(sourceData)
        for (const item of options) {
            const options = buildConfigOptions(item)
            await processSourceFile(options)
        }
    } else {
        const options = buildConfigOptions({})
        await processSourceFile(options)
    }
}

export default async function run(): Promise<void> {
    try {
        await runResizingOperation()

        core.setOutput('changed', true)
    } catch (e) {
        core.setOutput('changed', false)
        core.setFailed(`Cannot process input image data, message: ${e.message}`)
    }
}

void run()
