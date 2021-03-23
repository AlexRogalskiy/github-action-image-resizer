import * as core from '@actions/core'
import { basename, join } from 'path'

import { ensureDirExists, getDataAsJson } from './utils/files'
import { isValidFile } from './utils/validators'
import { mergeProps, toFormatString } from './utils/commons'

import { profile } from './utils/env'

import { ConfigOptions } from '../typings/domain-types'
import { FormatPattern } from '../typings/enum-types'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const sharp = require('sharp')

const processSourceFile = async (options: Required<ConfigOptions>): Promise<boolean> => {
    const { width, height, quality, formatType, sourceFile, targetPath, targetFile } = options

    const formatOptions = mergeProps(profile.formatOptions, { quality })
    const resizeOptions = mergeProps(profile.resizeOptions, { width, height })

    core.info(
        `
        Processing source file: ${sourceFile} with parameters:
        format type=${formatType}
        format options=${toFormatString(formatOptions)},
        resize options=${toFormatString(resizeOptions)}
        `
    )

    ensureDirExists(targetPath)

    const format = FormatPattern[formatType]
    const fileName = join(targetPath, targetFile)

    const resizeResult = await sharp(sourceFile, formatOptions)
        .trim()
        .resize(resizeOptions)
        .withMetadata()
        .toFormat(format)
        .toFile(fileName)

    core.info(`Resizing operation terminated with status: ${toFormatString(resizeResult)}`)

    return true
}

const getConfigOptions = (options: any = {}): Required<ConfigOptions> => {
    const width = options.width || core.getInput('width', { required: true })
    const height = options.height || core.getInput('height', { required: true })

    const quality = options.quality || core.getInput('quality') || 100
    const formatType = options.formatType || core.getInput('formatType', { required: true })

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

const processData = async (...options: ConfigOptions[]): Promise<void> => {
    let status = false

    for (const item of options) {
        const options = getConfigOptions(item)
        status = await processSourceFile(options)
    }

    core.setOutput('changed', status)
}

const initSharpConfig = (): void => {
    sharp.cache({ files: 0 })
    sharp.cache(false)
}

export default async function run(): Promise<void> {
    try {
        initSharpConfig()

        const sourceData = core.getInput('sourceData')

        if (isValidFile(sourceData)) {
            const options = getDataAsJson(sourceData)
            await processData(...options)
        } else {
            await processData({})
        }
    } catch (e) {
        core.setFailed(`Cannot process input source data, message: ${e.message}`)
    }
}

void run()
