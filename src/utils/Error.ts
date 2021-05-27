interface IError {
    error:string;
}

function ThrowError(input:string,requiredType:string = 'string') : IError{
    const error : IError =  {
        error:`Invalid parameter type. \n '${input}' must be type '${requiredType}'`
    }
    console.error(error)
    return error;
}