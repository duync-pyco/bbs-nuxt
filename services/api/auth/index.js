import { BBSError } from '~/helpers/handle-actions';
import { ERRORS } from './constants';

const BASE_URL = process.env.AUTH_BASE_URL;
const APIKEY = process.env.AUTH_APIKEY;
const generateUrl = (path, query) =>
  `${BASE_URL}/${path}?key=${APIKEY}&${query || ''}`;

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

export const signup = async ({ email, password, $axios }) => {
  try {
    const { data } = await $axios.post(generateUrl('signupNewUser'), {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};

export const signIn = async ({ email, password, $axios }) => {
  try {
    const { data } = await $axios.post(generateUrl('verifyPassword'), {
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
