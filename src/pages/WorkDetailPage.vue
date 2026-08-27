<template>
  <div v-if="project" class="page-shell dark detail-page">
    <router-link to="/work/client" class="back-link">← Back to work</router-link>

    <section class="detail-layout">
      <aside class="project-aside">
        <div>
          <h1 class="display-title">{{ project.title }}</h1>
          <h2>{{ project.subtitle }}</h2>
          <p>{{ project.summary }}</p>
        </div>

        <dl>
          <div><dt>Annee</dt><dd>{{ project.year }}</dd></div>
          <div><dt>Client</dt><dd>{{ project.client }}</dd></div>
          <div><dt>Role</dt><dd>{{ project.role }}</dd></div>
          <div v-if="project.place"><dt>Lieu</dt><dd>{{ project.place }}</dd></div>
          <div><dt>Livrables</dt><dd>{{ project.deliverables.join('\n') }}</dd></div>
        </dl>
      </aside>

      <div class="project-board">
        <div class="block cream"></div>
        <div class="block grey"></div>
        <div class="block charcoal"></div>
        <div class="block image-block"><img :src="project.images[0]" :alt="project.title" /></div>
      </div>

      <p class="project-description">{{ project.description }} {{ fillerText }}</p>
    </section>

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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/portfolio.ts'

const route = useRoute()
const clientProjects = computed(() => projects.filter(project => project.universe === 'client'))
const project = computed(() => projects.find(item => item.slug === route.params.id || String(item.id) === route.params.id))
const currentIndex = computed(() => clientProjects.value.findIndex(item => item.slug === project.value?.slug))
const previousProject = computed(() => currentIndex.value > 0 ? clientProjects.value[currentIndex.value - 1] : null)
const nextProject = computed(() => currentIndex.value >= 0 && currentIndex.value < clientProjects.value.length - 1 ? clientProjects.value[currentIndex.value + 1] : null)
const fillerText = 'Le rythme graphique alterne aplats, respirations et images fortes afin de creer une lecture directe, elegante et volontairement editoriale.'
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

.detail-layout {
  display: grid;
  gap: 42px;
  grid-template-columns: 490px 1fr;
}

.project-aside {
  display: grid;
  min-height: 680px;
  padding-left: 12px;
}

.project-aside .display-title {
  font-size: clamp(52px, 6vw, 76px);
}

.project-aside h2 {
  font-family: var(--font-poppins);
  font-size: 25px;
  margin-top: 10px;
  text-transform: uppercase;
}

.project-aside p {
  font-size: 14px;
  line-height: 1.1;
  margin-top: 26px;
}

dl {
  align-self: end;
  display: grid;
  gap: 18px;
  white-space: pre-line;
}

dt {
  font-family: var(--font-barlow);
  font-size: 15px;
  line-height: 1;
  text-transform: uppercase;
}

dd {
  font-weight: 700;
  line-height: 1.05;
  margin: 0;
}

.project-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 310px 390px;
}

.block {
  min-height: 200px;
  overflow: hidden;
}

.cream { background: var(--color-cream); }
.grey { background: #777977; }
.charcoal { background: #2e2e2e; }
.image-block { background: #747775; }
.image-block img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.project-description {
  grid-column: 2;
  line-height: 1.15;
  margin: -16px 0 34px;
  max-width: 470px;
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
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .project-aside {
    min-height: auto;
  }

  dl {
    margin-top: 34px;
  }

  .project-board {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(180px, 1fr));
    margin-top: 0;
  }

  .project-description {
    grid-column: 1;
    margin-top: 0;
  }
}
</style>
