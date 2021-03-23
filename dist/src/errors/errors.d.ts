/**
 * ErrorType
 * @desc Type representing supported errors
 */
export declare enum ErrorType {
    validation_error = "ValidationError",
    parameter_error = "ParameterError",
    type_error = "TypeError",
    value_error = "ValueError"
}
/**
 * ExtendableError
 * @desc Class representing extendable error
 */
export declare class ExtendableError extends Error {
    readonly type: ErrorType;
    readonly message: string;
    /**
     * Extendable error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     */
    constructor(type: ErrorType, message: string);
}
/**
 * GeneralError
 * @desc Class representing general error
 */
export declare class GeneralError extends ExtendableError {
    readonly type: ErrorType;
    readonly message: string;
    /**
     * Error arguments
     */
    readonly args: any[];
    /**
     * General error constructor by input parameters
     * @param type initial input {@link ErrorType}
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(type: ErrorType, message: string, ...args: any[]);
    /**
     * Updates current logging information
     * @protected
     */
    protected logMessage(): void;
}
/**
 * ValueError
 * @desc Class representing value error
 */
export declare class ValueError extends GeneralError {
    readonly message: string;
    /**
     * Value error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(message: string, ...args: any[]);
}
/**
 * TypeError
 * @desc Class representing type error
 */
export declare class TypeError extends GeneralError {
    readonly message: string;
    /**
     * Type error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(message: string, ...args: any[]);
}
/**
 * ValidationError
 * @desc Class representing validation error
 */
export declare class ValidationError extends GeneralError {
    readonly message: string;
    /**
     * Validation error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(message: string, ...args: any[]);
}
/**
 * UnsupportedParameterError
 * @desc Class representing unsupported parameter error
 */
export declare class UnsupportedParameterError extends GeneralError {
    readonly parameter: string;
    /**
     * Unsupported parameter error constructor by input parameters
     * @param parameter: initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(parameter: string, ...args: any[]);
}
export declare const valueError: (message: string, ...args: any[]) => ValueError;
export declare const typeError: (message: string, ...args: any[]) => TypeError;
export declare const validationError: (message: string, ...args: any[]) => ValidationError;
export declare const unsupportedParamError: (param: string, ...args: any[]) => UnsupportedParameterError;
//# sourceMappingURL=errors.d.ts.map