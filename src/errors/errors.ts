import { hasProperty } from '../utils/validators'

/**
 * ErrorType
 * @desc Type representing supported errors
 */
export enum ErrorType {
    validation_error = 'ValidationError',
    parameter_error = 'ParameterError',
    type_error = 'TypeError',
    value_error = 'ValueError',
}

/**
 * ExtendableError
 * @desc Class representing extendable error
 */
export class ExtendableError extends Error {
    /**
     * Extendable error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     */
    constructor(readonly type: ErrorType, readonly message: string) {
        super(message)

        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        })

        Object.defineProperty(this, 'type', {
            configurable: true,
            enumerable: false,
            value: type,
            writable: true,
        })

        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: false,
            value: this.constructor.name,
            writable: true,
        })

        if (hasProperty(Error, 'captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor)
            return
        }

        Object.defineProperty(this, 'stack', {
            configurable: true,
            enumerable: false,
            value: new Error(message).stack,
            writable: true,
        })
    }
}

/**
 * GeneralError
 * @desc Class representing general error
 */
export class GeneralError extends ExtendableError {
    /**
     * Error arguments
     */
    readonly args: any[] = []

    /**
     * General error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly type: ErrorType, readonly message: string, ...args: any[]) {
        super(type, message)
        this.args = args
    }

    /**
     * Updates current logging information
     * @protected
     */
    protected logMessage(): void {
        console.error(this.message, this.args)
    }
}

/**
 * ValueError
 * @desc Class representing value error
 */
export class ValueError extends GeneralError {
    /**
     * Value error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.value_error, message, args)
    }
}

/**
 * TypeError
 * @desc Class representing type error
 */
export class TypeError extends GeneralError {
    /**
     * Type error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.type_error, message, args)
    }
}

/**
 * ValidationError
 * @desc Class representing validation error
 */
export class ValidationError extends GeneralError {
    /**
     * Validation error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.validation_error, message, args)
    }
}

/**
 * UnsupportedParameterError
 * @desc Class representing unsupported parameter error
 */
export class UnsupportedParameterError extends GeneralError {
    /**
     * Unsupported parameter error constructor by input parameters
     * @param parameter: initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly parameter: string, ...args: any[]) {
        super(ErrorType.parameter_error, `Unsupported parameter: ${parameter}`, args)
    }
}

export const valueError = (message: string, ...args: any[]): ValueError => {
    return new ValueError(message, args)
}

export const typeError = (message: string, ...args: any[]): TypeError => {
    return new TypeError(message, args)
}

export const validationError = (message: string, ...args: any[]): ValidationError => {
    return new ValidationError(message, args)
}

export const unsupportedParamError = (param: string, ...args: any[]): UnsupportedParameterError => {
    return new UnsupportedParameterError(param, args)
}
