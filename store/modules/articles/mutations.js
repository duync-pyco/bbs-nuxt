import { MUTATIONS } from './constants';

const setArticles = (state, { articles }) => {
  state.articles = articles;
};

const addArticle = (state, { article }) => {
  state.articles.push(article);
};

export default {
  [MUTATIONS.SET_ARTICLES]: setArticles,
  [MUTATIONS.ADD]: addArticle
};
