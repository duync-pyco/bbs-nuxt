import { GETTERS, MUTATIONS } from '~/store/modules/auth/constants';

export default ({ redirect, store, app }) => {
  if (!store.getters[GETTERS.IS_AUTHENTICATED]) {
    redirect('/articles');
    store.commit(MUTATIONS.TOGGLE_MODAL, true);
    app.$toast.show('Please login to continue!');
  }
};
