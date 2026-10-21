<template>
  <div v-if="project" class="page-shell dark detail-page">
    <router-link to="/work/client" class="back-link">← Retour aux projets</router-link>

    <section class="project-intro">
      <h1 class="display-title">{{ project.title }}</h1>
      <p class="project-summary">{{ project.summary }}</p>
    </section>

    <section class="project-overview" aria-label="Présentation du projet">
      <figure v-if="heroMedia" class="project-feature-media">
        <img
          v-if="heroMedia.type === 'image'"
          :src="heroMedia.src"
          :alt="heroMedia.description"
          :class="{ 'flora-feature-image': project.slug === 'flora-dahan-rabesson' }"
        />
        <iframe
          v-else-if="heroMedia.type === 'embed'"
          :src="heroMedia.src"
          :title="heroMedia.description"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <video v-else :src="heroMedia.src" controls preload="metadata"></video>
      </figure>
      <div v-else class="project-feature-empty">Visuels à venir</div>

      <article class="project-presentation" :class="{ 'two-column-presentation': project.slug === 'filmcorporate' }">
        <p class="section-label">Présentation</p>
        <p v-for="(paragraph, index) in presentationParagraphs" :key="index">{{ paragraph }}</p>
      </article>
    </section>

    <section class="project-information">
      <article class="information-card">
        <p class="section-label">Client / agence</p>
        <h2>{{ project.client }}</h2>
        <p v-if="project.clientDescription">{{ project.clientDescription }}</p>
      </article>

      <article class="information-card mission-card">
        <p class="section-label">Mes rôles / missions</p>
        <p>{{ project.role }}</p>
      </article>

      <dl class="project-facts">
        <div><dt>Année</dt><dd>{{ project.year }}</dd></div>
        <div v-if="project.place"><dt>Lieu</dt><dd>{{ project.place }}</dd></div>
        <div><dt>Livrables</dt><dd>{{ project.deliverables.join(' · ') }}</dd></div>
      </dl>
    </section>

    <section v-if="additionalMedia.length" class="project-gallery" aria-label="Autres images et vidéos">
      <div class="media-grid">
        <figure v-for="media in additionalMedia" :key="media.src" class="media-item">
          <button
            v-if="media.type === 'image'"
            class="media-image-trigger"
            type="button"
            :aria-label="`Agrandir l’image : ${media.description}`"
            @click="openImage(media)"
          >
            <img :src="media.src" :alt="media.description" />
          </button>
          <iframe
            v-else-if="media.type === 'embed'"
            :src="media.src"
            :title="media.description"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <video v-else :src="media.src" controls preload="metadata"></video>
          <figcaption v-if="media.type !== 'image'">{{ media.description }}</figcaption>
        </figure>
      </div>
    </section>

    <div
      v-if="enlargedImage"
      ref="imageLightbox"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :aria-label="enlargedImage.description"
      @click.self="closeImage"
      @keydown.esc.stop.prevent="closeImage"
    >
      <button class="image-lightbox-close" type="button" aria-label="Fermer l’image agrandie" @click="closeImage">
        Fermer
      </button>
      <img :src="enlargedImage.src" :alt="enlargedImage.description" />
    </div>

    <nav class="bottom-nav">
      <router-link v-if="previousProject" :to="`/work/${previousProject.slug}`">← Precedent</router-link>
      <span v-else></span>
      <router-link to="/work/client" class="grid-icon">⌘</router-link>
      <router-link v-if="nextProject" :to="`/work/${nextProject.slug}`">Suivant →</router-link>
      <span v-else></span>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getClientProjectMedia, projects, type PortfolioProject, type ProjectMedia } from '../data/portfolio.ts'
import { sortClientProjects } from '../data/projectTypes.ts'

const route = useRoute()
const router = useRouter()
const clientProjects = computed(() => sortClientProjects(projects.filter(project => project.universe === 'client')))
const project = computed(() => projects.find(item => item.slug === route.params.id || String(item.id) === route.params.id))
const currentIndex = computed(() => clientProjects.value.findIndex(item => item.slug === project.value?.slug))
const previousProject = computed(() => currentIndex.value > 0 ? clientProjects.value[currentIndex.value - 1] : null)
const nextProject = computed(() => currentIndex.value >= 0 && currentIndex.value < clientProjects.value.length - 1 ? clientProjects.value[currentIndex.value + 1] : null)

const getFallbackProjectMedia = (item: PortfolioProject): ProjectMedia[] => {
  return item.images.map((src, index) => ({
    type: 'image',
    src,
    category: 'Selection',
    description: item.imageCaptions?.[index] || `${item.title} · visuel ${index + 1}`
  }))
}

const displayMedia = computed(() => {
  if (!project.value) return []

  const clientMedia = getClientProjectMedia(project.value)
  const projectMedia = project.value.media ?? []
  const fallbackMedia = clientMedia.length ? [] : getFallbackProjectMedia(project.value)
  return [...clientMedia, ...fallbackMedia, ...projectMedia]
})

const heroMedia = computed<ProjectMedia | null>(() => {
  if (project.value?.featureImage) {
    return {
      type: 'image',
      src: project.value.featureImage,
      description: `${project.value.title} · image principale`
    }
  }

  const firstMedia = displayMedia.value[0]
  if (firstMedia) return firstMedia

  const cover = project.value?.cover
  return cover
    ? { type: 'image', src: cover, description: `${project.value?.title ?? 'Projet'} · couverture` }
    : null
})
const additionalMedia = computed(() => displayMedia.value.filter(media => media !== heroMedia.value))
const presentationParagraphs = computed(() =>
  project.value?.description.split(/\n\s*\n/).map(paragraph => paragraph.trim()).filter(Boolean) ?? []
)
const enlargedImage = ref<ProjectMedia | null>(null)
const imageLightbox = ref<HTMLDivElement | null>(null)

const openImage = (media: ProjectMedia) => {
  enlargedImage.value = media
  nextTick(() => imageLightbox.value?.focus())
}

const closeImage = () => {
  enlargedImage.value = null
}

const handleKeydown = (event: KeyboardEvent) => {
  if (enlargedImage.value) {
    if (event.key === 'Escape') closeImage()
    return
  }

  if (event.key === 'ArrowRight' && nextProject.value) router.push(`/work/${nextProject.value.slug}`)
  else if (event.key === 'ArrowLeft' && previousProject.value) router.push(`/work/${previousProject.value.slug}`)
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.detail-page {
  padding-bottom: 0;
}

.back-link {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  margin: 12px 0 30px;
  text-transform: uppercase;
}

.project-intro {
  border-bottom: 1px solid rgba(245, 241, 232, 0.4);
  padding-bottom: 28px;
}

.section-label {
  color: rgba(245, 241, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-intro .display-title {
  color: var(--color-off-white);
  font-size: clamp(42px, 5vw, 68px);
  line-height: 0.98;
  margin: 8px 0 12px;
}

.project-summary {
  font-size: clamp(17px, 2vw, 22px);
  line-height: 1.4;
  max-width: 760px;
}

.project-overview {
  align-items: center;
  display: grid;
  gap: clamp(28px, 5vw, 68px);
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  padding: clamp(30px, 4vw, 52px) 0;
}

.project-feature-media {
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 280px;
  min-width: 0;
  padding: clamp(14px, 2vw, 24px);
}

.project-feature-media img,
.project-feature-media video,
.project-feature-media iframe {
  aspect-ratio: 4 / 3;
  background: #fff;
  border: 0;
  display: block;
  max-height: 680px;
  max-width: 100%;
  object-fit: contain;
  width: 100%;
}

.project-feature-media iframe {
  aspect-ratio: 16 / 9;
}

.project-feature-media img.flora-feature-image {
  aspect-ratio: 3 / 2;
}

.project-feature-empty {
  align-items: center;
  background: #fff;
  color: #123c55;
  display: flex;
  justify-content: center;
  min-height: 320px;
  padding: 24px;
  text-align: center;
  text-transform: uppercase;
}

.project-presentation {
  align-self: center;
  max-width: 62ch;
}

.project-presentation .section-label {
  margin-bottom: 18px;
}

.project-presentation > p:not(.section-label) {
  font-size: 15px;
  line-height: 1.65;
  margin: 0 0 16px;
}

@media (min-width: 1100px) {
  .project-presentation.two-column-presentation {
    column-count: 2;
    column-gap: clamp(22px, 3vw, 38px);
    max-width: none;
  }

  .project-presentation.two-column-presentation .section-label {
    column-span: all;
  }
}

.project-information {
  display: grid;
  gap: clamp(22px, 3vw, 42px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr) minmax(0, 1fr);
  padding: 30px 0 42px;
}

.information-card {
  border-top: 2px solid var(--color-off-white);
  padding-top: 14px;
}

.information-card h2 {
  font-family: var(--font-barlow);
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.08;
  margin: 10px 0 0;
  text-transform: uppercase;
}

.information-card p:not(.section-label) {
  font-size: 15px;
  line-height: 1.55;
  margin: 10px 0 0;
}

.project-facts {
  display: grid;
  align-content: start;
  gap: 16px;
  margin: 0;
}

.project-facts div {
  border-top: 1px solid rgba(245, 241, 232, 0.4);
  padding-top: 8px;
}

.project-facts dt {
  color: rgba(245, 241, 232, 0.65);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-facts dd {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 6px 0 0;
}

.project-gallery {
  border-top: 1px solid rgba(245, 241, 232, 0.4);
  padding: 30px 0 52px;
}

.media-grid {
  display: grid;
  gap: clamp(14px, 2vw, 22px);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  margin-top: 22px;
}

.media-item {
  margin: 0;
  min-width: 0;
}

.media-image-trigger {
  background: transparent;
  border: 0;
  cursor: zoom-in;
  display: block;
  padding: 0;
  text-align: left;
  width: 100%;
}

.media-image-trigger:focus-visible {
  outline: 2px solid var(--color-off-white);
  outline-offset: 4px;
}

.media-image-trigger img {
  transition: transform 0.25s ease;
}

.media-image-trigger:hover img {
  transform: scale(1.015);
}

.media-item img {
  aspect-ratio: 4 / 3;
  background: #d9d7cf;
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
}

.media-item video,
.media-item iframe {
  aspect-ratio: 16 / 9;
  background: #111;
  border: 0;
  display: block;
  height: auto;
  object-fit: contain;
  width: 100%;
}

.media-item figcaption {
  border-bottom: 1px solid rgba(245, 241, 232, 0.25);
  color: rgba(245, 241, 232, 0.72);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.35;
  padding: 9px 0 13px;
}

.image-lightbox {
  align-items: center;
  background: rgba(12, 12, 12, 0.96);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: clamp(16px, 4vw, 52px);
  position: fixed;
  z-index: 500;
}

.image-lightbox img {
  max-height: 90vh;
  max-width: 94vw;
  object-fit: contain;
}

.image-lightbox-close {
  background: transparent;
  border: 0;
  color: var(--color-off-white);
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  padding: 8px;
  position: absolute;
  right: clamp(16px, 3vw, 36px);
  text-transform: uppercase;
  top: clamp(12px, 2vw, 24px);
}

.bottom-nav {
  border-top: 1px solid var(--color-beige);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin: 36px calc(var(--page-pad) * -1) 0;
  padding: 22px var(--page-pad);
  text-transform: uppercase;
}

.bottom-nav a:last-child {
  justify-self: end;
}

.grid-icon {
  font-size: 26px;
  line-height: 0.8;
}

@media (max-width: 640px) {
  .project-overview {
    grid-template-columns: minmax(0, 1fr);
    padding: 26px 0 32px;
  }

  .project-feature-media {
    min-height: 0;
  }

  .project-information {
    grid-template-columns: 1fr;
    padding: 28px 0 36px;
  }

  .bottom-nav {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
