interface IError {
  error: string;
}

/**
 * Throw error when something goes wrong
 * @param input value is an invalid input privided by user in function
 * @param requiredType required type of value to be inputed
 * @returns {string}
 */
export function throwError(
  input: string,
  requiredType: string = 'string'
): string {
  const error: IError = {
    error: `Invalid parameter type. \n '${input}' must be type '${requiredType}'`,
  };
  console.error(error);
  return error.error;
}
