export function capitalize(str: string) {
    if (typeof str !== 'string') {
      return throwError(str,'string');
    }
    if (str.length < 0) {
      return str;
    }
  
    return str
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
  }