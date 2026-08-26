<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue';
</script>

<style>
@import './styles/globals.css';

#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-cream);
}

main {
  min-height: calc(100vh - var(--header-height));
}
</style>
