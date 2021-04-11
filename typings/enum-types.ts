/**
 * Profile
 * @desc Type representing supported profiles
 */
export enum Profile {
    dev = 'dev',
    prod = 'prod',
    test = 'test',
}

//--------------------------------------------------------------------------------------------------
/**
 * FormatPattern
 * @desc Type representing supported format patterns
 */
export enum FormatPattern {
    heic = 'heic',
    heif = 'heif',
    avif = 'avif',
    jpg = 'jpeg',
    jpeg = 'jpeg',
    png = 'png',
    raw = 'raw',
    tiff = 'tiff',
    webp = 'webp',
    gif = 'gif',
}

//--------------------------------------------------------------------------------------------------
/**
 * ErrorType
 * @desc Type representing supported errors
 */
export enum ErrorType {
    general_error = 'GeneralError',
    parser_error = 'ParserError',
    validation_error = 'ValidationError',
    request_error = 'RequestError',
    response_error = 'ResponseError',
    parameter_error = 'ParameterError',
    type_error = 'TypeError',
    value_error = 'ValueError',
}

//--------------------------------------------------------------------------------------------------
