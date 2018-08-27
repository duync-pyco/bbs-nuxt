<template>
  <div>
    <NavigationBar :title="$router.currentRoute.name"/>
    <hr />
    <div id="app-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation-bar';

export default {
  components: { NavigationBar }
};
</script>

<style>
@import './default.css';
</style>
