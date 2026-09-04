<template>
  <div class="page-shell journal-page">
    <section class="journal-head">
      <h1 class="display-title">Journal</h1>
      <p>Notes d'atelier, fragments visuels, recherches et coulisses de creation.</p>
    </section>

    <section class="journal-group">
      <h2 class="group-label">À propos</h2>
      <div class="journal-grid grid-two">
        <router-link
          v-for="item in groupAbout"
          :key="item.slug"
          class="journal-card"
          :to="`/journal-photo/${item.slug}`"
        >
          <img :src="item.image" :alt="item.title" />
          <div>
            <span>{{ item.category }}</span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.excerpt }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="journal-group">
      <h2 class="group-label">Seachildoz</h2>
      <div class="journal-grid grid-three">
        <router-link
          v-for="item in groupSeachildoz"
          :key="item.slug"
          class="journal-card"
          :to="`/journal-photo/${item.slug}`"
        >
          <img :src="item.image" :alt="item.title" />
          <div>
            <span>{{ item.category }}</span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.excerpt }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="journal-group">
      <h2 class="group-label">En savoir plus</h2>
      <div class="journal-grid grid-two">
        <router-link
          v-for="item in groupMore"
          :key="item.slug"
          class="journal-card"
          :to="`/journal-photo/${item.slug}`"
        >
          <img :src="item.image" :alt="item.title" />
          <div>
            <span>{{ item.category }}</span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.excerpt }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { journalItems } from '../data/portfolio.ts';

const groupAbout = computed(() => journalItems.slice(0, 2));
const groupSeachildoz = computed(() => journalItems.slice(2, 5));
const groupMore = computed(() => journalItems.slice(5, 7));
</script>

<style scoped>
.journal-page {
  min-height: 100vh;
}

.journal-head {
  align-items: end;
  display: flex;
  justify-content: space-between;
  padding: 46px 0 30px;
}

.journal-head p {
  max-width: 320px;
}

.journal-group {
  padding-bottom: 44px;
}

.group-label {
  font-family: var(--font-barlow);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border-top: 1px solid var(--color-line);
  padding-top: 14px;
  margin-bottom: 16px;
}

.journal-grid {
  display: grid;
  gap: 10px;
}

.grid-two {
  grid-template-columns: repeat(2, 1fr);
}

.grid-two .journal-card {
  min-height: 400px;
}

.grid-three {
  grid-template-columns: repeat(3, 1fr);
}

.grid-three .journal-card {
  min-height: 340px;
}

.journal-card {
  background: var(--color-black);
  color: var(--color-off-white);
  min-height: 280px;
  overflow: hidden;
  position: relative;
}

.journal-card img {
  filter: saturate(0.8) contrast(1.02);
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.journal-card::after {
  background: linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 0.62));
  content: '';
  inset: 0;
  position: absolute;
}

.journal-card div {
  bottom: 22px;
  left: 22px;
  max-width: 330px;
  position: absolute;
  right: 22px;
  z-index: 1;
}

.journal-card span {
  font-size: 12px;
  text-transform: uppercase;
}

.journal-card h2 {
  font-size: clamp(24px, 3vw, 42px);
  line-height: 1;
  margin: 10px 0;
  text-transform: uppercase;
}

.journal-card p {
  font-size: 13px;
  line-height: 1.25;
}

@media (max-width: 640px) {
  .journal-head {
    align-items: start;
    display: grid;
    gap: 20px;
  }

  .grid-two,
  .grid-three {
    grid-template-columns: 1fr;
  }

  .journal-card,
  .grid-two .journal-card,
  .grid-three .journal-card {
    min-height: 300px;
  }
}
</style>
