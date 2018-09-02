import Axios from 'axios';
import { BBSError } from '~/helpers/handle-actions';
import { ERRORS } from './constants';

const BASE_URL = process.env.FIREBASE_BASE_URL;
const FIREBASE_APIKEY = process.env.FIREBASE_APIKEY;
const generateUrl = (path, query) =>
  `${BASE_URL}/${path}?key=${FIREBASE_APIKEY}&${query || ''}`;

const generateBadRequestError = error => {
  const errorKey = Object.keys(ERRORS).find(key => error.message.includes(key));

  if (!errorKey) return error;
  else return new BBSError(ERRORS[errorKey]);
};

const handleError = error => {
  const responseError = error.response.data.error;
  if (responseError.code === 400) throw generateBadRequestError(responseError);
  else throw responseError;
};

export const signup = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(generateUrl('signupNewUser'), {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  } catch (error) {
    handleError(error);
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
    handleError(error);
  }
};

export default {
  signup,
  signIn
};
