import { GETTERS, MUTATIONS, ACTIONS } from '~/store/modules/auth/constants';

export default async ({ redirect, store, app }) => {
  if (!store.getters[GETTERS.IS_AUTHENTICATED]) {
    redirect('/articles');
    store.commit(MUTATIONS.TOGGLE_MODAL, true);
    if (process.client) app.$toast.show('Please login to continue!');
  }
};
