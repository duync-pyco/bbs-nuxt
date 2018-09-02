import Vuex from 'vuex';
import articles from './modules/articles';
import auth from './modules/auth';

export const createStore = () =>
  new Vuex.Store({
    modules: {
      articles,
      auth
    }
  });

export default createStore;
