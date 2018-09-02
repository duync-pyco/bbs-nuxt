<template>
  <ArticleForm @submit="this.handleSubmit"/>
</template>

<script>
import { mapActions } from 'vuex';

import { ACTIONS } from '~/store/modules/articles/constants';
import ArticleForm from '~/components/article-form';

export default {
  components: { ArticleForm },
  middleware: ['auth'],
  methods: {
    async handleSubmit(article) {
      const isSuccessful = await this.addNewArticle({ article });
      if (isSuccessful) this.$router.push('/articles');
    },
    ...mapActions({
      addNewArticle: ACTIONS.ADD
    })
  }
};
</script>
