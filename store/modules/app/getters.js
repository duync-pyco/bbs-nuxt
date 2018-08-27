import { GETTERS } from './constants';

const isLoading = state => state.isLoading;

export default {
  [GETTERS.IS_LOADING]: isLoading
};
