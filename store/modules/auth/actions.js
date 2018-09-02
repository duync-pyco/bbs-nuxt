import Vue from 'vue';
import AuthApi from '~/services/api/auth';
import { handleAction } from '~/helpers/handle-actions/';
import { MUTATIONS, ACTIONS } from './constants';

const register = async ({ commit }, { email, password, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const { idToken, refreshToken, expiresIn } = await AuthApi.signup({
      email,
      password
    });
    commit(MUTATIONS.SET_TOKENS, { idToken, refreshToken, expiresIn });
    return !!idToken;
  });

const login = async ({ commit }, { email, password, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const { idToken, refreshToken, expiresIn } = await AuthApi.signIn({
      email,
      password
    });
    commit(MUTATIONS.SET_TOKENS, { idToken, refreshToken, expiresIn });
    return !!idToken;
  });

export default {
  [ACTIONS.REGISTER]: register,
  [ACTIONS.LOGIN]: login
};
