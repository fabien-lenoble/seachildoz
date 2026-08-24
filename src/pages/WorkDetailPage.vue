<template>
  <div class="work-detail-page">
    <!-- Navigation -->
    <div class="project-navigation">
      <router-link to="/work" class="back-link">← BACK TO WORK</router-link>
      <div class="project-counter">
        <button @click="goToPrevious" class="arrow-btn" :disabled="currentIndex === 0">←</button>
        <span>{{ currentIndex + 1 }} / {{ projects.length }}</span>
        <button @click="goToNext" class="arrow-btn" :disabled="currentIndex === projects.length - 1">→</button>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="project-hero">
      <img :src="currentProject.images[0]" :alt="currentProject.title" class="hero-image" />
    </section>

    <!-- Project Details -->
    <section class="project-details">
      <div class="container">
        <div class="details-grid">
          <!-- Left Column: Information -->
          <div class="details-column">
            <h1 class="project-main-title">{{ currentProject.title }}</h1>

            <div class="project-metadata">
              <div class="metadata-item">
                <p class="label-text">CLIENT</p>
                <p class="metadata-value">{{ currentProject.client }}</p>
              </div>
              <div class="metadata-item">
                <p class="label-text">YEAR</p>
                <p class="metadata-value">{{ currentProject.year }}</p>
              </div>
              <div class="metadata-item">
                <p class="label-text">ROLE</p>
                <p class="metadata-value">{{ currentProject.role }}</p>
              </div>
            </div>

            <div class="project-section">
              <h3 class="section-title">CONTEXT</h3>
              <p class="section-text">{{ currentProject.context }}</p>
            </div>

            <div class="project-section">
              <h3 class="section-title">CONCEPT</h3>
              <p class="section-text">{{ currentProject.concept }}</p>
            </div>

            <div class="project-section">
              <h3 class="section-title">SERVICES</h3>
              <ul class="services-list">
                <li v-if="currentProject.artDirection">Art Direction — {{ currentProject.artDirection }}</li>
                <li v-if="currentProject.photography">Photography — {{ currentProject.photography }}</li>
                <li v-if="currentProject.video">Video — {{ currentProject.video }}</li>
                <li v-if="currentProject.graphicDesign">Graphic Design — {{ currentProject.graphicDesign }}</li>
              </ul>
            </div>

            <div class="project-section">
              <h3 class="section-title">PROCESS</h3>
              <p class="section-text">{{ currentProject.process }}</p>
            </div>
          </div>

          <!-- Right Column: Images -->
          <div class="details-column">
            <div class="project-images">
              <img
                v-for="(image, index) in currentProject.images"
                :key="index"
                :src="image"
                :alt="`${currentProject.title} - Image ${index + 1}`"
                class="project-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Navigation Footer -->
    <section class="project-nav-footer">
      <div class="container">
        <div class="nav-footer-content">
          <div v-if="previousProject">
            <p class="nav-label">PREVIOUS PROJECT</p>
            <router-link :to="`/work/${previousProject.id}`" class="nav-project-link">
              {{ previousProject.title }}
            </router-link>
          </div>
          <div v-if="nextProject" class="text-right">
            <p class="nav-label">NEXT PROJECT</p>
            <router-link :to="`/work/${nextProject.id}`" class="nav-project-link">
              {{ nextProject.title }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects.ts'

const router = useRouter()
const route = useRoute()

const currentIndex = computed(() => {
  return projects.findIndex(p => p.id === parseInt(route.params.id))
})

const currentProject = computed(() => {
  return projects[currentIndex.value]
})

const previousProject = computed(() => {
  if (currentIndex.value > 0) {
    return projects[currentIndex.value - 1]
  }
  return null
})

const nextProject = computed(() => {
  if (currentIndex.value < projects.length - 1) {
    return projects[currentIndex.value + 1]
  }
  return null
})

const goToNext = () => {
  if (nextProject.value) {
    router.push(`/work/${nextProject.value.id}`)
  }
}

const goToPrevious = () => {
  if (previousProject.value) {
    router.push(`/work/${previousProject.value.id}`)
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') goToNext()
  if (e.key === 'ArrowLeft') goToPrevious()
}

watch(() => route.params.id, () => {
  window.addEventListener('keydown', handleKeydown)
  return () => window.removeEventListener('keydown', handleKeydown)
}, { immediate: true })
</script>

<style scoped>
.work-detail-page {
  background-color: var(--color-black);
  color: var(--color-off-white);
  padding-top: 70px;
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid var(--color-beige);
  max-width: 1400px;
  margin: 0 auto;
}

.back-link {
  font-family: var(--font-poppins);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 0.7;
}

.project-counter {
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: var(--font-poppins);
  font-size: 13px;
  letter-spacing: 0.08em;
  color: var(--color-off-white);
}

.arrow-btn {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-beige);
  background: transparent;
  color: var(--color-off-white);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-poppins);
  font-size: 16px;
}

.arrow-btn:hover:not(:disabled) {
  background-color: var(--color-off-white);
  color: var(--color-black);
}

.arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.project-hero {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  margin-bottom: 80px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-details {
  padding: 0 20px 100px;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.details-column {
  display: flex;
  flex-direction: column;
}

.project-main-title {
  font-family: var(--font-anton);
  font-size: clamp(32px, 5vw, 64px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 50px;
}

.project-metadata {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color-beige);
}

.metadata-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-text {
  font-family: var(--font-poppins);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
}

.metadata-value {
  font-family: var(--font-poppins);
  font-size: 14px;
  color: var(--color-off-white);
}

.project-section {
  margin-bottom: 50px;
}

.section-title {
  font-family: var(--font-poppins);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 12px;
}

.section-text {
  font-family: var(--font-poppins);
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-off-white);
}

.services-list {
  list-style: none;
  font-family: var(--font-poppins);
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-off-white);
}

.services-list li {
  margin-bottom: 8px;
}

.project-images {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
}

.project-nav-footer {
  padding: 80px 20px;
  border-top: 1px solid var(--color-beige);
  background-color: var(--color-black);
}

.nav-footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-footer-content > div {
  flex: 1;
}

.text-right {
  text-align: right;
}

.nav-label {
  font-family: var(--font-poppins);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 10px;
}

.nav-project-link {
  font-family: var(--font-anton);
  font-size: clamp(24px, 3vw, 48px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-off-white);
  transition: opacity 0.3s ease;
  line-height: 1.1;
}

.nav-project-link:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .work-detail-page {
    padding-top: 60px;
  }

  .project-navigation {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .project-metadata {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-main-title {
    font-size: clamp(24px, 6vw, 40px);
    margin-bottom: 30px;
  }

  .nav-footer-content {
    flex-direction: column;
    gap: 40px;
  }

  .text-right {
    text-align: left;
  }
}
</style>
