export class BBSError {
  constructor({ statusCode, message }) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const generateUnknownError = () =>
  new BBSError({
    statusCode: 500,
    message: 'Oops... Something went wrong! Please try again.'
  });

const generateUnauthorizedError = () =>
  new BBSError({
    statusCode: 401,
    message: 'Please login to continue.'
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

const handleError = ({ app, error }) => {
  let normalizedError = error;

  if (!(error instanceof BBSError)) {
    if (error && error.response && error.response.status === 401) {
      normalizedError = generateUnauthorizedError();
    } else {
      normalizedError = generateUnknownError();
    }
  }

  showError({ app, normalizedError });

  console.log(error);
};

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
