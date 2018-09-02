import ArticleApi from '~/services/api/articles/';
import { BBSError, handleAction } from '~/helpers/handle-actions/';
import { ACTIONS, MUTATIONS } from './constants';

const getAll = async ({ commit }, { nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const articles = await ArticleApi.getAll();
    commit(MUTATIONS.SET_ARTICLES, { articles });
    return articles;
  });

const getById = async (_, { id, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const article = await ArticleApi.getById(id);
    if (!article)
      throw new BBSError({
        statusCode: 404,
        message: 'Item not found'
      });
    return article;
  });

const add = async ({ commit }, { article, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const newArticle = await ArticleApi.create(article);
    commit(MUTATIONS.ADD, { article: newArticle });
    return newArticle;
  });

const update = async ({ commit }, { article, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    const updatedArticle = await ArticleApi.update(article);
    commit(MUTATIONS.UPDATE, { article: updatedArticle });
    return updatedArticle;
  });

const remove = async ({ commit }, { id, nuxtContext }) =>
  handleAction(nuxtContext, async () => {
    await ArticleApi.remove(id);
    commit(MUTATIONS.REMOVE, { id });
  });

export default {
  [ACTIONS.GET_ALL]: getAll,
  [ACTIONS.ADD]: add,
  [ACTIONS.GET_BY_ID]: getById,
  [ACTIONS.UPDATE]: update,
  [ACTIONS.REMOVE]: remove
};
