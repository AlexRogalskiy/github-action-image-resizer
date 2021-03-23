import _ from 'lodash'

import { Optional } from '../../typings/standard-types'

export const toString = (value: string | string[]): string => (Array.isArray(value) ? value[0] : value)

export const mergeProps = <T>(...obj: unknown[]): T =>
    _.mergeWith({}, ...obj, (o, s) => {
        return _.isArray(s) && _.isArray(o) ? _.union(o, s) : _.isNull(s) ? o : s
    })

export const toFormatString = (obj: any): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj: any, defaultValue = 'null'): string => {
    let res = ''
    let i = 0

    if (!obj) return defaultValue

    const entries = Object.entries(obj)
    for (const [key, value] of entries) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res += `${key} => ${typeof value === 'object' ? `[${objToString(value)}]` : `${value}, `}`
        }
        if (++i === entries.length) {
            res = res.substring(0, res.length - 2)
        }
    }

    return res
}

export const isInRange = (actual: number, min: number, max: number): boolean => {
    return actual >= min && actual <= max
}

export const toInt = (str: string, defaultValue?: number): Optional<number> => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}
