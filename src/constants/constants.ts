import boxen from 'boxen'

import { ImageFormatOptions, ImageResizeOptions } from '../../typings/domain-types'

/**
 * Image format configuration options
 */
export const FORMAT_OPTIONS: Readonly<ImageFormatOptions> = {
    failOnError: true,
    sequentialRead: false,
    density: 72,
    startPage: 0,
    pages: -1,
    quality: 100,
    animated: false,
}

/**
 * Image resize configuration options
 */
export const RESIZE_OPTIONS: Readonly<ImageResizeOptions> = {
    fit: 'cover',
    position: 'centre',
    background: { r: 0, g: 0, b: 0, alpha: 1 },
    kernel: 'lanczos3',
    withoutEnlargement: false,
    fastShrinkOnLoad: true,
}

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}
