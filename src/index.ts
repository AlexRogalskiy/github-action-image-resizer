import * as core from '@actions/core'
import { createWriteStream } from 'fs'
import { join } from 'path'

import { ensureDirExists, getConfigOptions, getFileContent, getFilesizeInBytes } from './utils/files'
import { isValidFile } from './utils/validators'
import { mergeProps, toInt } from './utils/commons'
import { serialize } from './utils/serializers'

import { coreError, coreInfo } from './utils/loggers'
import { profile } from './utils/profiles'

import { ConfigOptions } from '../typings/domain-types'
import { FormatPattern } from '../typings/enum-types'

const sharp = (globals => {
    globals.cache({ files: 0 })
    globals.cache(false)

    return globals
    // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
})(require('sharp'))

const processSourceFile = async (options: ConfigOptions): Promise<number> => {
    const { width, height, quality, formatType, sourceFile, fileStream, targetPath, targetFile } = options

    const formatOptions = mergeProps(profile.formatOptions, { quality })
    const resizeOptions = mergeProps(profile.resizeOptions, { width, height })

    coreInfo(
        `
        Processing input source file: [${sourceFile}] with parameters:
        format type=[${formatType}],
        format options=${serialize(formatOptions)},
        resize options=${serialize(resizeOptions)}
        `
    )

    try {
        const fileName = join(targetPath, targetFile)
        ensureDirExists(targetPath)

        const writable = createWriteStream(fileName)
        const pipeline = sharp(formatOptions).trim().resize(resizeOptions).withMetadata().toFormat(formatType)

        const result = await fileStream.pipe(pipeline).pipe(writable)

        coreInfo(`Resizing operation completed with parameters: ${serialize(result)}`)

        return await getFilesizeInBytes(fileName)
    } catch (e) {
        coreError(`Cannot process input file image: ${sourceFile}`)
        throw e
    }
}

const buildConfigOptions = async (options: Partial<ConfigOptions>): Promise<ConfigOptions> => {
    const width = options.width || parseInt(getRequiredProperty('width'))
    const height = options.height || parseInt(getRequiredProperty('height'))

    const quality = options.quality || toInt(getProperty('quality'))

    const formatType = options.formatType || FormatPattern[getRequiredProperty('formatType')]

    const sourceFile = options.sourceFile || getRequiredProperty('sourceFile')

    const { fileName, fileStream } = await getFileContent(sourceFile)

    const targetPath = options.targetPath || getRequiredProperty('targetPath')
    const targetFile = options.targetFile || getProperty('targetFile') || fileName

    return {
        width,
        height,
        quality,
        formatType,
        sourceFile,
        fileStream,
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

const getOperationStatus = async (option: Partial<ConfigOptions>): Promise<boolean> => {
    const options = await buildConfigOptions(option)
    const result = await processSourceFile(options)

    return result > 0
}

const executeOperation = async (...options: Partial<ConfigOptions>[]): Promise<boolean> => {
    const promises: Promise<boolean>[] = []

    for (const option of options) {
        promises.push(getOperationStatus(option))
    }

    const result = await Promise.all(promises)

    return result.every(value => value)
}

const runResizingOperation = async (): Promise<void> => {
    const sourceData = './data/sourceData.json' || getProperty('sourceData')

    let status: boolean
    if (isValidFile(sourceData, '.json')) {
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
