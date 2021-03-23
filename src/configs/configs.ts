import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { FORMAT_OPTIONS, RESIZE_OPTIONS } from '../constants/constants'

/**
 * ProfileRecord
 * @desc Type representing image profile configuration options
 */
export type ProfileRecord = Record<Profile, Partial<ProfileOptions>>

/**
 * Image configuration options
 */
export const CONFIG: Readonly<ProfileRecord> = {
    dev: {
        formatOptions: FORMAT_OPTIONS,
        resizeOptions: RESIZE_OPTIONS,
    },
    prod: {
        formatOptions: FORMAT_OPTIONS,
        resizeOptions: RESIZE_OPTIONS,
    },
    test: {
        formatOptions: {
            failOnError: false,
            sequentialRead: false,
            density: 72,
            startPage: 0,
            pages: -1,
            quality: 100,
            animated: false,
        },
        resizeOptions: {
            fit: 'contain',
            position: 'right top',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 },
            kernel: 'nearest',
            withoutEnlargement: false,
            fastShrinkOnLoad: true,
        },
    },
}
