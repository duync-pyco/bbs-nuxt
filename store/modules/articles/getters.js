import { GETTERS } from './constants';

const articles = state => state.articles;

export default {
  [GETTERS.ARTICLES]: articles
};
