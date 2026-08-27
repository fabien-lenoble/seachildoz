<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-copy">
        <h1 class="hero-title">
          DIRECTION<br /> ARTISTIQUE,<br />
          IDENTITÉ<br /> VISUELLE,<br />
          IMAGE
        </h1>
        <p class="hero-subtitle">Je construis des univers visuels sensibles &amp; singuliers.</p>
      </div>

      <div class="hero-collage" aria-hidden="true">
        <div class="polaroid polaroid-a">
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
        <div class="polaroid polaroid-b">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
        <div class="polaroid polaroid-c">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
        <span class="tape tape-1"></span>
        <span class="tape tape-2"></span>
        <svg class="twig" viewBox="0 0 80 120" fill="none">
          <path d="M40 110 V18" stroke="#2a3a28" stroke-width="3" />
          <path d="M40 30 L18 18 M40 42 L62 28 M40 54 L16 44 M40 66 L64 52 M40 78 L20 70 M40 90 L58 80" stroke="#355034" stroke-width="3" stroke-linecap="round" />
        </svg>
        <svg class="bolt" viewBox="0 0 60 90" fill="none">
          <path d="M34 2 L8 48 H30 L18 88 L54 36 H32 L46 2 Z" fill="#f0d24a" stroke="#111" stroke-width="1.2" />
        </svg>
      </div>
    </section>

    <section class="univers">
      <router-link to="/work/client" class="univers-card">
        <div>
          <h2>UNIVERS CLIENT</h2>
          <p>Campagnes, direction artistique, identités, création visuelle, vidéos.</p>
        </div>
        <span class="univers-arrow" aria-hidden="true">→</span>
      </router-link>
      <router-link to="/work/personnel" class="univers-card">
        <div>
          <h2>UNIVERS PERSONNEL</h2>
          <p>Photographies personnelles, portraits, editorial, fine art, expositions.</p>
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
          <li>CONCEPT</li>
        </ul>
      </div>
    </section>

    <section class="portfolio">
      <div class="portfolio-grid">
        <router-link
          v-for="item in highlights"
          :key="item.label"
          :to="item.to"
          class="portfolio-item"
        >
          <img :src="item.image" :alt="item.label" />
          <span class="script-label" :style="{ transform: `rotate(${item.rotate}deg)` }">{{ item.label }}</span>
        </router-link>
      </div>
      <router-link to="/work" class="voir-plus">VOIR PLUS</router-link>
    </section>
  </div>
</template>

<script setup>
const highlights = [
  {
    label: 'PHOTO',
    rotate: -8,
    to: '/work/1',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80'
  },
  {
    label: 'BRANDING',
    rotate: 6,
    to: '/work/2',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80'
  },
  {
    label: 'ART DIRECTION',
    rotate: -4,
    to: '/work/3',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80'
  },
  {
    label: 'ILLUSTRATION',
    rotate: 8,
    to: '/work/4',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4c76f0f4?auto=format&fit=crop&w=900&q=80'
  },
  {
    label: 'VIDEO',
    rotate: -6,
    to: '/work/5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80'
  },
  {
    label: 'CONCEPT',
    rotate: 5,
    to: '/work/6',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<style scoped>
.home-page {
  background: var(--color-cream);
  color: var(--color-black);
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 24px;
  align-items: center;
  /* max-width: 1440px; */
  margin: 0 auto;
  padding: 28px 140px 48px;
  min-height: 72vh;
}

.hero-title {
  font-family: var(--font-barlow);
  font-size: clamp(40px, 6.4vw, 92px);
  font-weight: 800;
  letter-spacing: 0.01em;
  line-height: 1.08;
  text-transform: uppercase;
}

.hero-subtitle {
  margin-top: 22px;
  font-size: 15px;
  max-width: 420px;
}

.hero-collage {
  position: relative;
  height: 560px;
}

.polaroid {
  position: absolute;
  background: #fff;
  padding: 10px 10px 28px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.16);
}

.polaroid img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.polaroid-a {
  width: 250px;
  height: 310px;
  top: 18px;
  left: 18%;
  transform: rotate(-8deg);
  z-index: 2;
}

.polaroid-b {
  width: 230px;
  height: 250px;
  top: 210px;
  left: 4%;
  transform: rotate(7deg);
  z-index: 1;
}

.polaroid-c {
  width: 220px;
  height: 270px;
  top: 200px;
  right: 6%;
  transform: rotate(-3deg);
  z-index: 3;
}

.tape {
  position: absolute;
  width: 78px;
  height: 22px;
  background: repeating-linear-gradient(
    90deg,
    rgba(232, 214, 170, 0.85) 0 8px,
    rgba(245, 236, 214, 0.75) 8px 16px
  );
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
}

.tape-1 {
  top: 8px;
  left: 38%;
  transform: rotate(-18deg);
}

.tape-2 {
  top: 188px;
  right: 18%;
  transform: rotate(22deg);
}

.twig {
  position: absolute;
  width: 70px;
  height: 110px;
  top: 120px;
  left: 8%;
  z-index: 6;
  transform: rotate(-18deg);
}

.bolt {
  position: absolute;
  width: 48px;
  height: 72px;
  bottom: 70px;
  right: 12%;
  z-index: 6;
  transform: rotate(8deg);
}

.univers {
  background: var(--color-black);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.univers-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  padding: 48px 40px;
  color: #fff;
}

.univers-card:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.18);
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
  font-family: var(--font-script);
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

  .hero-collage {
    height: 460px;
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

  .polaroid-a,
  .polaroid-b,
  .polaroid-c {
    width: 180px;
    height: 220px;
  }
}
</style>
