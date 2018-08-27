import {
  MUTATIONS as APP_MUTATIONS,
  ACTIONS as APP_ACTIONS
} from '../../store/modules/app/constants';

const handleAction = async ({ dispatch, commit }, fn) => {
  try {
    commit(APP_MUTATIONS.UPDATE_LOADING, { isLoading: true });
    const res = await fn();
    return res;
  } catch (error) {
    dispatch(APP_ACTIONS.ADD_ERROR_NOTIFICATION, {
      message: error.message
    });
    throw error;
  } finally {
    commit(APP_MUTATIONS.UPDATE_LOADING, { isLoading: false });
  }
};

export default handleAction;
