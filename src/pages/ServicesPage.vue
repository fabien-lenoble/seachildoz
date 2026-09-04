<template>
  <div class="page-shell prestations-page">
    <section class="prestations-intro">
      <h1 class="display-title">Prestations</h1>
      <p>Direction artistique, image et identite pour donner une forme claire aux projets, aux marques et aux histoires.</p>
    </section>

    <section class="prestations-grid">
      <article
        v-for="(service, index) in services"
        :key="service.title"
        class="prestation-item"
      >
        <span class="prestation-index">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="prestation-icon" aria-hidden="true" v-html="service.icon"></span>
        <h2>{{ service.title }}</h2>
        <p>{{ service.text }}</p>
      </article>
    </section>

    <section class="tarifs-cta-section">
      <a
        class="tarifs-cta"
        href="/documents/formule-et-tarifs.pdf"
        target="_blank"
        rel="noopener"
      >
        <span class="cta-copy">
          <strong>Formule & tarifs</strong>
          <span>Consulter le detail des offres et accompagnements</span>
        </span>
        <span class="cta-target">Telecharger <span aria-hidden="true">→</span></span>
      </a>
    </section>

    <footer class="prestations-footer">
      <section class="stats-band">
        <div>
          <strong>10+</strong>
          <span>Annees d'experience</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>Projets realises</span>
        </div>
        <p>Des marques, des artistes,<br />des entrepreneurs,<br />des rencontres.</p>
      </section>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { services } from '../data/portfolio.ts';
</script>

<style scoped>
.prestations-page {
  padding-bottom: 0;
}

.prestations-intro {
  display: grid;
  gap: 42px;
  grid-template-columns: 1fr 0.62fr;
  padding: 44px 0 48px;
}

.prestations-intro .display-title {
  font-size: clamp(52px, 8vw, 86px);
}

.prestations-intro p {
  align-self: end;
  font-size: 16px;
  line-height: 1.4;
  max-width: 340px;
}

.prestations-grid {
  border-top: 2px solid var(--color-black);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.prestation-item {
  border-bottom: 1px solid var(--color-line);
  min-height: 300px;
  padding: 40px 30px 36px 10px;
  position: relative;
  transition: background 0.35s ease;
}

.prestation-item:not(:nth-child(3n)) {
  border-right: 1px solid var(--color-line);
}

.prestation-item:hover {
  background: var(--color-black);
  color: var(--color-off-white);
}

.prestation-item:hover .prestation-icon,
.prestation-item:hover .prestation-index {
  color: var(--color-yellow-bright, #f0d24a);
}

.prestation-index {
  display: block;
  font-family: var(--font-barlow);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-muted);
  margin-bottom: 18px;
}

.prestation-icon {
  color: var(--color-black);
  display: block;
  height: 46px;
  margin-bottom: 22px;
  transition: color 0.35s ease;
  width: 46px;
}

.prestation-icon :deep(svg) {
  display: block;
  height: 100%;
  width: 100%;
}

.prestation-item h2 {
  font-family: var(--font-barlow);
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 800;
  line-height: 0.98;
  max-width: 260px;
  text-transform: uppercase;
}

.prestation-item p {
  font-size: 14px;
  line-height: 1.55;
  margin-top: 16px;
  max-width: 260px;
}

.tarifs-cta-section {
  border-bottom: 1px solid var(--color-line);
}

.tarifs-cta {
  align-items: center;
  display: grid;
  gap: 18px;
  justify-items: center;
  min-height: 220px;
  padding: 64px var(--page-pad);
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
}

.tarifs-cta:hover {
  background: var(--color-black);
  color: var(--color-off-white);
}

.tarifs-cta .cta-copy {
  display: grid;
  gap: 10px;
  justify-items: center;
  padding-left: 0;
}

.tarifs-cta .cta-copy strong {
  display: block;
  font-family: var(--font-barlow);
  font-size: clamp(32px, 4.4vw, 48px);
  text-transform: uppercase;
}

.tarifs-cta .cta-copy span {
  display: block;
  font-size: 14px;
  margin-top: 0;
}

.tarifs-cta .cta-target {
  align-items: center;
  display: flex;
  font-weight: 700;
  gap: 14px;
  text-transform: uppercase;
}

.tarifs-cta .cta-target span {
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
  margin-top: 0;
}

.prestations-footer {
  margin: 0 calc(var(--page-pad) * -1);
}

.stats-band {
  align-items: center;
  background: linear-gradient(135deg, var(--color-black) 0%, #2c2c2c 100%);
  color: var(--color-off-white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 186px;
  padding: 34px var(--page-pad);
  text-align: left;
}

.stats-band > div,
.stats-band > p {
  padding-left: 10px;
}

.stats-band strong {
  display: block;
  font-family: var(--font-barlow);
  font-size: clamp(42px, 4vw, 62px);
  letter-spacing: 0.09em;
  line-height: 1;
}

.stats-band span {
  display: block;
  font-size: 13px;
  margin-top: 10px;
  text-transform: uppercase;
}

.stats-band p {
  justify-self: start;
  line-height: 1.7;
  text-align: left;
}

@media (max-width: 640px) {
  .prestations-intro,
  .prestations-grid,
  .stats-band,
  .tarifs-cta {
    grid-template-columns: 1fr;
  }

  .prestation-item,
  .prestation-item:not(:nth-child(3n)) {
    border-right: 0;
  }

  .tarifs-cta {
    gap: 18px;
    min-height: auto;
    padding: 30px var(--page-pad);
  }

  .tarifs-cta .cta-target {
    justify-content: flex-start;
  }

  .stats-band {
    gap: 32px;
    text-align: left;
  }

  .stats-band p {
    justify-self: start;
  }
}
</style>
