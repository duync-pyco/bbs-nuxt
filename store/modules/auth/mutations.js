import { MUTATIONS } from './constants';

const toggleModal = (state, payload) => {
  state.showModal = payload;
};

const setTokens = (state, payload) => {
  state.tokens = payload;
};

export default {
  [MUTATIONS.TOGGLE_MODAL]: toggleModal,
  [MUTATIONS.SET_TOKENS]: setTokens
};
