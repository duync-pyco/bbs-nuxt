import Axios from 'axios';
import { BBSError } from '~/helpers/handle-actions';

const ERRORS = {
  EMAIL_EXISTS: {
    statusCode: 403,
    errorCode: 'EMAIL_EXISTS',
    message: 'The email address is already in use by another account.'
  },
  TOO_MANY_ATTEMPTS_TRY_LATER: {
    statusCode: 403,
    errorCode: 'TOO_MANY_ATTEMPTS_TRY_LATER',
    message:
      'We have blocked all requests from this device due to unusual activity. Try again later.'
  }
};

const BASE_URL = process.env.FIREBASE_BASE_URL;
const FIREBASE_APIKEY = process.env.FIREBASE_APIKEY;
const generateUrl = (path, query) =>
  `${BASE_URL}/${path}?key=${FIREBASE_APIKEY}&${query || ''}`;

export const signup = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(generateUrl('signupNewUser'), {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  } catch (error) {
    const err = error.response.data.error.code;
    if (err.code === 400) throw new BBSError(ERRORS[err.message]);
    else throw err;
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(generateUrl('verifyPassword'), {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  signup,
  signIn
};
