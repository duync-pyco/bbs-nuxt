import { MUTATIONS } from './constants';

const setArticles = (state, { articles }) => {
  state.articles = articles;
};

export default {
  [MUTATIONS.SET_ARTICLES]: setArticles
};
