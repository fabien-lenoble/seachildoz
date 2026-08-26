<template>
  <div class="page-shell prestations-page">
    <section class="prestations-intro">
      <h1 class="display-title">Prestations</h1>
      <p>Direction artistique, image et identite pour donner une forme claire aux projets, aux marques et aux histoires.</p>
    </section>

    <section class="prestations-grid">
      <article v-for="service in services" :key="service.title" class="prestation-item">
        <div class="icon-placeholder" aria-hidden="true"></div>
        <h2>{{ service.title }}</h2>
        <p>{{ service.text }}</p>
      </article>
    </section>

    <section class="packages-section">
      <div class="packages-heading">
        <h2>Formules<br />& accompagnements</h2>
        <p>Des formats simples pour cadrer une collaboration selon le besoin : presence digitale, image d entreprise, creation ponctuelle ou identite complete.</p>
      </div>

      <div class="packages-list">
        <article v-for="item in packages" :key="item.title" class="package-card">
          <div class="package-head">
            <span class="package-eyebrow">{{ item.eyebrow }}</span>
            <h3>{{ item.title }}</h3>
          </div>
          <strong class="package-price">{{ item.price }}</strong>
          <p>{{ item.text }}</p>
          <ul>
            <li v-for="detail in item.items" :key="detail">{{ detail }}</li>
          </ul>
        </article>
      </div>

      <aside class="custom-offer">
        <h3>Sur devis</h3>
        <p>Certains projets demandent un format plus libre : une journee photo, un evenement, un besoin urgent ou une creation hybride. On definit ensemble le perimetre, le rythme et les livrables.</p>
        <ul>
          <li v-for="offer in customOffers" :key="offer">{{ offer }}</li>
        </ul>
      </aside>
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

      <router-link to="/contact" class="project-cta">
        <span class="cta-copy">
          <strong>Un projet en tete ?</strong>
          <span>Donnons vie a vos histoires ensemble</span>
        </span>
        <span class="cta-target">Contact <span aria-hidden="true">→</span></span>
      </router-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { customOffers, packages, services } from '../data/portfolio.ts';
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
  font-size: 15px;
  line-height: 1.35;
  max-width: 340px;
}

.prestations-grid {
  border-top: 1px solid var(--color-line);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.prestation-item {
  border-bottom: 1px solid var(--color-line);
  min-height: 258px;
  padding: 34px 22px 34px 10px;
}

.prestation-item:not(:nth-child(3n)) {
  border-right: 1px solid var(--color-line);
}

.icon-placeholder {
  border: 3px solid var(--color-black);
  border-radius: 50%;
  height: 38px;
  margin-bottom: 26px;
  width: 38px;
}

.prestation-item h2 {
  font-size: clamp(21px, 2.4vw, 29px);
  line-height: 1.02;
  max-width: 260px;
  text-transform: uppercase;
}

.prestation-item p {
  font-size: 14px;
  line-height: 1.55;
  margin-top: 12px;
}

.packages-section {
  border-bottom: 1px solid var(--color-line);
  display: grid;
  gap: 58px;
  grid-template-columns: 0.72fr 1.28fr;
  padding: 86px 0 78px;
}

.packages-heading h2 {
  font-family: var(--font-anton);
  font-size: clamp(34px, 4.5vw, 56px);
  line-height: 0.98;
  text-transform: uppercase;
}

.packages-heading p {
  font-size: 14px;
  line-height: 1.35;
  margin-top: 26px;
  max-width: 300px;
}

.packages-list {
  display: grid;
  gap: 0;
}

.package-card {
  border-top: 1px solid var(--color-line);
  display: grid;
  column-gap: 26px;
  row-gap: 18px;
  grid-template-columns: 1fr auto;
  padding: 27px 0 25px;
}

.package-card:last-child {
  border-bottom: 1px solid var(--color-line);
}

.package-eyebrow {
  color: var(--color-muted);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.package-head {
  display: grid;
  gap: 8px;
}

.package-card h3 {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1;
  text-transform: uppercase;
}

.package-card p {
  grid-column: 1;
  font-size: 13px;
  line-height: 1.25;
  max-width: 430px;
}

.package-price {
  align-self: end;
  font-family: var(--font-poppins);
  font-size: 12px;
  line-height: 1.15;
  padding-bottom: 5px;
  text-align: right;
  text-transform: uppercase;
  white-space: nowrap;
}

.package-card ul {
  display: grid;
  gap: 6px;
  grid-column: 1 / 3;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  margin-top: 4px;
}

.package-card li {
  border-top: 1px solid rgba(127, 123, 115, 0.42);
  font-size: 12px;
  padding-top: 7px;
  text-transform: uppercase;
}

.custom-offer {
  border-top: 1px solid var(--color-line);
  display: grid;
  gap: 28px;
  grid-column: 2;
  grid-template-columns: 0.6fr 1fr;
  padding: 34px 0 0;
}

.custom-offer h3 {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1;
  text-transform: uppercase;
}

.custom-offer p {
  font-size: 13px;
  line-height: 1.3;
}

.custom-offer ul {
  display: grid;
  gap: 8px;
  grid-column: 2;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
}

.custom-offer li {
  border-top: 1px solid rgba(127, 123, 115, 0.42);
  font-size: 12px;
  padding-top: 8px;
  text-transform: uppercase;
}

.prestations-footer {
  margin: 0 calc(var(--page-pad) * -1);
}

.stats-band {
  align-items: center;
  background: var(--color-black);
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
  font-family: var(--font-anton);
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

.project-cta {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 118px;
  padding: 24px var(--page-pad) 34px;
}

.project-cta strong {
  display: block;
  font-family: var(--font-anton);
  font-size: 24px;
  text-transform: uppercase;
}

.cta-copy {
  display: grid;
  gap: 8px;
  padding-left: 10px;
}

.cta-target {
  align-items: center;
  display: flex;
  font-weight: 700;
  gap: 14px;
  padding-right: 10px;
  text-transform: uppercase;
}

.cta-target span {
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
  padding-right: 10px;
}

@media (max-width: 640px) {
  .prestations-intro,
  .prestations-grid,
  .stats-band,
  .packages-section,
  .package-card,
  .package-card ul,
  .custom-offer ul {
    grid-template-columns: 1fr;
  }

  .prestation-item,
  .prestation-item:not(:nth-child(3n)) {
    border-right: 0;
  }

  .packages-section {
    padding: 54px 0;
  }

  .package-price {
    justify-self: start;
    text-align: left;
  }

  .package-card ul,
  .custom-offer,
  .custom-offer ul {
    grid-column: 1;
  }

  .stats-band {
    gap: 32px;
    text-align: left;
  }

  .stats-band p {
    justify-self: start;
  }

  .project-cta {
    min-height: 130px;
  }
}
</style>
