import { GETTERS } from './constants';

const showModal = state => state.showModal;

const tokens = state => state.tokens;

export default {
  [GETTERS.SHOW_MODAL]: showModal,
  [GETTERS.TOKENS]: tokens
};
