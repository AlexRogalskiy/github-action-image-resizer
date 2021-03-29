import got from 'got'
import { basename, join } from 'path'
import {
    accessSync,
    closeSync,
    constants,
    createReadStream,
    createWriteStream,
    existsSync,
    MakeDirectoryOptions,
    mkdirSync,
    openSync,
    promises,
    readFileSync,
    statSync,
    writeFile,
    WriteStream,
} from 'fs'

import { ConfigOptions, PipedStream } from '../../typings/domain-types'

import { getUrlName } from './commons'
import { deserialize, serialize } from './serializers'
import { isValidFile, isValidUrl } from './validators'

import { valueError } from '../errors/errors'

/**
 * FileData
 * @desc Type representing file data
 */
export type FileData = {
    /**
     * File name
     */
    fileName: string
    /**
     * File content
     */
    fileStream: PipedStream
}

export const ensureDirExists = (dir: string, options: MakeDirectoryOptions = { recursive: true }): void => {
    existsSync(dir) || mkdirSync(dir, options)
}

export const getConfigOptions = (fileName: string): Partial<ConfigOptions>[] => {
    const fileData = readFileSync(fileName)

    return deserialize(fileData.toString())
}

export const storeDataAsJson = async (filePath: string, fileName: string, data: any): Promise<void> => {
    ensureDirExists(filePath)

    const targetPath = join(filePath, fileName)

    console.log(`Storing JSON data to target file: ${targetPath}`)

    writeFile(targetPath, serialize(data), err => {
        if (err) {
            throw err
        }
    })
}

export const isFileExists = (fileName: string, mode = constants.F_OK | constants.R_OK): boolean => {
    try {
        accessSync(fileName, mode)

        return true
    } catch (err) {
        return false
    }
}

export const getFileContent = async (sourceFile: string): Promise<FileData> => {
    if (isValidUrl(sourceFile)) {
        const fileName = getUrlName(sourceFile) || sourceFile
        const fileStream = got.stream(sourceFile) as PipedStream

        return {
            fileName,
            fileStream,
        }
    }

    if (isValidFile(sourceFile)) {
        const fileName = basename(sourceFile)
        const fileStream = createReadStream(sourceFile) as PipedStream

        return {
            fileName,
            fileStream,
        }
    }

    throw valueError(`Invalid input source: ${sourceFile}, neither url, nor file`)
}

export const getSizeInBytesAsync = async (filename: string): Promise<number> => {
    return (await promises.stat(filename)).size
}

export const getSizeInBytes = (filename: string): number => {
    return statSync(filename).size
}

export const createWritableStream = (filename: string): WriteStream => {
    closeSync(openSync(filename, 'w'))

    return createWriteStream(filename, { flags: 'w' })
}
