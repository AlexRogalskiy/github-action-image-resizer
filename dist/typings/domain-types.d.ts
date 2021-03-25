import boxen from 'boxen';
import { FormatPattern } from './enum-types';
import { Optional } from './standard-types';
/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export declare type ConfigOptions = {
    /**
     * Target image width
     */
    readonly width: number;
    /**
     * Target image height
     */
    readonly height: number;
    /**
     * Target format pattern
     */
    readonly formatType: FormatPattern;
    /**
     * Target image quality
     */
    readonly quality?: Optional<number>;
    /**
     * Source file to process
     */
    readonly sourceFile: string;
    /**
     * Target path to store files
     */
    readonly targetPath: string;
    /**
     * Target file name
     */
    readonly targetFile: string;
};
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export declare type ProfileOptions = {
    /**
     * Image format options
     */
    readonly formatOptions?: ImageFormatOptions;
    /**
     * Image resize options
     */
    readonly resizeOptions?: ImageResizeOptions;
    /**
     * Output options
     */
    readonly outputOptions?: boxen.Options;
};
/**
 * ImageFormatOptions
 * @desc Type representing image format options
 */
export declare type ImageFormatOptions = {
    /**
     * Supported image formats
     */
    readonly format?: Optional<FormatPattern>;
    /**
     * Enable/disable fail on error
     */
    readonly failOnError?: boolean;
    /**
     * Sequential read from image file
     */
    readonly sequentialRead?: boolean;
    /**
     * Image density
     */
    readonly density?: number;
    /**
     * Start page (for multi-paged image formats)
     */
    readonly startPage?: number;
    /**
     * Number of pages to process (for multi-paged image formats)
     */
    readonly pages?: number;
    /**
     * Image quality
     */
    readonly quality?: number;
    /**
     * Enable/disable animation support
     */
    readonly animated?: boolean;
};
/**
 * ImageResizeOptions
 * @desc Type representing image resize options
 */
export declare type ImageResizeOptions = {
    /**
     * Image width
     */
    readonly width?: number;
    /**
     * Image height
     */
    readonly height?: number;
    /**
     * Image position, gravity or strategy to use
     */
    readonly position?: PositionMode | GravityMode | StrategyMode;
    /**
     * Image strategy to fit both provided dimensions
     */
    readonly fit?: FitMode;
    /**
     * Image background colour
     */
    readonly background?: string | any;
    /**
     * Image kernel to use for reduction
     */
    readonly kernel?: KernelMode;
    /**
     * Enable/disable enlargement if the width or height are already less than the specified dimensions
     */
    readonly withoutEnlargement?: boolean;
    /**
     * Enable/disable option of the JPEG and WebP shrink-on-load feature
     */
    readonly fastShrinkOnLoad?: boolean;
};
/**
 * PositionMode
 * @desc Type representing position modes
 */
export declare type PositionMode = 'top' | 'right top' | 'right' | 'right bottom' | 'bottom' | 'left bottom' | 'left' | 'left top';
/**
 * GravityMode
 * @desc Type representing gravity modes
 */
export declare type GravityMode = 'center' | 'centre' | 'north' | 'east' | 'south' | 'west' | 'northeast' | 'northwest' | 'southeast' | 'southwest';
/**
 * StrategyMode
 * @desc Type representing strategy modes
 */
export declare type StrategyMode = 'cover';
/**
 * FitMode
 * @desc Type representing fit modes
 */
export declare type FitMode = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
/**
 * KernelMode
 * @desc Type representing kernel modes
 */
export declare type KernelMode = 'nearest' | 'cubic' | 'mitchell' | 'lanczos2' | 'lanczos3';
//# sourceMappingURL=domain-types.d.ts.map