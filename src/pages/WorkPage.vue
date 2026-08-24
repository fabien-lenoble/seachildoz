<template>
  <div class="work-page">
    <section class="work-hero">
      <div class="work-hero-content">
        <h1 class="title-xl">WORK</h1>
        <p class="work-subtitle">Art Direction · Photography · Branding</p>
      </div>
    </section>

    <section class="work-grid-section">
      <div class="container">
        <div class="work-grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card"
            @click="goToProject(project.id)"
          >
            <div class="project-image">
              <img :src="project.images[0]" :alt="project.title" />
              <div class="project-overlay">
                <span class="project-hover">VIEW PROJECT</span>
              </div>
            </div>
            <div class="project-info">
              <p class="project-client">{{ project.client }}</p>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-year">{{ project.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { projects } from '../data/projects.ts'

const router = useRouter()

const goToProject = (projectId) => {
  router.push(`/work/${projectId}`)
}
</script>

<style scoped>
.work-page {
  background-color: var(--color-black);
  color: var(--color-off-white);
  padding-top: 70px;
}

.work-hero {
  background-color: var(--color-black);
  padding: 80px 20px;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.work-hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.work-subtitle {
  font-family: var(--font-poppins);
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-top: 15px;
  opacity: 0.8;
}

.work-grid-section {
  padding: 80px 20px;
  background-color: var(--color-black);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.project-card {
  cursor: pointer;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: var(--color-beige);
  margin-bottom: 20px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-hover {
  font-family: var(--font-poppins);
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-off-white);
  text-align: center;
}

.project-info {
  padding: 0;
}

.project-client {
  font-family: var(--font-poppins);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 8px;
  opacity: 0.8;
}

.project-title {
  font-family: var(--font-anton);
  font-size: 28px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 8px;
  line-height: 1.1;
}

.project-year {
  font-family: var(--font-poppins);
  font-size: 12px;
  color: var(--color-off-white);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .work-page {
    padding-top: 60px;
  }

  .work-hero {
    padding: 60px 20px;
  }

  .work-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-title {
    font-size: 20px;
  }
}
</style>
