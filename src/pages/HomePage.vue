<template>
  <div class="home-page">
    <!-- Hero Section with Full Screen Content -->
    <section class="hero">
      <img
        class="hero-image"
        src="/src/assets/images/landing.jpeg"
        alt="Background"
      />

      <div class="hero-overlay">
        <div class="hero-content">
          <div class="hero-left">
            <h1 class="hero-title">
              MANON LE BIHAN
            </h1>
            <p class="hero-subtitle">Art Direction · Photography · Communication · Branding</p>

            <nav class="hero-navigation">
              <router-link to="/work" class="nav-item">WORK</router-link>
              <router-link to="/expo-photo" class="nav-item">EXPO PHOTO</router-link>
              <a href="https://www.etsy.com" target="_blank" class="nav-item">SHOP</a>
              <router-link to="/about" class="nav-item">À PROPOS DE MOI</router-link>
            </nav>
          </div>

          <div class="hero-right">
            <!-- Decorative element or image on the right -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  background-color: var(--color-black);
}

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 70px;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  padding: 0 60px;
}

.hero-content {
  width: 100%;
  max-width: 1400px;
  gap: 4rem;
  z-index: 3;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.hero-title {
  font-family: var(--font-anton);
  font-size: clamp(48px, 8vw, 96px);
  letter-spacing: 0.08em;
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-cream);
  margin-bottom: 30px;
  text-shadow: none;
}

.hero-subtitle {
  font-family: var(--font-poppins);
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 80px;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-item {
  font-family: var(--font-anton);
  font-size: 44px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  background: none;
  border: none;
  padding: 0;
  transition: opacity 0.3s ease;
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.nav-item:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .hero {
    margin-top: 60px;
    height: auto;
    min-height: 100vh;
  }

  .hero-overlay {
    padding: 60px 30px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-right {
    display: none;
  }

  .hero-title {
    font-size: clamp(32px, 8vw, 56px);
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 12px;
    margin-bottom: 60px;
  }

  .nav-item {
    font-size: 16px;
  }
}
</style>
