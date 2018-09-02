import { GETTERS, MUTATIONS } from '~/store/modules/auth/constants';

export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    const { idToken } = store.getters[GETTERS.TOKENS];

    if (!!idToken) {
      config.url = `${config.url}?auth=${idToken}`;
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      redirect('/articles');
      store.commit(MUTATIONS.TOGGLE_MODAL, true);
      store.commit(MUTATIONS.SET_TOKENS, {});
    }
  });
}
