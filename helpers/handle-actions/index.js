export class BBSError {
  constructor({ statusCode, message }) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const getUnknownError = () =>
  new BBSError({
    statusCode: 500,
    message: 'Oops... Something went wrong! Please try again'
  });

const showError = ({ app, normalizedError }) => {
  if (process.client) {
    switch (normalizedError.statusCode) {
      case 404:
        app.context.error(normalizedError);
        break;
      default:
        app.$toast.show(normalizedError.message);
    }
  } else {
    app.context.error(normalizedError);
  }
};

// TODO: adding logger
const handleError = ({ app, error }) => {
  showError({
    app,
    normalizedError: !(error instanceof BBSError) ? getUnknownError() : error
  });

  console.log(error);
};

// TODO: adding loading
export const handleAction = async ({ app, fn }) => {
  try {
    const res = await fn();
    return res;
  } catch (error) {
    handleError({ app, error });
  }
};

export default {
  handleAction,
  BBSError
};
