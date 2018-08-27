<template>
  <div class="error">
    <h1 class="title">{{ message }}</h1>
    <p class="description" v-if="statusCode === 404">
      <nuxt-link class="error-link" to="/">Back to the home page</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head() {
    return {
      title: this.message
    };
  },

  data() {
    return {
      mounted: false
    };
  },
  mounted() {
    this.mounted = true;
  },
  created() {
    console.error(this.error);
  },
  watch: {
    error(newErr) {
      if (newErr) {
        console.error(newErr);
      }
    }
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  }
};
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}
</style>
