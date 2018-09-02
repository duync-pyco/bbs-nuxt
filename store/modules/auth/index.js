import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = () => ({
  showModal: false
});

export default {
  namespaced: false,
  actions,
  mutations,
  getters,
  state
};
