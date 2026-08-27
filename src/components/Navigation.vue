<template>
  <nav class="navigation" :class="{ dark: isDarkRoute }">
    <div class="page-indicator">{{ pageIndicator }}</div>
    <div class="nav-container">
      <router-link to="/" class="nav-logo" @click="closeMobileMenu">
        MANON<br />LE BIHAN
      </router-link>

      <button class="nav-toggle" type="button" :aria-expanded="mobileMenuOpen" @click="toggleMenu">
        <span :class="{ active: mobileMenuOpen }"></span>
        <span :class="{ active: mobileMenuOpen }"></span>
      </button>

      <ul :class="['nav-links', { open: mobileMenuOpen }]">
        <li><router-link to="/work" @click="closeMobileMenu">WORK</router-link></li>
        <li><router-link to="/about" @click="closeMobileMenu">ABOUT</router-link></li>
        <li><router-link to="/prestations" @click="closeMobileMenu">PRESTATIONS</router-link></li>
        <li><router-link to="/journal-photo" @click="closeMobileMenu">JOURNAL</router-link></li>
        <li><router-link to="/contact" @click="closeMobileMenu">CONTACT</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const mobileMenuOpen = ref(false)

const isDarkRoute = computed(() => {
  return route.path.includes('/work/') || route.path === '/work/personnel' || route.path.startsWith('/journal-photo/')
})

const pageIndicator = computed(() => {
  if (route.path === '/work') return 'WORK (ACCUEIL)'
  if (route.path === '/work/client') return 'WORK (CLIENT)'
  if (route.path === '/work/personnel') return 'WORK (PERSONNEL)'
  if (route.path.startsWith('/work/')) return 'WORK (CLIENT)'
  if (route.path === '/prestations' || route.path === '/services') return 'PRESTATIONS'
  if (route.path.startsWith('/journal-photo')) return 'JOURNAL'
  return 'ACCUEIL'
})

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.navigation {
  background-color: var(--color-cream);
  color: var(--color-black);
  z-index: 100;
  padding: 0 var(--page-pad);
}

.page-indicator {
  border-bottom: 1px solid currentColor;
  font-size: 11px;
  line-height: 1;
  padding: 23px 0 14px;
  text-transform: uppercase;
}

.navigation.dark {
  background-color: var(--color-black);
  color: var(--color-off-white);
}

.nav-container {
  border-top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  padding: 18px 0px;
}

.nav-logo {
  font-family: var(--font-barlow);
  font-size: clamp(30px, 3.5vw, 40px);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.98;
  text-transform: uppercase;
}

.nav-links {
  align-items: center;
  display: flex;
  gap: clamp(22px, 3.1vw, 40px);
  list-style: none;
  padding-top: 18px;
}

.nav-links a {
  font-family: var(--font-poppins);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: uppercase;
  color: currentColor;
  opacity: 0.48;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 1;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
  padding: 0;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background-color: currentColor;
  transition: all 0.3s ease;
  display: block;
}

.nav-toggle span.active:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.nav-toggle span.active:nth-child(2) {
  transform: rotate(-45deg) translate(-10px, -10px);
}

@media (max-width: 640px) {
  .navigation {
    padding: 0 20px;
  }

  .page-indicator {
    font-size: 18px;
    padding: 18px 0 12px;
  }

  .nav-container {
    align-items: flex-start;
    padding-top: 16px;
  }

  .nav-logo {
    font-size: 30px;
    line-height: 0.98;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 124px;
    left: 20px;
    right: 20px;
    flex-direction: column;
    gap: 16px;
    background-color: currentColor;
    color: var(--color-cream);
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    align-items: flex-start;
  }

  .nav-links.open {
    max-height: 360px;
    padding: 20px;
  }

  .nav-links li {
    width: 100%;
    padding: 8px 0;
  }

  .nav-links a {
    color: var(--color-cream);
    font-size: 18px;
    opacity: 1;
  }
}
</style>
