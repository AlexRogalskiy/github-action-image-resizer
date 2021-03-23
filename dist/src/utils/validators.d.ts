import { Optional } from '../../typings/standard-types';
export declare const getType: (obj: any) => string;
export declare const isNull: (value: any) => boolean;
export declare const isUndefined: (value: any) => boolean;
export declare const isNullOrUndefined: (value: any) => boolean;
export declare const isNotNull: (value: any) => boolean;
export declare const isNotUndefined: (value: any) => boolean;
export declare const isString: (value: any) => boolean;
export declare const isArray: (value: any) => boolean;
export declare const isObject: (value: any) => boolean;
export declare const isFunction: (value: any) => boolean;
export declare const isNumber: (value: any) => boolean;
/**
 * Returns a boolean indicating whether the object has the specified property.
 * @param {Object} obj An object.
 * @param {String} prop A property name.
 * @returns {Boolean}
 */
export declare const hasProperty: (obj: any, prop: Optional<PropertyKey>) => boolean;
/**
 * Returns a boolean indicating whether the object has the specified property.
 * @param {Object} obj An object.
 * @param {String} prop A property name.
 * @returns {Boolean}
 */
export declare const hasProperty2: (obj: any, prop: PropertyKey) => boolean;
export declare const isBlankString: (value: string) => boolean;
export declare const isValidFile: (fileName: string, extension?: string) => boolean;
//# sourceMappingURL=validators.d.ts.map