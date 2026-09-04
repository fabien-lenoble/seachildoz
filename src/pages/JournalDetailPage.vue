<template>
  <div v-if="entry" class="page-shell dark journal-detail-page">
    <router-link to="/journal-photo" class="back-link">← Retour journal</router-link>

    <article class="journal-detail">
      <div class="media-column">
        <figure class="lead-image">
          <img :src="entry.images[0]" :alt="entry.title" />
        </figure>

        <section class="article-gallery" aria-label="Images de l'article">
          <figure v-for="(image, index) in entry.images.slice(1)" :key="image" :class="`gallery-image image-${index}`">
            <img :src="image" :alt="`${entry.title} ${index + 2}`" />
          </figure>
        </section>
      </div>

      <div class="content-column">
        <header class="article-header">
          <span>{{ entry.category }}</span>
          <h1 class="display-title">{{ entry.title }}</h1>
          <p>{{ entry.excerpt }}</p>
        </header>

        <div class="article-body">
          <p v-for="paragraph in entry.text" :key="paragraph" v-html="formatParagraph(paragraph)"></p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { journalItems } from '../data/portfolio.ts'

const route = useRoute()
const entry = computed(() => journalItems.find(item => item.slug === route.params.slug))

// supports **bold**, *italic* and \n line breaks in journal text
function formatParagraph(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
}
</script>

<style scoped>
.journal-detail-page {
  min-height: 100vh;
}

.back-link {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  margin: 18px 0 34px;
  text-transform: uppercase;
}

.journal-detail {
  display: grid;
  column-gap: 44px;
  grid-template-columns: minmax(280px, 0.9fr) minmax(300px, 0.78fr);
  position: relative;
}

.journal-detail::before {
  background: rgba(245, 241, 232, 0.26);
  content: '';
  height: 100%;
  left: calc((100% - 44px) * 0.535);
  position: absolute;
  top: 0;
  width: 1px;
}

.media-column {
  display: grid;
  gap: 10px;
  min-width: 0;
}

.content-column {
  border-left: 1px solid rgba(245, 241, 232, 0.26);
  display: grid;
  gap: 18px;
  min-width: 0;
  padding-left: 26px;
}

.article-header {
  align-self: start;
  display: grid;
  gap: 10px;
}

.article-header span {
  color: rgba(245, 241, 232, 0.58);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.article-header .display-title {
  font-size: clamp(48px, 6vw, 76px);
}

.article-header p {
  font-size: 15px;
  line-height: 1.32;
  max-width: 360px;
}

.lead-image {
  aspect-ratio: 1.02 / 1;
  margin: 0;
  overflow: hidden;
}

.lead-image img,
.gallery-image img {
  filter: saturate(0.88) contrast(1.03);
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.article-body {
  border-top: 1px solid rgba(245, 241, 232, 0.42);
  display: grid;
  gap: 24px;
  padding-top: 16px;
}

.article-body p {
  font-size: 16px;
  line-height: 1.7;
}

.article-body strong {
  font-weight: 800;
  font-size: 1.15em;
  line-height: 1.35;
}

.article-body em {
  color: rgba(245, 241, 232, 0.75);
  font-style: italic;
}

.article-gallery {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 0.72fr;
}

.gallery-image {
  aspect-ratio: 1 / 1.12;
  margin: 0;
  overflow: hidden;
}

.image-0 {
  min-height: 420px;
}

.image-1 {
  align-self: end;
  min-height: 310px;
}

@media (max-width: 760px) {
  .journal-detail,
  .article-gallery {
    grid-template-columns: 1fr;
  }

  .journal-detail::before {
    display: none;
  }

  .article-header {
    grid-column: 1;
    padding-left: 0;
  }

  .content-column {
    border-left: 0;
    padding-left: 0;
  }

  .article-body {
    grid-column: 1;
    padding-left: 0;
  }

  .image-0,
  .image-1 {
    min-height: 280px;
  }
}
</style>
