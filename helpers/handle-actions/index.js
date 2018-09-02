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

const showError = ({ nuxtContext, error }) => {
  if (process.client) {
    switch (error.statusCode) {
      case 404:
        nuxtContext.error(error);
        break;
      default:
        $nuxt.$toast.show(error.message);
    }
  } else {
    nuxtContext.error(error);
  }
};

// TODO: adding logger
const handleError = ({ nuxtContext, error }) => {
  showError({
    nuxtContext,
    error: !(error instanceof BBSError) ? getUnknownError() : error
  });

  console.log(error);
};

// TODO: adding loading
export const handleAction = async (nuxtContext, fn) => {
  try {
    const res = await fn();
    return res;
  } catch (error) {
    handleError({ nuxtContext, error });
  }
};

export default {
  handleAction,
  BBSError
};
