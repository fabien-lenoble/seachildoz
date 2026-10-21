<template>
  <div class="page-shell work-page" :class="{ dark: isPersonal }">
    <section v-if="!selectedUniverse" class="work-landing">
      <router-link class="work-band client" to="/work/client">
        <img :src="clientUniversePhoto" alt="Univers client" />
        <div>
          <h1>Univers client</h1>
          <p>Campagnes - direction artistique - identités - création visuelle - vidéos</p>
          <span class="arrow-link">Entrer</span>
        </div>
      </router-link>
      <router-link class="work-band personal" to="/work/personnel">
        <img :src="personalUniversePhoto" alt="Univers personnel" />
        <div>
          <h1>Univers personnel</h1>
          <p>Photographie - portraits - éditoriaux - storytelling - fine art - expositions</p>
          <span class="arrow-link">Entrer</span>
        </div>
      </router-link>
    </section>

    <section v-else-if="selectedUniverse === 'client'" class="client-listing">
      <router-link to="/work" class="back-link">← Retour projets</router-link>
      <h1 class="display-title">Univers client</h1>
      <div class="filters" aria-label="Filtrer les projets">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="{ active: activeFilter === filter.value }"
          type="button"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="project-grid client-grid">
        <button
          v-for="project in filteredProjects"
          :key="project.slug"
          class="project-tile"
          :class="project.palette"
          type="button"
          @click="openProject(project.slug)"
        >
          <img
            v-if="project.cover"
            :src="project.cover"
            :alt="project.title"
            :class="{
              'project-cover-logo': ['orano', 'kiwip-watch-5', 'rainforest-cafe-responsable', 'hopital-saint-joseph-hepatite-c', 'vroomly'].includes(project.slug),
              'project-cover-centered-logo': ['gogorilla', 'orano', 'bel-spot-publicitaire', 'kiwip-watch-5'].includes(project.slug),
              'project-cover-contained-art': project.slug === 'love-fest'
            }"
          />
          <div v-else class="project-placeholder" :class="project.palette" aria-hidden="true">Visuels à venir</div>
          <span class="project-tile-copy">
            <strong>{{ project.title }}</strong>
            <span>{{ project.subtitle }}</span>
            <small>Découvrir le projet <span aria-hidden="true">→</span></small>
          </span>
        </button>
      </div>
    </section>

    <section v-else class="personal-listing">
      <router-link to="/work" class="back-link">← Retour projets</router-link>
      <div class="personal-hero">
        <img :src="personalHero" alt="Seachildoz" />
        <div>
          <h1 class="display-title">Seachildoz</h1>
          <h2>Univers personnel</h2>
          <p>Photographies argentiques<br />& numeriques</p>
        </div>
      </div>
      <div class="project-grid personal-grid">
        <button
          v-for="(image, index) in paginatedPersonalImages"
          :key="image"
          class="project-tile image-tile"
          type="button"
          @click="openLightbox(personalPageStart + index)"
        >
          <img :src="image" :alt="`Seachildoz ${personalPageStart + index + 1}`" />
        </button>
      </div>
      <nav v-if="personalPageCount > 1" class="gallery-pagination" aria-label="Pages de la galerie">
        <button
          v-for="page in personalPageCount"
          :key="page"
          :aria-current="page === personalPage ? 'page' : undefined"
          :class="{ active: page === personalPage }"
          type="button"
          @click="goToPersonalPage(page)"
        >
          {{ page }}
        </button>
      </nav>
    </section>

    <div v-if="lightboxIndex !== null" class="lightbox" @click="closeLightbox">
      <button type="button" class="lightbox-close" @click.stop="closeLightbox">Fermer</button>
      <button type="button" class="lightbox-arrow lightbox-prev" aria-label="Photo precedente" @click.stop="showPrevImage">‹</button>
      <figure v-if="lightboxImage" class="lightbox-figure" @click.stop>
        <img :src="lightboxImage" alt="Image agrandie" />
        <figcaption v-if="lightboxCaption" class="photo-caption">{{ lightboxCaption }}</figcaption>
      </figure>
      <button type="button" class="lightbox-arrow lightbox-next" aria-label="Photo suivante" @click.stop="showNextImage">›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import clientUniversePhoto from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Creativeshop_Mockup_2.png';
import personalUniversePhoto from '../assets/images/gallery/mains lumiere 6.jpeg';
import {
  personalHero,
  projects,
  type WorkCategory,
  type WorkUniverse
} from '../data/portfolio.ts';
import { sortClientProjects } from '../data/projectTypes.ts';
const route = useRoute()
const router = useRouter()

const filters = [
  { label: 'ALL', value: 'all' },
  { label: 'BRANDING', value: 'branding' },
  { label: 'D.A', value: 'da' },
  { label: 'PHOTO', value: 'photo' },
  { label: 'VIDEO', value: 'video' },
  { label: 'ILLUSTRATION', value: 'illustration' }
] as const

const activeFilter = computed({
  get: () => {
    const filterParam = route.query.filter as string | undefined
    if (filterParam && filters.some(f => f.value === filterParam)) {
      return filterParam as (typeof filters)[number]['value']
    }
    return 'all'
  },
  set: (value: (typeof filters)[number]['value']) => {
    const query = { ...route.query }
    if (value === 'all') delete query.filter
    else query.filter = value
    router.replace({ query })
  }
})
const lightboxIndex = ref<number | null>(null)

const selectedUniverse = computed(() => route.params.universe as WorkUniverse | undefined)
const isPersonal = computed(() => selectedUniverse.value === 'personnel')
const clientProjects = computed(() => sortClientProjects(projects.filter(project => project.universe === 'client')))
const personalProject = computed(() => projects.find(project => project.universe === 'personnel'))
const imagesPerPersonalPage = 18
const personalPageCount = computed(() => Math.ceil((personalProject.value?.images.length ?? 0) / imagesPerPersonalPage))
const personalPage = computed(() => {
  const requestedPage = Number(route.query.page)
  if (!Number.isInteger(requestedPage) || requestedPage < 1) return 1
  return Math.min(requestedPage, personalPageCount.value || 1)
})
const personalPageStart = computed(() => (personalPage.value - 1) * imagesPerPersonalPage)
const paginatedPersonalImages = computed(() =>
  personalProject.value?.images.slice(personalPageStart.value, personalPageStart.value + imagesPerPersonalPage) ?? []
)
const lightboxImage = computed(() => {
  if (lightboxIndex.value === null) return null
  return personalProject.value?.images[lightboxIndex.value] ?? null
})
const lightboxCaption = computed(() => {
  if (lightboxIndex.value === null) return null
  return personalProject.value?.imageCaptions?.[lightboxIndex.value] ?? null
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return clientProjects.value
  return clientProjects.value.filter(project => project.categories.includes(activeFilter.value as WorkCategory))
})

const openProject = (slug: string) => {
  router.push(`/work/${slug}`)
}

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}

const goToPersonalPage = (page: number) => {
  router.push({ query: { ...route.query, page: String(page) } })
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const showNextImage = () => {
  const images = personalProject.value?.images
  if (!images?.length || lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % images.length
}

const showPrevImage = () => {
  const images = personalProject.value?.images
  if (!images?.length || lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length
}

const handleKeydown = (event: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  if (event.key === 'ArrowRight') showNextImage()
  else if (event.key === 'ArrowLeft') showPrevImage()
  else if (event.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.work-page {
  min-height: auto;
  padding-bottom: 0;
}

.work-landing {
  display: grid;
  margin: 0px calc(var(--page-pad) * -1) 0;
}

.work-band {
  color: var(--color-off-white);
  display: grid;
  min-height: clamp(440px, 45vh, 520px);
  overflow: hidden;
  padding: 0 var(--page-pad);
  place-items: start start;
  position: relative;
  padding-top: 64px;
}

.work-band::after {
  background: rgba(0, 0, 0, 0.2);
  content: '';
  inset: 0;
  position: absolute;
}

.work-band img {
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.work-band > div {
  max-width: 740px;
  position: relative;
  z-index: 1;
}

.work-band h1 {
  font-size: clamp(46px, 7vw, 80px);
  line-height: 0.92;
  text-transform: uppercase;
  letter-spacing: 1.7px;
}

.work-band p {
  font-weight: 500;
  margin: 12px 0 34px;
  text-transform: uppercase;
}

.client-listing {
  padding-top: 36px;
}

.back-link {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(18px, 4vw, 54px);
  margin: 17px 0;
}

.filters button {
  background: transparent;
  border: 0;
  color: var(--color-muted);
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  text-transform: uppercase;
}

.filters button.active {
  color: var(--color-black);
}

.project-grid {
  display: grid;
  gap: clamp(14px, 1.8vw, 24px);
}

.client-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2.4vw, 32px);
  margin-top: 34px;
}

.project-tile {
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: left;
}

.client-grid .project-tile {
  background: var(--color-off-white);
  color: var(--color-black);
}

.client-grid .project-tile img,
.project-placeholder {
  aspect-ratio: 4 / 3;
  background: #dedad1;
  display: block;
  height: auto;
  object-fit: cover;
  transition: transform 0.55s ease;
  width: 100%;
}

.client-grid .project-tile img.project-cover-logo {
  background: var(--color-off-white);
  object-fit: cover;
  padding: 0;
}

.client-grid .project-tile img.project-cover-centered-logo {
  background: #fff;
  object-fit: contain;
  padding: 18px;
}

.client-grid .project-tile img.project-cover-contained-art {
  background: #fff;
  object-fit: contain;
}

.project-placeholder {
  align-items: center;
  color: var(--color-off-white);
  display: flex;
  font-family: var(--font-barlow);
  font-size: clamp(24px, 3vw, 42px);
  justify-content: center;
  padding: 24px;
  text-align: center;
  text-transform: uppercase;
}

.client-grid .project-tile:hover img {
  transform: scale(1.035);
}

.project-tile:focus-visible {
  outline: 3px solid var(--color-yellow-bright);
  outline-offset: 4px;
  z-index: 2;
}

.project-tile-copy {
  display: grid;
  gap: 8px;
  min-height: 126px;
  padding: 18px 20px 20px;
  position: static;
}

.project-tile-copy > span {
  color: rgba(0, 0, 0, 0.68);
  font-size: 14px;
  line-height: 1.35;
}

.project-tile-copy small {
  align-items: center;
  display: flex;
  font-size: 11px;
  font-weight: 700;
  gap: 8px;
  margin-top: 6px;
  text-transform: uppercase;
}

.project-tile-copy small span {
  font-size: 18px;
  line-height: 0.8;
}

.project-tile strong {
  display: block;
  font-family: var(--font-barlow);
  font-size: clamp(18px, 1.7vw, 23px);
  line-height: 1.08;
  text-transform: uppercase;
}

.mist { background: #b7b5ad; }
.rose { background: #ba8f88; }
.dark-flower { background: #171813; }
.powder { background: #c8948d; }
.desert { background: #a98d70; }

.personal-hero {
  display: grid;
  margin: 0 calc(var(--page-pad) * -1);
  min-height: 550px;
  overflow: hidden;
  padding: 0 var(--page-pad);
  place-items: center start;
  position: relative;
}

.personal-hero::after {
  background: rgba(0, 0, 0, 0.34);
  content: '';
  inset: 0;
  position: absolute;
}

.personal-hero img {
  filter: grayscale(1) contrast(1.05);
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.personal-hero div {
  position: relative;
  z-index: 1;
}

.personal-hero h2 {
  font-family: var(--font-poppins);
  font-size: clamp(24px, 3vw, 34px);
  margin: 6px 0 48px;
  text-transform: uppercase;
}

.personal-grid {
  column-count: 3;
  column-gap: 6px;
  display: block;
  margin-top: 6px;
}

.personal-grid .image-tile {
  aspect-ratio: auto;
  break-inside: avoid;
  display: block;
  margin-bottom: 6px;
  width: 100%;
}

.personal-grid .image-tile img {
  display: block;
  height: auto;
  object-fit: contain;
  width: 100%;
}

.gallery-pagination {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 30px 0 52px;
}

.gallery-pagination button {
  background: transparent;
  border: 0;
  color: rgba(245, 241, 232, 0.6);
  cursor: pointer;
  font-size: 15px;
  min-width: 24px;
  padding: 3px;
}

.gallery-pagination button.active,
.gallery-pagination button:hover {
  color: var(--color-off-white);
  text-decoration: underline;
  text-underline-offset: 5px;
}

.lightbox {
  align-items: center;
  background: rgba(20, 20, 20, 0.94);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 42px;
  position: fixed;
  z-index: 200;
}

.lightbox-close {
  background: transparent;
  border: 0;
  color: var(--color-off-white);
  cursor: pointer;
  font-size: 13px;
  position: absolute;
  right: 32px;
  text-transform: uppercase;
  top: 28px;
}

.lightbox-arrow {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--color-off-white);
  cursor: pointer;
  display: flex;
  font-size: 48px;
  font-weight: 300;
  line-height: 1;
  padding: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.25s ease;
}

.lightbox-arrow:hover {
  opacity: 0.6;
}

.lightbox-prev {
  left: 16px;
}

.lightbox-next {
  right: 16px;
}

.lightbox img {
  max-height: 86vh;
  max-width: 90vw;
  object-fit: contain;
}

.lightbox-figure {
  display: grid;
  gap: 16px;
  justify-items: center;
  margin: 0;
}

.photo-caption {
  color: var(--color-mist);
  font-size: 14px;
  font-style: italic;
  line-height: 1.4;
  max-width: 480px;
  text-align: center;
}

@media (max-width: 640px) {
  .lightbox {
    padding: 20px;
  }

  .lightbox-arrow {
    font-size: 32px;
  }

  .lightbox-prev {
    left: 4px;
  }

  .lightbox-next {
    right: 4px;
  }

  .work-band,
  .personal-hero {
    min-height: 330px;
  }

  .client-grid,
  .personal-grid {
    grid-template-columns: 1fr;
  }

  .personal-grid {
    column-count: 1;
  }
}

@media (max-width: 980px) {
  .client-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .client-grid {
    gap: 14px;
    grid-template-columns: 1fr;
  }

  .project-tile {
    aspect-ratio: auto;
  }

  .project-tile-copy {
    min-height: 118px;
    padding: 16px;
  }
}
</style>
