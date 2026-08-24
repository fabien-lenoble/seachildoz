<template>
  <div class="galerie-page">
    <!-- Hero Section -->
    <section class="seachildoz-hero">
      <img 
        class="hero-image"
        :src="heroImage"
        alt="SEACHILDOZ"
      />
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">SEACHILDOZ</h1>
          <p class="hero-subtitle">A personal photographic territory: nocturnal fragments, interior weather, traces of passage.</p>
        </div>
      </div>
      <div class="hero-blur-gradient"></div>
    </section>

    <div class="galerie-container">
      <!-- Left: Blog/Journal Articles (Expandable) -->
      <aside class="journal-section">
        <h2 class="section-title">JOURNAL</h2>

        <div class="articles-list">
          <div
            v-for="(series, idx) in gallerySeries"
            :key="series.id"
            class="article-card"
            :class="{ expanded: expandedArticle === idx }"
          >
            <div class="article-header" @click="expandedArticle = expandedArticle === idx ? null : idx">
              <h3 class="article-title">{{ series.title }}</h3>
              <p class="article-year">{{ series.year }}</p>
              <p class="article-excerpt">{{ series.description }}</p>
              <span class="expand-icon" :class="{ active: expandedArticle === idx }">+</span>
            </div>

            <div v-if="expandedArticle === idx" class="article-content">
              <div class="divider"></div>
              <p class="article-text">
                Une série photographique explorant les nuances de cet univers. Chaque image raconte une histoire,
                un moment, une émotion capturée dans les détails. Cette collection représente des moments intimes,
                des paysages soul et des instants fugaces qui définissent cette univers créatif.
              </p>
              <div class="content-images">
                <img v-for="(image, i) in series.images.slice(0, 2)" :key="i" :src="image" :alt="series.title" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Right: Photo Gallery -->
      <div class="gallery-section">
        <h2 class="section-title">GALERIE PHOTO</h2>
        <div class="gallery-grid">
          <div
            v-for="(image, imgIndex) in allImages"
            :key="`${imgIndex}`"
            class="gallery-item"
            @click="openLightbox(imgIndex)"
          >
            <img :src="image" :alt="`Photo ${imgIndex + 1}`" />
            <div class="gallery-overlay">
              <span class="zoom-icon">⬈</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-modal" @click="closeLightbox">
      <button class="lightbox-close" @click.stop="closeLightbox">✕</button>
      
      <button 
        v-if="currentImageIndex > 0"
        class="lightbox-arrow lightbox-arrow-left" 
        @click.stop="previousImage"
      >
        ←
      </button>

      <div class="lightbox-content" @click.stop>
        <img 
          :src="allImages[currentImageIndex]" 
          :alt="`Photo ${currentImageIndex + 1}`" 
          class="lightbox-image"
        />
      </div>

      <button 
        v-if="currentImageIndex < allImages.length - 1"
        class="lightbox-arrow lightbox-arrow-right" 
        @click.stop="nextImage"
      >
        →
      </button>

      <div class="lightbox-counter">
        {{ currentImageIndex + 1 }} / {{ allImages.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { gallerySeries } from '../data/gallery.ts';
import heroImg from '../assets/images/gallery/tumblr_e811c9d528d32ab442770103666dc504_178dd21b_1280.jpg';

const expandedArticle = ref<number | null>(0)
const heroImage = heroImg

// Lightbox state
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Combine all images from all series into a single array
const allImages = computed(() => {
  return gallerySeries.flatMap(series => series.images)
})

// Lightbox functions
const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentImageIndex.value < allImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>

<style scoped>
.galerie-page {
  background-color: var(--color-black);
}

/* Hero Section */
.seachildoz-hero {
  position: relative;
  width: 100%;
  height: 60vh;
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
  background: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  padding: 0 60px;
}

.hero-content {
  max-width: 600px;
  z-index: 3;
}

.hero-title {
  font-family: var(--font-anton);
  font-size: clamp(48px, 6vw, 80px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-cream);
  margin-bottom: 20px;
  line-height: 0.9;
}

.hero-subtitle {
  font-family: var(--font-poppins);
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  opacity: 0.9;
  line-height: 1.6;
}

/* Main Container */
.galerie-page {
  background-color: var(--color-black);
}

.galerie-container {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 6rem;
  padding: 80px 40px 120px;
  position: relative;
  z-index: 10;
}

.hero-blur-gradient {
  display: none;
}

/* Section Titles */
.section-title {
  font-family: var(--font-anton);
  font-size: 36px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 40px;
}

/* Journal Section - Left */
.journal-section {
  display: flex;
  flex-direction: column;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.article-card {
  border-bottom: 1px solid var(--color-beige);
  padding: 30px 0;
  transition: all 0.3s ease;
}

.article-card:first-child {
  padding-top: 0;
}

.article-header {
  cursor: pointer;
  position: relative;
  user-select: none;
}

.article-header:hover .article-title {
  opacity: 0.8;
}

.article-title {
  font-family: var(--font-anton);
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 8px;
  transition: opacity 0.3s ease;
  line-height: 1.2;
}

.article-year {
  font-family: var(--font-poppins);
  font-size: 12px;
  color: var(--color-beige);
  margin-bottom: 10px;
}

.article-excerpt {
  font-family: var(--font-poppins);
  font-size: 13px;
  color: var(--color-off-white);
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: 15px;
}

.expand-icon {
  position: absolute;
  top: 0;
  right: 0;
  font-family: var(--font-anton);
  font-size: 24px;
  color: var(--color-beige);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.expand-icon.active {
  transform: rotate(45deg);
}

.article-content {
  margin-top: 20px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.divider {
  height: 1px;
  background-color: var(--color-beige);
  margin-bottom: 20px;
}

.article-text {
  font-family: var(--font-poppins);
  font-size: 13px;
  color: var(--color-off-white);
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 20px;
}

.content-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.content-images img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.content-images img:hover {
  transform: scale(1.05);
}

/* Gallery Section - Right */
.gallery-section {
  display: flex;
  flex-direction: column;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  background-color: var(--color-black);
  aspect-ratio: 1;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.zoom-icon {
  color: var(--color-beige);
  font-size: 24px;
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1001;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lightbox-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-cream);
  font-size: 24px;
  padding: 8px;
  cursor: pointer;
  z-index: 1002;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.lightbox-arrow:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.15);
}

.lightbox-arrow-left {
  left: 20px;
}

.lightbox-arrow-right {
  right: 20px;
}

.lightbox-close {
  position: fixed;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: var(--color-cream);
  font-size: 28px;
  width: auto;
  height: auto;
  cursor: pointer;
  z-index: 1003;
  transition: all 0.3s ease;
  padding: 8px;
  opacity: 0.6;
}

.lightbox-close:hover {
  opacity: 1;
  transform: scale(1.15);
}

.lightbox-counter {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-cream);
  font-family: var(--font-poppins);
  font-size: 14px;
  letter-spacing: 0.08em;
  z-index: 1002;
}

@media (max-width: 768px) {
  .lightbox-arrow {
    font-size: 20px;
    padding: 6px;
  }

  .lightbox-close {
    top: 20px;
    right: 20px;
    font-size: 24px;
  }

  .lightbox-counter {
    bottom: 20px;
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .galerie-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .journal-section {
    order: 2;
  }

  .gallery-section {
    order: 1;
  }

  .hero-overlay {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .seachildoz-hero {
    height: 50vh;
  }

  .galerie-page {
    padding: 60px 20px 80px;
  }

  .galerie-container {
    gap: 3rem;
    padding: 60px 20px 80px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .content-images {
    grid-template-columns: 1fr;
  }

  .hero-overlay {
    padding: 0 30px;
  }

  .hero-title {
    font-size: clamp(32px, 8vw, 56px);
  }

  .hero-subtitle {
    font-size: 14px;
  }
}
</style>
