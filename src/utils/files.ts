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

export const checkFileExists = (fileName: string, mode = constants.F_OK | constants.R_OK): boolean => {
    try {
        accessSync(fileName, mode)

        return true
    } catch (err) {
        return false
    }
}
