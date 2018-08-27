import Vuex from 'vuex';
import app from './modules/app';
import articles from './modules/articles';

export const createStore = () =>
  new Vuex.Store({
    modules: {
      app,
      articles
    }
  });

export default createStore;
