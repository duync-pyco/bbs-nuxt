export class BBSError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleAction = async (nuxtError, fn) => {
  try {
    const res = await fn();
    return res;
  } catch (error) {
    if (!(error instanceof BBSError)) {
      nuxtError(new BBSError(500, 'Oops... Something went wrong!'));
    } else {
      nuxtError(error);
    }
  }
};

export default {
  handleAction,
  BBSError
};
