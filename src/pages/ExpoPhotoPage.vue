<template>
  <div class="expo-photo-page">
    <section class="expo-hero">
      <div class="expo-hero-content">
        <h1 class="title-xl">SEACHILDOZ</h1>
        <p class="expo-subtitle">Personal Photographic Universe</p>
      </div>
    </section>

    <section class="expo-navigation">
      <div class="container">
        <div class="expo-tabs">
          <router-link
            to="/galerie"
            :class="['expo-tab', { active: $route.path === '/galerie' }]"
          >
            GALERIE
          </router-link>
          <router-link
            to="/journal-photo"
            :class="['expo-tab', { active: $route.path === '/journal-photo' }]"
          >
            JOURNAL PHOTO
          </router-link>
        </div>
      </div>
    </section>

    <section class="expo-content">
      <router-view />
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.expo-photo-page {
  background-color: var(--color-black);
  color: var(--color-off-white);
  padding-top: 70px;
}

.expo-hero {
  background-color: var(--color-black);
  padding: 80px 20px;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.expo-hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.expo-subtitle {
  font-family: var(--font-poppins);
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-top: 15px;
  opacity: 0.8;
}

.expo-navigation {
  background-color: var(--color-black);
  border-bottom: 1px solid var(--color-beige);
  padding: 30px 20px;
}

.expo-tabs {
  display: flex;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.expo-tab {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-off-white);
  padding-bottom: 15px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.expo-tab:hover {
  opacity: 0.7;
}

.expo-tab.active {
  border-bottom-color: var(--color-off-white);
  opacity: 1;
}

.expo-content {
  background-color: var(--color-black);
}

@media (max-width: 768px) {
  .expo-photo-page {
    padding-top: 60px;
  }

  .expo-hero {
    padding: 60px 20px;
  }

  .expo-tabs {
    gap: 2rem;
    padding: 0;
  }

  .expo-tab {
    font-size: 12px;
  }
}
</style>
