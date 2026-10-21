<template>
  <section v-if="testimonials.length" class="testimonials">
    <div class="testimonials-head">
      <h2>Ce qu'ils en disent</h2>
      <p>Recommandations de clients et de collaborateurs.</p>
    </div>

    <ul class="testimonials-grid">
      <li v-for="item in testimonials" :key="item.author + item.quote" class="testimonial">
        <blockquote>
          <p>{{ item.quote }}</p>
        </blockquote>
        <footer>
          <strong>{{ item.author }}</strong>
          <span>{{ item.role }}</span>
          <small v-if="item.source">via {{ item.source }}</small>
        </footer>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '../data/testimonials.ts'
</script>

<style scoped>
.testimonials {
  background: var(--color-black);
  color: var(--color-off-white);
  padding: clamp(56px, 7vw, 96px) var(--page-pad);
}

.testimonials-head h2 {
  font-family: var(--font-barlow);
  font-size: clamp(30px, 3.6vw, 46px);
  line-height: 1;
  text-transform: uppercase;
}

.testimonials-head p {
  color: var(--color-yellow);
  font-size: 14px;
  margin-top: 10px;
}

.testimonials-grid {
  display: grid;
  gap: clamp(20px, 2.4vw, 32px);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  margin-top: clamp(32px, 4vw, 52px);
}

.testimonial {
  border-top: 2px solid var(--color-yellow);
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding-top: 22px;
}

.testimonial blockquote p {
  font-size: clamp(15px, 1.4vw, 17px);
  line-height: 1.55;
}

.testimonial blockquote p::before {
  content: '« ';
}

.testimonial blockquote p::after {
  content: ' »';
}

.testimonial footer {
  display: grid;
  gap: 3px;
}

.testimonial strong {
  font-family: var(--font-barlow);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.testimonial span {
  font-size: 13px;
  opacity: 0.68;
}

.testimonial small {
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.5;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
