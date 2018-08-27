import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = () => ({
  articles: []
});

export default {
  namespaced: false,
  actions,
  mutations,
  getters,
  state
};
