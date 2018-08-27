<template>
  <div>
    <NavigationBar :title="$router.currentRoute.name"/>
    <hr />
    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation-bar/navigation-bar';

export default {
  components: { NavigationBar }
};
</script>

<style>
@import './default.css';
</style>
