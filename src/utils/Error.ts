interface IError {
    error:string;
}

/**
 * Throw error when something goes wrong
 * @param input value is an invalid input privided by user in function
 * @param requiredType required type of value to be inputed
 * @returns {IError}
 */
function throwError(input:string,requiredType:string = 'string') : IError{
    const error : IError =  {
        error:`Invalid parameter type. \n '${input}' must be type '${requiredType}'`
    }
    console.error(error)
    return error;
}