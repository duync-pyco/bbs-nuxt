<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="title" placeholder="title" v-model.lazy="article.title" autofocus required />
      <input type="text" name="author" placeholder="author" v-model.lazy="article.author" required />
      <input type="email" name="email" placeholder="email address" v-model.lazy="article.email" required />
      <textarea type="text" name="content" placeholder="content" cols="40" rows="5" v-model.lazy="article.content" required></textarea>
      <Button id="submit-button">Submit</Button>
    </form>
  </div>
</template>

<script>
import Button from '~/elements/button';

const emptyArticle = {
  title: '',
  author: '',
  email: '',
  content: ''
};

export default {
  components: { Button },
  props: {
    initArticle: {
      type: Object,
      default() {
        return { ...emptyArticle };
      }
    }
  },
  data() {
    return {
      article: { ...this.initArticle }
    };
  },
  watch: {
    initArticle() {
      this.article = { ...this.initArticle };
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.article });
    }
  }
};
</script>


<style scoped>
@import './index.css';
</style>

