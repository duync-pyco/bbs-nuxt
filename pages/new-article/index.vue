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
    handleSubmit(article) {
      this.addNewArticle({ article }).then(() => {
        this.$router.push('/articles');
      });
    },
    ...mapActions({
      addNewArticle: ACTIONS.ADD
    })
  }
};
</script>
