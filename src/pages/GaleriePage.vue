<template>
  <div class="galerie-page">
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
            v-for="(series, seriesIdx) in gallerySeries"
            :key="`series-${seriesIdx}`"
          >
            <div
              v-for="(image, imgIndex) in series.images"
              :key="`${seriesIdx}-${imgIndex}`"
              class="gallery-item"
            >
              <img :src="image" :alt="`${series.title} - ${imgIndex + 1}`" />
              <div class="gallery-overlay">
                <span class="zoom-icon">⬈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gallerySeries } from '../data/gallery.ts';

const expandedArticle = ref<number | null>(0)
</script>

<style scoped>
.galerie-page {
  background-color: var(--color-black);
  padding: 80px 40px 120px;
}

.galerie-container {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 6rem;
}

/* Section Titles */
.section-title {
  font-family: var(--font-anton);
  font-size: 18px;
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
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 8px;
  transition: opacity 0.3s ease;
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
}

@media (max-width: 768px) {
  .galerie-page {
    padding: 60px 20px 80px;
  }

  .galerie-container {
    gap: 3rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .content-images {
    grid-template-columns: 1fr;
  }
}
</style>
