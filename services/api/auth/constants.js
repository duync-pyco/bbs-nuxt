export const ERRORS = {
  EMAIL_EXISTS: {
    statusCode: 400,
    errorCode: 'EMAIL_EXISTS',
    message: 'The email address is already in use by another account.'
  },
  TOO_MANY_ATTEMPTS_TRY_LATER: {
    statusCode: 400,
    errorCode: 'TOO_MANY_ATTEMPTS_TRY_LATER',
    message:
      'We have blocked all requests from this device due to unusual activity. Try again later.'
  },
  WEAK_PASSWORD: {
    statusCode: 400,
    errorCode: 'WEAK_PASSWORD',
    message: 'Password should be at least 6 characters'
  },
  EMAIL_NOT_FOUND: {
    statusCode: 400,
    errorCode: 'EMAIL_NOT_FOUND',
    message:
      'There is no user record corresponding to this identifier. The user may have been deleted.'
  },
  INVALID_PASSWORD: {
    statusCode: 400,
    errorCode: 'INVALID_PASSWORD',
    message: 'The password is invalid or the user does not have a password.'
  },
  USER_DISABLED: {
    statusCode: 400,
    errorCode: 'USER_DISABLED',
    message: 'The user account has been disabled by an administrator.'
  }
};

export default {
  ERRORS
};
