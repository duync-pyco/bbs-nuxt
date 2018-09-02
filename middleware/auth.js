import { GETTERS, MUTATIONS } from '~/store/modules/auth/constants';

export default context => {
  if (!context.store.getters[GETTERS.IS_AUTHENTICATED]) {
    context.redirect('/articles');
    context.store.commit(MUTATIONS.TOGGLE_MODAL, true);
  }
};
