<template>
  <div class="page-shell journal-page">
    <section class="journal-head">
      <h1 class="display-title">Journal</h1>
      <p>Notes d'atelier, fragments visuels, recherches et coulisses de creation.</p>
    </section>

    <section class="journal-grid">
      <router-link
        v-for="(item, index) in journalItems"
        :key="item.slug"
        class="journal-card"
        :class="`card-${index}`"
        :to="`/journal-photo/${item.slug}`"
      >
        <img :src="item.image" :alt="item.title" />
        <div>
          <span>{{ item.category }}</span>
          <h2>{{ item.title }}</h2>
          <p>{{ item.excerpt }}</p>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { journalItems } from '../data/portfolio.ts'
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

.journal-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
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

.card-0 { grid-column: span 3; min-height: 430px; }
.card-1 { grid-column: span 3; min-height: 310px; }
.card-2 { grid-column: span 2; min-height: 360px; }
.card-3 { grid-column: span 2; min-height: 360px; }
.card-4 { grid-column: span 2; min-height: 360px; }

@media (max-width: 640px) {
  .journal-head {
    align-items: start;
    display: grid;
    gap: 20px;
  }

  .journal-grid {
    grid-template-columns: 1fr;
  }

  .journal-card,
  .card-0,
  .card-1,
  .card-2,
  .card-3,
  .card-4 {
    grid-column: auto;
    min-height: 300px;
  }
}
</style>
