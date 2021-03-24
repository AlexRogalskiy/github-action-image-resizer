import { Optional } from '../../typings/standard-types'

import { checkFileExists } from './files'

export const getType = (obj: any): string => {
    return {}.toString
        .call(obj)
        .match(/\s(\w+)/)[1]
        .toLowerCase()
}

export const isNull = (value: any): boolean => {
    return value === null
}

export const isUndefined = (value: any): boolean => {
    return value === undefined || typeof value === 'undefined'
}

export const isNullOrUndefined = (value: any): boolean => {
    return isNull(value) || isUndefined(value)
}

export const isNotNull = (value: any): boolean => {
    return !isNull(value)
}

export const isNotUndefined = (value: any): boolean => {
    return !isUndefined(value)
}

export const isString = (value: any): boolean => {
    return isNotNull(value) && (typeof value === 'string' || getType(value) === 'string')
}

export const isArray = (value: any): boolean => {
    // return myArray.constructor.toString().indexOf("Array") > -1;
    return isNotNull(value) && Object.prototype.toString.apply(value) === '[object Array]'
}

export const isObject = (value: any): boolean => {
    return isNotNull(value) && Object.prototype.toString.apply(value) === '[object Object]'
}

export const isFunction = (value: any): boolean => {
    return isNotNull(value) && typeof value === 'function' && value.constructor && value.apply
}

export const isNumber = (value: any): boolean => {
    return isNotNull(value) && (typeof value === 'number' || getType(value) === 'number') && isFinite(value)
}

/**
 * Returns a boolean indicating whether the object has the specified property.
 * @param {Object} obj An object.
 * @param {String} prop A property name.
 * @returns {Boolean}
 */
export const hasProperty = (obj: any, prop: Optional<PropertyKey>): boolean => {
    if (isNullOrUndefined(obj)) return false
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return isFunction(obj.hasOwnProperty) ? obj.hasOwnProperty(prop) : prop in obj
}

/**
 * Returns a boolean indicating whether the object has the specified property.
 * @param {Object} obj An object.
 * @param {String} prop A property name.
 * @returns {Boolean}
 */
export const hasProperty2 = (obj: any, prop: PropertyKey): boolean => {
    const proto = obj.__proto__ || obj.constructor.prototype

    //return !obj.hasOwnProperty(prop) && prop in obj
    return prop in obj || prop in proto || proto[prop] === obj[prop]
}

export const isBlankString = (value: string): boolean => {
    return !value || /^\s*$/.test(value)
}

export const isValidFile = (fileName: string, extension = '.json'): boolean => {
    return !isBlankString(fileName) && fileName.endsWith(extension) && checkFileExists(fileName)
}
