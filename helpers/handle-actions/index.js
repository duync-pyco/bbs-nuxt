export class BBSError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleAction = async (nuxtContext, fn) => {
  try {
    const res = await fn();
    return res;
  } catch (error) {
    if (!(error instanceof BBSError)) {
      nuxtContext.error(
        new BBSError(500, 'Oops... Something went wrong! Please try again')
      );
    } else {
      nuxtContext.error(error);
    }
  }
};

export default {
  handleAction,
  BBSError
};
