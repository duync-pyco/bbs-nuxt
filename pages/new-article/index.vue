<template>
  <ArticleForm @submit="this.handleSubmit"/>
</template>

<script>
import { mapActions } from 'vuex';

import { ACTIONS } from '~/store/modules/articles/constants';
import ArticleForm from '~/components/article-form';

export default {
  name: 'NewArticle',
  components: { ArticleForm },
  methods: {
    async handleSubmit(article) {
      await this.addNewArticle({ article });
      this.$router.push('/articles');
    },
    ...mapActions({
      addNewArticle: ACTIONS.ADD
    })
  }
};
</script>
