<template>
  <div id="container">
    <ul id="articles-list">
      <li
        class="article-item"
        v-for="article in processedArticles" :key="article.id"
        @click.prevent="handleArticleClick(article.id)"
      >
        <ArticleItem v-bind="article"/>
      </li>
    </ul>
    <hr>
    <div id="footer-container">
      <div id="select-container">
        <span id="select-label">Articles per page</span>
        <select name="Articles per page" v-model="pageSize">
          <option
            v-for="(pageSizeOption, index) in pageSizeOptions"
            :key="index"
            :value=pageSizeOption
          >
            {{ pageSizeOption }} items
          </option>
        </select>
      </div>
      <div id="pagination-container">
        <Button class="pagination-button" @click="decreaseIndex()">Back</Button>
        <span id="pagination-index">Page {{ pageIndex }}</span>
        <Button class="pagination-button" @click="increaseIndex()">Next</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { GETTERS, ACTIONS } from '~/store/modules/articles/constants';
import ArticleItem from '~/components/article-item';
import Button from '~/elements/button';

export default {
  components: { ArticleItem, Button },
  data() {
    return {
      pageSizeOptions: [1, 2, 3, 5, 8],
      pageSize: 2,
      pageIndex: 1
    };
  },
  fetch({ store, error }) {
    return store.dispatch(ACTIONS.GET_ALL, { nuxtError: error });
  },
  computed: {
    start() {
      return (this.pageIndex - 1) * this.pageSize;
    },
    end() {
      return this.start + this.pageSize;
    },
    total() {
      return this.articles.length;
    },
    processedArticles() {
      const copyArticles = [...this.articles];
      return copyArticles
        .sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        )
        .slice(this.start, this.end);
    },
    ...mapGetters({
      articles: GETTERS.ARTICLES
    })
  },
  watch: {
    pageSize() {
      this.pageIndex = 1;
      this.updateQuery();
    },
    pageIndex() {
      this.updateQuery();
    },
    $route() {
      this.syncQuery();
    }
  },
  methods: {
    handleArticleClick(id) {
      this.$router.push(`/articles/${id}`);
    },
    syncQuery() {
      const { query } = this.$route;

      if (query && query.size && query.index) this.getQuery();
      else this.updateQuery();
    },
    getQuery() {
      const { query } = this.$route;

      this.pageSize = parseInt(query.size, 10);
      this.pageIndex = parseInt(query.index, 10);
    },
    updateQuery() {
      this.$router.push({
        query: {
          size: this.pageSize,
          index: this.pageIndex
        }
      });
    },
    increaseIndex() {
      if (this.pageIndex * this.pageSize < this.total) ++this.pageIndex;
    },
    decreaseIndex() {
      if (this.pageIndex > 1) --this.pageIndex;
    }
  },
  created() {
    this.syncQuery();
  }
};
</script>

<style scoped>
@import './index.css';
</style>

