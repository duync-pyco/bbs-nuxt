import { MUTATIONS } from '~/store/modules/auth/constants';

export default function({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    // TODO: adds token to request
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      redirect('/articles');
      store.commit(MUTATIONS.TOGGLE_MODAL, true);
    }
  });
}
