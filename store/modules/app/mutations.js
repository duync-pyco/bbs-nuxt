import { MUTATIONS } from './constants';

const updateLoading = (state, { isLoading }) => {
  state.isLoading = isLoading;
};

export default {
  [MUTATIONS.UPDATE_LOADING]: updateLoading
};
