<template>
  <div id="container">
    <ArticleItem
      id="article-item"
      v-bind="article"
    />
    <hr />
    <div id="footer">
      <Button @click="handleEditClick">Edit</Button>
      <Button @click="handleDeleteClick">Delete</Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { GETTERS, ACTIONS } from '~/store/modules/articles/constants';
import ArticleItem from '~/components/article-item';
import Button from '~/elements/button';

export default {
  components: { ArticleItem, Button },
  middleware: ['auth'],
  async asyncData({ store, params }) {
    const article = await store.dispatch(ACTIONS.GET_BY_ID, {
      id: params.id
    });

    if (!article) return { article: null };

    const updatedArticle = await store.dispatch(ACTIONS.UPDATE, {
      article: { ...article, views: article.views + 1 }
    });
    return { article: updatedArticle };
  },
  methods: {
    handleEditClick() {
      this.$router.push(`/edit-article/${this.$route.params.id}`);
    },
    async handleDeleteClick() {
      if (confirm('Are you sure?')) {
        await this.removeArticle({ id: this.$route.params.id });
        this.$router.push('/articles');
      }
    },
    ...mapActions({
      removeArticle: ACTIONS.REMOVE
    })
  }
};
</script>

<style scoped>
@import './index.css';
</style>

