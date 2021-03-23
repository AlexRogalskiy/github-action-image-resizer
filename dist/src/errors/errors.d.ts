/**
 * Error type enumeration
 */
export declare enum ErrorType {
    general_error = "GeneralError",
    parser_error = "ParserError",
    validation_error = "ValidationError",
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
export declare const valueError: (message: string, ...args: any[]) => ValueError;
//# sourceMappingURL=errors.d.ts.map