import ArticleApi from '~/services/api/articles/';
import { BBSError, handleAction } from '~/helpers/handle-actions/';
import { ACTIONS, MUTATIONS } from './constants';

export default {
  [ACTIONS.GET_ALL]() {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      async fn() {
        const articles = await ArticleApi.getAll({ $axios });
        store.commit(MUTATIONS.SET_ARTICLES, { articles });
        return articles;
      }
    });
  },
  [ACTIONS.GET_BY_ID](_, { id }) {
    const { $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const article = await ArticleApi.getById({ id, $axios });
        if (!article)
          throw new BBSError({
            statusCode: 404,
            message: 'Item not found'
          });
        return article;
      }
    });
  },
  [ACTIONS.ADD](_, { article }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const newArticle = await ArticleApi.create({ article, $axios });
        store.commit(MUTATIONS.ADD, { article: newArticle });
        return newArticle;
      }
    });
  },
  [ACTIONS.UPDATE](_, { article }) {
    const { store, $axios } = this.app;

    return handleAction({
      app: this.app,
      fn: async () => {
        const updatedArticle = await ArticleApi.update({ article, $axios });
        store.commit(MUTATIONS.UPDATE, { article: updatedArticle });
        return updatedArticle;
      }
    });
  },
  [ACTIONS.REMOVE](_, { id }) {
    const { store, $axios } = this.app;
    return handleAction({
      app: this.app,
      fn: async () => {
        await ArticleApi.remove({ id, $axios });
        store.commit(MUTATIONS.REMOVE, { id });
      }
    });
  }
};
