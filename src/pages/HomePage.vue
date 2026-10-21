<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-collage" aria-hidden="true">
        <div class="hero-photo">
          <img :src="heroPhoto" alt="" />
        </div>
      </div>

      <div class="hero-copy">
        <h1 class="hero-title">
          <span class="hero-title-main">CRÉATRICE</span>
          <span class="hero-title-secondary">D'HISTOIRES &amp; D'IMAGES</span>
        </h1>
        <p class="hero-subtitle">Construire des univers visuels sensibles &amp; singuliers.</p>
      </div>
    </section>

    <section class="univers">
      <router-link to="/work/client" class="univers-card">
        <img
          class="univers-photo"
          :src="clientUniversePhoto"
          alt=""
          aria-hidden="true"
        />
        <div>
          <h2>UNIVERS CLIENT</h2>
          <p>Campagnes, direction artistique, identités, création visuelle, vidéos.</p>
        </div>
        <span class="univers-arrow" aria-hidden="true">→</span>
      </router-link>
      <router-link to="/work/personnel" class="univers-card">
        <img
          class="univers-photo"
          :src="personalUniversePhoto"
          alt=""
          aria-hidden="true"
        />
        <div>
          <h2>UNIVERS PERSONNEL</h2>
          <p>Photographies personnelles, portraits, éditorial, fine art, expositions.</p>
        </div>
        <span class="univers-arrow" aria-hidden="true">→</span>
      </router-link>
    </section>

    <section class="statement">
      <div class="statement-title-wrap">
        <h2 class="statement-title">
          CRÉER DES
          <span class="circled">
            IMAGES
            <svg class="circle-doodle" viewBox="0 0 220 80" fill="none" aria-hidden="true">
              <path
                d="M18 42 C28 8 70 6 110 14 C160 24 200 8 206 38 C214 72 150 74 96 70 C50 66 10 70 18 42 Z"
                stroke="#f0d24a"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </span>
          QUI RACONTENT QUELQUE CHOSE
        </h2>
      </div>

      <div class="services-col">
        <svg class="hand-arrow" viewBox="0 0 90 40" fill="none" aria-hidden="true">
          <path d="M4 28 C28 8 50 6 78 16" stroke="#111" stroke-width="1.6" fill="none" />
          <path d="M68 8 L80 16 L66 22" stroke="#111" stroke-width="1.6" fill="none" />
        </svg>
        <ul>
          <li>ART DIRECTION</li>
          <li>BRANDING</li>
          <li>IMAGE</li>
          <li>PHOTOGRAPHY</li>
          <li>VIDEO</li>
          <li>ILLUSTRATION</li>
        </ul>
      </div>
    </section>

    <section class="portfolio">
      <div class="portfolio-grid">
        <article
          v-for="item in highlights"
          :key="item.label"
          class="portfolio-item"
        >
          <img :src="item.image" :alt="item.label" />
          <span class="script-label">{{ item.label }}</span>
        </article>
      </div>
      <router-link to="/work" class="voir-plus">VOIR PLUS</router-link>
    </section>

    <Testimonials />
    <ClientLogos />
  </div>
</template>

<script setup>
import ClientLogos from '../components/ClientLogos.vue';
import Testimonials from '../components/Testimonials.vue';
import personalUniversePhoto from '../assets/images/gallery/mains lumiere 5.jpeg';
import heroPhoto from '../assets/images/gallery/nb champs.png';
import artDirectionImage from '../assets/images/gallery/STOCK/12.png';
import storiesImage from '../assets/images/gallery/STOCK/14.png';
import videoImage from '../assets/images/gallery/STOCK/15.png';
import illustrationImage from '../assets/images/gallery/STOCK/17.png';
import photoImage from '../assets/images/gallery/STOCK/2.png';
import brandingImage from '../assets/images/gallery/STOCK/5.png';
import clientUniversePhoto from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Creativeshop_Mockup_2.png';

const highlights = [
  { label: 'PHOTO', image: photoImage },
  { label: 'BRANDING', image: brandingImage },
  { label: 'ART DIRECTION', image: artDirectionImage },
  { label: 'ILLUSTRATION', image: illustrationImage },
  { label: 'VIDEO', image: videoImage },
  { label: 'STORIES', image: storiesImage }
]
</script>

<style scoped>
.home-page {
  background: var(--color-cream);
  color: var(--color-black);
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 82vh;
  overflow: hidden;
  padding: 0 var(--page-pad);
  color: var(--color-off-white);
}

.hero-title {
  font-family: var(--font-barlow);
  font-size: clamp(40px, 6.4vw, 92px);
  font-weight: 800;
  letter-spacing: 0.01em;
  line-height: 1.08;
  text-transform: uppercase;
  padding-bottom: 32px;
}

.hero-title-main,
.hero-title-secondary {
  display: block;
}

.hero-title-main {
  font-size: 1.35em;
  line-height: 0.9;
}

.hero-title-secondary {
  font-size: 0.48em;
  line-height: 1.1;
  margin-top: 18px;
}

.hero-subtitle {
  margin-top: 22px;
  font-size: 16px;
  max-width: 420px;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-collage {
  inset: 0;
  position: absolute;
  z-index: 0;
}

.hero-collage::after {
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.72) 0%, rgba(17, 17, 17, 0.32) 55%, rgba(17, 17, 17, 0.18) 100%);
  content: '';
  inset: 0;
  position: absolute;
  z-index: 1;
}

.hero-photo {
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.hero-photo img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.univers {
  background: var(--color-black);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.univers-card {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  padding: 48px 40px;
  color: #fff;
  overflow: hidden;
}

.univers-card:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.18);
}

.univers-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.univers-card:hover .univers-photo {
  opacity: 0.45;
}

.univers-card > div,
.univers-arrow {
  position: relative;
  z-index: 1;
}

.univers-card h2 {
  font-family: var(--font-barlow);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.univers-card p {
  font-size: 14px;
  line-height: 1.6;
  max-width: 420px;
  opacity: 0.85;
}

.univers-arrow {
  font-size: 22px;
  line-height: 1;
  margin-top: 4px;
}

.statement {
  max-width: 1440px;
  margin: 0 auto;
  padding: 72px 40px 28px;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 32px;
  align-items: start;
}

.statement-title-wrap {
  position: relative;
}

.statement-title {
  font-family: var(--font-barlow);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(36px, 5.6vw, 78px);
  line-height: 0.92;
  text-transform: uppercase;
  max-width: 820px;
}

.circled {
  position: relative;
  display: inline-block;
  padding: 0 8px;
}

.circle-doodle {
  position: absolute;
  width: 120%;
  height: 140%;
  left: -10%;
  top: -18%;
  pointer-events: none;
}

.services-col {
  position: relative;
  padding-top: 18px;
  font-family: var(--font-caveat);
}

.hand-arrow {
  position: absolute;
  width: 88px;
  left: -70px;
  top: -4px;
}

.services-col ul {
  list-style: none;
}

.services-col li {
  font-size: 13px;
  letter-spacing: 0.08em;
  line-height: 1.9;
}

.portfolio {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 40px 80px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.portfolio-item {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 4 / 3.15;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92);
}

.script-label {
  position: absolute;
  left: 14px;
  bottom: 10px;
  font-family: var(--font-caveat);
  color: var(--color-yellow-bright);
  font-size: 30px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.voir-plus {
  display: table;
  margin: 36px auto 0;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-black);
  padding-bottom: 3px;
}

@media (max-width: 980px) {
  .hero,
  .statement,
  .portfolio {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero,
  .statement,
  .univers {
    grid-template-columns: 1fr;
  }

  .hero {
    display: flex;
    min-height: 60vh;
    padding-left: 20px;
    padding-right: 20px;
  }

  .univers-card:first-child {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .hand-arrow {
    display: none;
  }

  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
