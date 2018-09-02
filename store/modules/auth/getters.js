import { GETTERS } from './constants';

const showModal = state => state.showModal;

const tokens = state => state.tokens;

const isAuthenticated = state => !!state.tokens.idToken;

export default {
  [GETTERS.SHOW_MODAL]: showModal,
  [GETTERS.TOKENS]: tokens,
  [GETTERS.IS_AUTHENTICATED]: isAuthenticated
};
