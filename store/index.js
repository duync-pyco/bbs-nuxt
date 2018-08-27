import Vuex from 'vuex';
import articles from './modules/articles';

export const createStore = () =>
  new Vuex.Store({
    modules: {
      articles
    }
  });

export default createStore;
