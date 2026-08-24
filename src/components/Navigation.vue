<template>
  <nav class="navigation">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <span class="logo-text">MANON LE BIHAN</span>
      </router-link>

      <button @click="toggleMenu" class="nav-toggle">
        <span :class="{ active: mobileMenuOpen }"></span>
        <span :class="{ active: mobileMenuOpen }"></span>
      </button>

      <ul :class="['nav-links', { open: mobileMenuOpen }]">
        <li><router-link to="/work" @click="closeMobileMenu">WORK</router-link></li>
        <li><router-link to="/galerie" @click="closeMobileMenu">EXPO PHOTO</router-link></li>
        <li><a href="https://www.etsy.com" target="_blank" @click="closeMobileMenu">SHOP</a></li>
        <li><router-link to="/about" @click="closeMobileMenu">À PROPOS DE MOI</router-link></li>
        <li><router-link to="/contact" @click="closeMobileMenu">CONTACT / DEVIS</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-beige);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  font-family: var(--font-anton);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-off-white);
  transition: opacity 0.3s ease;
}

.nav-logo:hover {
  opacity: 0.7;
}

.logo-text {
  display: block;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
  align-items: center;
}

.nav-links a {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-off-white);
  position: relative;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.6;
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
  background-color: var(--color-off-white);
  transition: all 0.3s ease;
  display: block;
}

.nav-toggle span.active:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.nav-toggle span.active:nth-child(2) {
  transform: rotate(-45deg) translate(-10px, -10px);
}

@media (max-width: 768px) {
  .nav-container {
    height: 60px;
  }

  .nav-logo {
    font-size: 12px;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background-color: rgba(0, 0, 0, 0.98);
    padding: 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    align-items: flex-start;
  }

  .nav-links.open {
    max-height: 400px;
  }

  .nav-links li {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid var(--color-beige);
  }

  .nav-links a {
    font-size: 14px;
  }
}
</style>
