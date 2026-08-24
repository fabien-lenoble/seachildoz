<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
</script>

<style>
@import './styles/globals.css';

#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-black);
}

main {
  min-height: calc(100vh - 140px);
}
</style>
