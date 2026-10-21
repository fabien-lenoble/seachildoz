<template>
  <div class="page-shell prestations-page">
    <section class="prestations-intro">
      <h1 class="display-title">Savoir Faire</h1>
      <p>Direction artistique, image et identité pour donner une forme claire aux projets, aux marques et aux histoires.</p>
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
        href="/#/document/formules-et-tarifs"
        target="_blank"
        rel="noopener"
      >
        <span class="cta-copy">
          <strong>Formules & tarifs</strong>
          <span>Consulter le détail des offres et accompagnements</span>
        </span>
        <span class="cta-target">Consulter <span aria-hidden="true">→</span></span>
      </a>
    </section>

    <section class="stats-row">
      <div class="stat">
        <strong>10+</strong>
        <span>Années d'expérience</span>
      </div>
      <div class="stat">
        <strong>100+</strong>
        <span>Projets réalisés</span>
      </div>
      <p class="stats-note">Des marques, des artistes, des entrepreneurs, des rencontres.</p>
    </section>
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

.tarifs-cta:hover .cta-copy strong {
  color: var(--color-brown);
}

.tarifs-cta:hover .cta-target {
  opacity: 0.6;
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

.stats-row {
  align-items: center;
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto 1fr;
  padding: 56px 0 64px;
}

.stat {
  align-items: center;
  border-left: 2px solid var(--color-black);
  display: flex;
  gap: 10px;
  padding-left: 22px;
}

.stat strong {
  font-family: var(--font-barlow);
  font-size: clamp(24px, 2.4vw, 32px);
  letter-spacing: 0.02em;
  line-height: 1;
}

.stat span {
  color: var(--color-muted);
  font-size: 12px;
  text-transform: uppercase;
  white-space: nowrap;
}

.stats-note {
  justify-self: end;
  line-height: 1.6;
  max-width: none;
  text-align: right;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .prestations-intro,
  .prestations-grid,
  .stats-row,
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

  .stats-row {
    gap: 24px;
    text-align: left;
  }

  .stat {
    padding-left: 16px;
  }

  .stats-note {
    justify-self: start;
    text-align: left;
    white-space: normal;
  }
}
</style>
