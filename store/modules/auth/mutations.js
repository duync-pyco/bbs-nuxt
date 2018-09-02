import { MUTATIONS } from './constants';

const toggleModal = (state, payload) => {
  state.showModal = payload;
};

export default {
  [MUTATIONS.TOGGLE_MODAL]: toggleModal
};
