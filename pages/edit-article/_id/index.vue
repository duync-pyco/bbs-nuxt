<template>
  <ArticleForm
    v-if="!!article"
    :initArticle="article"
    @submit="handleSubmit"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { GETTERS, ACTIONS } from '~/store/modules/articles/constants';
import ArticleForm from '~/components/article-form';

export default {
  components: { ArticleForm },
  async asyncData({ store, params, error }) {
    const article = await store.dispatch(ACTIONS.GET_BY_ID, {
      id: params.id,
      nuxtError: error
    });
    return { article };
  },
  methods: {
    async handleSubmit(article) {
      await this.updateArticle({
        article: {
          ...article,
          updatedAt: new Date().toString()
        }
      });
      this.$router.push('/articles');
    },
    ...mapActions({
      updateArticle: ACTIONS.UPDATE
    })
  }
};
</script>
