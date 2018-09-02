import Vue from 'vue';
import AuthApi from '~/services/api/auth';
import { handleAction } from '~/helpers/handle-actions/';
import { ACTIONS } from './constants';

const register = async (_, { email, password, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const { idToken, refreshToken, expiresIn } = await AuthApi.signup({
      email,
      password
    });
  });

const login = async (_, { email, password, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const { idToken, refreshToken, expiresIn } = await AuthApi.signIn({
      email,
      password
    });
  });

export default {
  [ACTIONS.REGISTER]: register,
  [ACTIONS.LOGIN]: login
};
