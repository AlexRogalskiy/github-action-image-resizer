import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { FORMAT_OPTIONS, OUTPUT_OPTIONS, RESIZE_OPTIONS } from '../constants/constants'

import { mergeProps } from '../utils/commons'

/**
 * ProfileRecord
 * @desc Type representing image profiles configuration options
 */
export type ProfileRecord = Record<Profile, Partial<ProfileOptions>>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileRecord> = {
    dev: {
        formatOptions: FORMAT_OPTIONS,
        resizeOptions: RESIZE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        formatOptions: mergeProps(FORMAT_OPTIONS, { failOnError: false }),
        resizeOptions: RESIZE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        formatOptions: mergeProps(FORMAT_OPTIONS, { failOnError: false }),
        resizeOptions: mergeProps(OUTPUT_OPTIONS, {
            position: 'centre',
            background: { r: 0, g: 0, b: 0, alpha: 1 },
            kernel: 'lanczos3',
        }),
        outputOptions: OUTPUT_OPTIONS,
    },
}
