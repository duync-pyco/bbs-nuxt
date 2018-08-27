import ArticleApi from '~/services/api/articles/';
import handleAction from '~/helpers/handle-actions/';
import { ACTIONS, MUTATIONS } from './constants';

const nuxtServerInit = context => {
  return getAll(context);
};

const getAll = async context =>
  handleAction(context, async () => {
    const articles = await ArticleApi.getAll();
    context.commit(MUTATIONS.SET_ARTICLES, { articles });
    return articles;
  });

const getById = async (context, { id }) =>
  handleAction(context, async () => {
    try {
      const article = await ArticleApi.getById(id);
      return article;
    } catch (error) {
      return null;
    }
  });

const add = async (context, { article }) =>
  handleAction(context, async () => {
    const newArticle = await ArticleApi.create(article);
    context.commit(MUTATIONS.ADD, { article: newArticle });
    return newArticle;
  });

const update = async (context, { article }) =>
  handleAction(context, async () => {
    const updatedArticle = await ArticleApi.update(article);
    context.commit(MUTATIONS.UPDATE, { article: updatedArticle });
    return updatedArticle;
  });

const remove = async (context, { id }) =>
  handleAction(context, async () => {
    await ArticleApi.remove(id);
    context.commit(MUTATIONS.REMOVE, { id });
  });

export default {
  nuxtServerInit,
  [ACTIONS.GET_ALL]: getAll,
  [ACTIONS.ADD]: add,
  [ACTIONS.GET_BY_ID]: getById,
  [ACTIONS.UPDATE]: update,
  [ACTIONS.REMOVE]: remove
};
