import Cookie from 'js-cookie';
import AuthApi from '~/services/api/auth';
import { handleAction } from '~/helpers/handle-actions/';
import { MUTATIONS, ACTIONS } from './constants';

export default {
  nuxtServerInit(_, { req }) {
    const { store } = this.app;

    return handleAction({
      app: this.app,
      fn: () => {
        if (!req || !req.headers || !req.headers.cookie) return;

        const idTokenCookie = req.headers.cookie
          .split(';')
          .find(c => c.trim().startsWith('idToken='));

        if (!idTokenCookie) return;

        const idToken = idTokenCookie.split('=')[1];

        if (!!idToken) store.commit(MUTATIONS.SET_TOKENS, { idToken });
      }
    });
  },
  [ACTIONS.REGISTER](_, { email, password }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const { idToken } = await AuthApi.signup({
          email,
          password,
          $axios
        });
        store.dispatch(ACTIONS.SAVE_TOKENS, { idToken });
        return !!idToken;
      }
    });
  },
  [ACTIONS.LOGIN](_, { email, password }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const { idToken } = await AuthApi.signIn({
          email,
          password,
          $axios
        });
        store.dispatch(ACTIONS.SAVE_TOKENS, { idToken });
        return !!idToken;
      }
    });
  },
  [ACTIONS.SAVE_TOKENS](_, { idToken }) {
    const { store } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        store.commit(MUTATIONS.SET_TOKENS, { idToken });
        Cookie.set('idToken', idToken);
      }
    });
  }
};
