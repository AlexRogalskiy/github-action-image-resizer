import * as core from '@actions/core'
import { join } from 'path'
import {
    accessSync,
    constants,
    existsSync,
    MakeDirectoryOptions,
    mkdirSync,
    readFileSync,
    writeFile,
} from 'fs'

import { ConfigOptions } from '../../typings/domain-types'

import { deserialize, serialize } from './serializers'

export const ensureDirExists = (dir: string, options: MakeDirectoryOptions = { recursive: true }): void => {
    existsSync(dir) || mkdirSync(dir, options)
}

export const getDataAsJson = (fileName: string): ConfigOptions[] => {
    const fileData = readFileSync(fileName)

    return deserialize(fileData.toString())
}

export const storeDataAsJson = async (filePath: string, fileName: string, data: any): Promise<boolean> => {
    ensureDirExists(filePath)

    const targetPath = join(filePath, fileName)

    core.info(`Storing JSON data to target file: ${targetPath}`)

    writeFile(targetPath, serialize(data), err => {
        if (err) {
            throw err
        }
    })

    return true
}

export const checkFileExists = (fileName: string, mode = constants.F_OK | constants.R_OK): boolean => {
    try {
        accessSync(fileName, mode)

        return true
    } catch (err) {
        return false
    }
}
