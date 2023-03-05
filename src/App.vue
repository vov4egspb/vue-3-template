<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
@import '../node_modules/primevue/resources/themes/saga-blue/theme.css';
@import '../node_modules/primevue/resources/primevue.min.css';
@import '../node_modules/primeicons/primeicons.css';
</style>
