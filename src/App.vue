<template>
  <div id="app" :class="{ dark: isDark }">
    <Navigation />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

const route = useRoute()
const isDark = computed(() => route.meta.theme === 'dark')

watch(
  isDark,
  (dark) => {
    document.body.classList.toggle('is-dark', dark)
  },
  { immediate: true }
)
</script>

<style>
@import './styles/globals.css';

#app {
  min-height: 100vh;
  background: var(--color-cream);
}

#app.dark {
  background: var(--color-black);
  color: #fff;
}
</style>
