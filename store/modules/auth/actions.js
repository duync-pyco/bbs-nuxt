import Vue from 'vue';
import AuthApi from '~/services/api/auth';
import { handleAction } from '~/helpers/handle-actions/';
import { MUTATIONS, ACTIONS } from './constants';

export default {
  [ACTIONS.REGISTER](_, { email, password }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const { idToken, refreshToken, expiresIn } = await AuthApi.signup({
          email,
          password,
          $axios
        });
        store.commit(MUTATIONS.SET_TOKENS, {
          idToken,
          refreshToken,
          expiresIn
        });
        return !!idToken;
      }
    });
  },
  [ACTIONS.LOGIN](_, { email, password }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const { idToken, refreshToken, expiresIn } = await AuthApi.signIn({
          email,
          password,
          $axios
        });
        store.commit(MUTATIONS.SET_TOKENS, {
          idToken,
          refreshToken,
          expiresIn
        });
        return !!idToken;
      }
    });
  }
};
