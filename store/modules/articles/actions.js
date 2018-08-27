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

const addNewArticle = async (context, { article }) =>
  handleAction(context, async () => {
    const newArticle = await ArticleApi.create(article);
    context.commit(MUTATIONS.ADD, { article: newArticle });
    return newArticle;
  });

// const getArticleById = async (context, { id }) =>
//   handleAction(context, async () => {
//     try {
//       const article = await ArticleApi.getById(id);
//       context.commit(MUTATIONS.UPDATE_CURRENT, { article });
//       return article;
//     } catch (error) {
//       context.commit(MUTATIONS.UPDATE_CURRENT, { article: null });
//       return null;
//     }
//   });

// const updateArticle = async (context, { article }) =>
//   handleAction(context, async () => {
//     await ArticleApi.update(article);
//     context.commit(MUTATIONS.UPDATE_CURRENT, { article });
//   });

// const removeArticle = async (context, { id }) =>
//   handleAction(context, async () => {
//     const deletedArticle = await ArticleApi.remove(id);
//     return deletedArticle;
//   });

export default {
  nuxtServerInit,
  [ACTIONS.GET_ALL]: getAll,
  [ACTIONS.ADD]: addNewArticle
  // [ACTIONS.UPDATE]: updateArticle,
  // [ACTIONS.GET_BY_ID]: getArticleById,
  // [ACTIONS.REMOVE]: removeArticle
};
