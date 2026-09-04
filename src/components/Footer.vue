<template>
  <footer class="footer">
    <div class="footer-content">
      <router-link to="/contact" class="footer-cta footer-section">
        <span class="cta-title">UNE IDÉE ?<br />UN PROJET ?</span>
        <span class="cta-link">Écrivons-le ensemble</span>
      </router-link>

      <div class="footer-section">
        <h3>MANON LE BIHAN</h3>
        <p>Directrice Artistique &amp;<br />creative multidisciplinaire</p>
        <p>{{ site.city }}</p>
      </div>

      <div class="footer-section">
        <h4>CONTACT</h4>
        <ul>
          <li><a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
          <li><a :href="site.whatsapp" target="_blank" rel="noopener">Whatsapp</a></li>
          <li><a :href="site.linkedin" target="_blank" rel="noopener">Linkedin</a></li>
          <li><a :href="site.instagram" target="_blank" rel="noopener">Instagram</a></li>
          <li><a :href="site.vimeo" target="_blank" rel="noopener">Vimeo</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>INFOS</h4>
        <ul>
          <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
          <li><router-link to="/confidentialite">Confidentialité</router-link></li>
          <li>© {{ year }} Manon Le Bihan</li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>SITE</h4>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/work">Projets</router-link></li>
          <li><router-link to="/about">Histoire</router-link></li>
          <li><router-link to="/prestations">Savoir faire</router-link></li>
          <li><router-link to="/journal-photo">Journal</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../data/site.ts';

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-off-white);
}

.footer-cta {
  display: block;
}

.cta-title {
  display: block;
  font-family: var(--font-barlow);
  font-weight: 800;
  font-size: clamp(19px, 2vw, 24px);
  line-height: 1.1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.cta-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid var(--color-yellow-bright, #f0d24a);
  color: var(--color-yellow-bright, #f0d24a);
  padding-bottom: 2px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr;
  gap: 32px;
  padding: 30px var(--page-pad, 40px);
}

.footer-section h3 {
  font-family: var(--font-barlow);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.footer-section h4 {
  font-family: var(--font-poppins);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
  opacity: 0.7;
}

.footer-section p {
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.8;
}

.footer-section ul {
  list-style: none;
  display: grid;
  gap: 8px;
}

.footer-section a,
.footer-section li {
  font-size: 13px;
  opacity: 0.85;
}

.footer-section a {
  transition: opacity 0.3s ease, color 0.3s ease;
}

.footer-section a:hover {
  color: #fff;
  opacity: 1;
}

.footer-cta:hover .cta-title {
  color: #fff;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}
</style>
