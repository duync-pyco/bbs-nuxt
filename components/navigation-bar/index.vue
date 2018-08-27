<template>
  <div id="container">
    <router-link to="/articles">
      <Button class="navigation-button">Article List</Button>
    </router-link>
    <h1 id="title">{{ this.mappedTitle }}</h1>
    <router-link to="/new-article">
      <Button class="navigation-button">New Article</Button>
    </router-link>
  </div>
</template>

<script>
import Button from '~/elements/button';

const titles = {
  articles: 'Articles',
  'articles-id': 'Article Details',
  'new-article': 'New Article',
  'edit-article-id': 'Edit Article'
};

export default {
  components: { Button },
  computed: {
    mappedTitle() {
      return titles[this.$route.name] || 'Error';
    }
  }
};
</script>

<style scoped>
@import './index.css';
</style>

