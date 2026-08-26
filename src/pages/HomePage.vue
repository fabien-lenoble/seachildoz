<template>
  <div class="page-shell home-page">
    <section class="home-hero">
      <div class="hero-copy">
        <h1 class="display-title">Art direction<br />image & branding</h1>
        <p class="soft-italic">Photography<br />communication<br />illustration</p>
        <p class="intro text-small">
          Directrice artistique basee a Paris, je cree des images, des identites et des recits visuels pour des marques, des artistes et des projets qui cherchent une presence claire.
        </p>
      </div>

      <div class="hero-visual">
        <img :src="homePortrait" alt="Portrait creatif" />
      </div>
    </section>

    <section class="universe-strip">
      <router-link
        to="/work/client"
        class="universe-card"
      >
        <img class="universe-bg" :src="clientHero" alt="" aria-hidden="true" />
        <span class="universe-copy">
          <h2>Univers client</h2>
          <p>Campagnes, directions artistiques, identites, creations visuelles...</p>
        </span>
        <span class="universe-arrow" aria-hidden="true">→</span>
      </router-link>
      <router-link
        to="/work/personnel"
        class="universe-card"
      >
        <img class="universe-bg" :src="personalHero" alt="" aria-hidden="true" />
        <span class="universe-copy">
          <h2>Univers personnel</h2>
          <p>Photographies personnelles, portraits, editorial, fine art...</p>
        </span>
        <span class="universe-arrow" aria-hidden="true">→</span>
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { clientHero, homePortrait, personalHero } from '../data/portfolio.ts';
</script>

<style scoped>
.home-page {
  padding-bottom: 0;
}

.home-hero {
  display: grid;
  grid-template-columns: minmax(320px, 0.88fr) minmax(320px, 1.04fr);
  min-height: clamp(700px, 70vh, 800px);
  overflow: hidden;
  position: relative;
}

.hero-copy {
  align-content: start;
  display: grid;
  padding: 96px 0 66px 20px;
}

.hero-copy .display-title {
  animation: homeReveal 0.7s ease both;
  margin-bottom: 26px;
}

.soft-italic {
  animation: homeReveal 0.7s ease 0.08s both;
  max-width: 420px;
}

.intro {
  animation: homeReveal 0.7s ease 0.16s both;
  align-self: end;
  margin-top: clamp(76px, 10vh, 118px);
  max-width: 255px;
}

.hero-visual {
  align-self: end;
  display: flex;
  justify-content: flex-end;
  min-height: 610px;
  overflow: hidden;
}

.hero-visual img {
  animation: imageReveal 0.9s ease 0.12s both;
  align-self: end;
  height: min(64vh, 660px);
  max-width: 100%;
  object-fit: contain;
  object-position: bottom right;
}

.universe-strip {
  background: var(--color-black);
  color: var(--color-off-white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 calc(var(--page-pad) * -1);
  min-height: 150px;
  overflow: hidden;
  padding: 52px var(--page-pad);
  position: relative;
}

.universe-strip::before {
  background: rgba(245, 241, 232, 0.28);
  content: '';
  height: calc(100% - 66px);
  left: 50%;
  position: absolute;
  top: 33px;
  width: 1px;
}

.universe-card {
  align-content: start;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 64px;
  margin-bottom: -52px;
  margin-left: calc(var(--page-pad) * -1);
  margin-top: -52px;
  min-width: 0;
  padding: 52px clamp(44px, 7vw, 94px) 52px var(--page-pad);
  position: relative;
  text-align: left;
}

.universe-card + .universe-card {
  margin-left: 0;
  margin-right: calc(var(--page-pad) * -1);
  padding-left: clamp(44px, 7vw, 94px);
  padding-right: var(--page-pad);
}

.universe-arrow {
  align-self: end;
  grid-column: 2;
  grid-row: 1 / 3;
  justify-self: end;
}

.universe-bg {
  filter: grayscale(1) contrast(1.05);
  height: 100%;
  inset: 0;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.18s ease;
  width: 100%;
}

.universe-card::after {
  background: rgba(20, 20, 20, 0.72);
  content: '';
  inset: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.18s ease;
}

.universe-card:hover .universe-bg,
.universe-card:hover::after {
  opacity: 1;
}

.universe-copy,
.universe-arrow {
  position: relative;
  z-index: 1;
}

.universe-copy {
  display: block;
  grid-column: 1;
}

.universe-card h2 {
  font-size: clamp(22px, 2.6vw, 32px);
  line-height: 1;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.universe-card p {
  grid-column: 1;
  font-size: 15px;
  line-height: 1.5;
  max-width: 280px;
}

.universe-arrow {
  font-size: 46px;
  line-height: 0.8;
  transition: transform 0.3s ease;
}

.universe-card:hover .universe-arrow {
  transform: translateX(8px);
}

@keyframes homeReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes imageReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .home-hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-copy {
    padding: 40px 0 18px;
  }

  .intro {
    margin-top: 34px;
  }

  .hero-visual {
    min-height: 360px;
  }

  .hero-visual img {
    height: 420px;
    width: 100%;
  }

  .universe-strip {
    grid-template-columns: 1fr;
    gap: 34px;
    padding-bottom: 48px;
    padding-top: 48px;
  }

  .universe-strip::before {
    display: none;
  }
}
</style>
