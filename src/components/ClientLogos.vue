<template>
  <section class="client-logos">
    <div class="logos-head">
      <h2>Ils m'ont fait confiance</h2>
      <p>Grands groupes, agences, startups et indépendants.</p>
    </div>

    <ul class="logos-grid">
      <li v-for="client in clientLogos" :key="client.name">
        <component
          :is="client.slug ? 'router-link' : 'div'"
          v-bind="client.slug ? { to: `/work/${client.slug}` } : {}"
          class="logo-tile"
        >
          <img
            :src="client.logo"
            :alt="client.name"
            loading="lazy"
            :style="client.scale ? { '--logo-scale': String(client.scale) } : undefined"
          />
        </component>
      </li>
    </ul>

    <p class="logos-more">
      <span v-for="(name, index) in otherClients" :key="name">
        {{ name }}<span v-if="index < otherClients.length - 1" aria-hidden="true"> · </span>
      </span>
    </p>
  </section>
</template>

<script setup lang="ts">
import { clientLogos, otherClients } from '../data/clients.ts'
</script>

<style scoped>
.client-logos {
  border-top: 1px solid var(--color-line);
  padding: clamp(56px, 7vw, 96px) var(--page-pad);
}

.logos-head h2 {
  font-family: var(--font-barlow);
  font-size: clamp(30px, 3.6vw, 46px);
  line-height: 1;
  text-transform: uppercase;
}

.logos-head p {
  color: var(--color-muted, #6c675f);
  font-size: 14px;
  font-style: italic;
  margin-top: 10px;
}

.logos-grid {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(32px, 6vw, 80px);
  justify-content: space-between;
  list-style: none;
  margin-top: clamp(32px, 4vw, 52px);
}

.logo-tile {
  align-items: center;
  display: flex;
  height: clamp(64px, 7vw, 96px);
  justify-content: center;
}

.logo-tile img {
  display: block;
  filter: grayscale(1);
  height: calc(100% * var(--logo-scale, 1));
  max-width: 100%;
  mix-blend-mode: multiply;
  object-fit: contain;
  opacity: 0.75;
  transition: filter 0.25s ease, opacity 0.25s ease;
  width: auto;
}

a.logo-tile:hover img {
  filter: grayscale(0);
  opacity: 1;
}

a.logo-tile:focus-visible {
  outline: 2px solid var(--color-yellow-bright);
  outline-offset: 6px;
}

.logos-more {
  color: var(--color-muted, #6c675f);
  font-size: 13px;
  letter-spacing: 0.04em;
  margin-top: clamp(28px, 3.5vw, 44px);
  text-transform: uppercase;
}

@media (max-width: 560px) {
  .logos-grid {
    gap: 28px 40px;
    justify-content: flex-start;
  }
}
</style>
