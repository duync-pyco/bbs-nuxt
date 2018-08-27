import { MUTATIONS } from './constants';

const setArticles = (state, { articles }) => {
  state.articles = articles;
};

const add = (state, { article }) => {
  state.articles.push(article);
};

const update = (state, { article }) => {
  const index = state.articles.findIndex(value => value.id === article.id);
  state.articles[index] = article;
};

const remove = (state, { id }) => {
  const index = state.articles.findIndex(value => value.id === id);
  state.articles.splice(index, 1);
};

export default {
  [MUTATIONS.SET_ARTICLES]: setArticles,
  [MUTATIONS.ADD]: add,
  [MUTATIONS.UPDATE]: update,
  [MUTATIONS.REMOVE]: remove
};
