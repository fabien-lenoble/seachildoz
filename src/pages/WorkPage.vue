<template>
  <div class="page-shell work-page" :class="{ dark: isPersonal }">
    <section v-if="!selectedUniverse" class="work-landing">
      <router-link class="work-band client" to="/work/client">
        <img :src="clientHero" alt="Univers client" />
        <div>
          <h1>Univers client</h1>
          <p>Campagnes - direction artistiques - identites - creation visuelles - videos</p>
          <span class="arrow-link">Entrer</span>
        </div>
      </router-link>
      <router-link class="work-band personal" to="/work/personnel">
        <img :src="personalHero" alt="Univers personnel" />
        <div>
          <h1>Univers personnel</h1>
          <p>Photographie - portraits - editorials - storytelling - fine art - expositions</p>
          <span class="arrow-link">Entrer</span>
        </div>
      </router-link>
    </section>

    <section v-else-if="selectedUniverse === 'client'" class="client-listing">
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
          <img v-if="project.cover" :src="project.cover" :alt="project.title" />
          <span>
            <strong>{{ project.title }}</strong>
            {{ project.subtitle }}
          </span>
        </button>
      </div>
    </section>

    <section v-else class="personal-listing">
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
          v-for="(image, index) in personalProject?.images"
          :key="image"
          class="project-tile image-tile"
          type="button"
          @click="openLightbox(index)"
        >
          <img :src="image" :alt="`Seachildoz ${index + 1}`" />
        </button>
      </div>
    </section>

    <div v-if="lightboxImage" class="lightbox" @click="lightboxImage = null">
      <button type="button" @click.stop="lightboxImage = null">Fermer</button>
      <img :src="lightboxImage" alt="Image agrandie" @click.stop />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { clientHero, personalHero, projects, type WorkCategory, type WorkUniverse } from '../data/portfolio.ts'

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

const activeFilter = ref<(typeof filters)[number]['value']>('all')
const lightboxImage = ref<string | null>(null)

const selectedUniverse = computed(() => route.params.universe as WorkUniverse | undefined)
const isPersonal = computed(() => selectedUniverse.value === 'personnel')
const clientProjects = computed(() => projects.filter(project => project.universe === 'client'))
const personalProject = computed(() => projects.find(project => project.universe === 'personnel'))

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return clientProjects.value
  return clientProjects.value.filter(project => project.categories.includes(activeFilter.value as WorkCategory))
})

const openProject = (slug: string) => {
  router.push(`/work/${slug}`)
}

const openLightbox = (index: number) => {
  const image = personalProject.value?.images[index]
  if (image) lightboxImage.value = image
}

watch(selectedUniverse, () => {
  activeFilter.value = 'all'
})
</script>

<style scoped>
.work-page {
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
  background: rgba(0, 0, 0, 0.48);
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
  gap: 6px;
}

.client-grid {
  grid-template-columns: repeat(3, 1fr);
}

.project-tile {
  aspect-ratio: 1 / 1;
  border: 0;
  color: var(--color-off-white);
  cursor: pointer;
  display: block;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: left;
}

.project-tile img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.project-tile::after {
  background: linear-gradient(180deg, transparent 36%, rgba(0, 0, 0, 0.42));
  content: '';
  inset: 0;
  position: absolute;
}

.project-tile span {
  bottom: 22px;
  font-family: var(--font-barlow);
  font-size: clamp(18px, 2vw, 27px);
  left: 22px;
  line-height: 0.98;
  position: absolute;
  text-transform: uppercase;
  z-index: 1;
}

.project-tile strong {
  display: block;
}

.mist { background: #b7b5ad; }
.rose { background: #ba8f88; }
.dark-flower { background: #171813; }
.powder { background: #c8948d; }
.desert { background: #a98d70; }

.personal-hero {
  display: grid;
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
  grid-template-columns: repeat(3, 1fr);
  margin-top: 6px;
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

.lightbox button {
  background: transparent;
  border: 0;
  color: var(--color-off-white);
  cursor: pointer;
  position: absolute;
  right: 32px;
  text-transform: uppercase;
  top: 28px;
}

.lightbox img {
  max-height: 86vh;
  max-width: 90vw;
  object-fit: contain;
}

@media (max-width: 640px) {
  .work-band,
  .personal-hero {
    min-height: 330px;
  }

  .client-grid,
  .personal-grid {
    grid-template-columns: 1fr;
  }
}
</style>
