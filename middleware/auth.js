import { GETTERS, MUTATIONS } from '~/store/modules/auth/constants';

export default ({ redirect, store }) => {
  if (!store.getters[GETTERS.IS_AUTHENTICATED]) {
    redirect('/articles');
    store.commit(MUTATIONS.TOGGLE_MODAL, true);
  }
};
