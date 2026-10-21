<template>
  <div class="page-shell contact-page">
    <section class="contact-intro">
      <h1 class="display-title">Travaillons<br />ensemble</h1>
      <p>Un projet, une envie, une question, une idée, une collaboration&nbsp;?</p>
    </section>

    <section class="contact-layout">
      <aside class="contact-aside">
        <figure class="portrait">
          <img src="../assets/images/gallery/IMAGE PAS DANS GALLERY/IMG_915808.png" alt="Manon Le Bihan" />
        </figure>

        <div class="email-contacts">
          <div>
            <span>Projets freelance</span>
            <p>Photo, vidéo, communication et direction artistique</p>
            <a :href="`mailto:${site.freelanceEmail}`">{{ site.freelanceEmail }}</a>
          </div>
          <div>
            <span>CDI, CDD &amp; agences</span>
            <p>Postes en agence, projets internes et collaborations longue durée</p>
            <a :href="`mailto:${site.careerEmail}`">{{ site.careerEmail }}</a>
            <router-link class="cv-link" to="/journal-photo/cv-et-experiences-professionnelles">Voir mon CV →</router-link>
          </div>
        </div>

        <ul class="direct-links">
          <li>
            <a :href="site.instagram" target="_blank" rel="noopener">
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a :href="site.linkedin" target="_blank" rel="noopener">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </aside>

      <form class="contact-form" @submit.prevent="sendMail">
        <header class="form-head">
          <h2>Parlons-en</h2>
          <p>Décrivez votre projet en quelques lignes, je reviens vers vous.</p>
        </header>

        <fieldset class="topics">
          <legend>Votre projet concerne</legend>
          <label v-for="topic in topics" :key="topic" class="chip">
            <input v-model="form.topics" type="checkbox" :value="topic" />
            <span>{{ topic }}</span>
          </label>
        </fieldset>

        <div class="inline-fields">
          <label class="field">
            <span>Nom</span>
            <input v-model="form.lastName" type="text" autocomplete="family-name" placeholder="Votre nom" />
          </label>
          <label class="field">
            <span>Prénom</span>
            <input v-model="form.firstName" type="text" autocomplete="given-name" placeholder="Votre prénom" />
          </label>
        </div>
        <label class="field">
          <span>Email</span>
          <input v-model="form.email" type="email" autocomplete="email" required placeholder="vous@exemple.com" />
        </label>
        <label class="field">
          <span>Votre message</span>
          <textarea v-model="form.message" required placeholder="Parlez-moi de votre projet, de vos envies, de vos délais…"></textarea>
        </label>
        <div class="actions">
          <button type="submit">Envoyer par mail <span aria-hidden="true">→</span></button>
          <a :href="whatsappUrl" target="_blank" rel="noopener">Ou sur WhatsApp</a>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { site } from '../data/site.ts'

const topics = ['Direction artistique', 'Branding', 'Photo', 'Vidéo', 'Autre']

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  message: '',
  topics: [] as string[]
})

const whatsappUrl = computed(() => {
  const message = encodeURIComponent(`Bonjour Manon, je souhaite parler d'un projet. ${form.message}`)
  return `${site.whatsapp}?text=${message}`
})

const sendMail = () => {
  const subject = encodeURIComponent('Nouveau projet')
  const topicLine = form.topics.length ? `Projet : ${form.topics.join(', ')}\n` : ''
  const body = encodeURIComponent(`Nom : ${form.lastName}\nPrénom : ${form.firstName}\nEmail : ${form.email}\n${topicLine}\n${form.message}`)
  window.location.href = `mailto:${site.freelanceEmail}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  padding-bottom: 0;
}

.contact-intro {
  display: grid;
  gap: 42px;
  grid-template-columns: 1fr 0.62fr;
  padding: 44px 0 48px;
}

.contact-intro .display-title {
  font-size: clamp(52px, 8vw, 86px);
}

.contact-intro p {
  align-self: end;
  color: var(--color-brown);
  font-size: 16px;
  font-style: italic;
  line-height: 1.45;
  max-width: 340px;
}

.contact-layout {
  align-items: start;
  border-top: 2px solid var(--color-black);
  display: grid;
  gap: clamp(40px, 6vw, 80px);
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1fr);
  padding: clamp(40px, 5vw, 64px) 0 clamp(56px, 7vw, 88px);
}

.contact-aside {
  display: grid;
  justify-items: start;
  position: sticky;
  top: 40px;
}

.portrait {
  position: relative;
  width: min(100%, 340px);
}

.portrait::before {
  border: 1.5px solid var(--color-yellow);
  bottom: -12px;
  content: '';
  left: 12px;
  position: absolute;
  right: -12px;
  top: 12px;
}

.portrait img {
  aspect-ratio: 4 / 5;
  display: block;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.email-contacts {
  display: grid;
  gap: 18px;
  margin-top: 36px;
}

.email-contacts > div {
  border-left: 2px solid var(--color-yellow);
  padding-left: 14px;
}

.email-contacts span {
  display: block;
  font-family: var(--font-barlow);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
}

.email-contacts p {
  font-size: 13px;
  font-style: normal;
  line-height: 1.4;
  margin: 4px 0 6px;
}

.email-contacts a {
  border-bottom: 1px solid currentColor;
  font-size: 14px;
  padding-bottom: 2px;
}

.email-contacts a:hover {
  color: var(--color-brown);
}

.email-contacts .cv-link {
  display: block;
  font-weight: 600;
  margin-top: 10px;
  width: fit-content;
}

.direct-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  margin-top: 30px;
}

.direct-links a {
  align-items: center;
  border: 1.5px solid var(--color-black);
  border-radius: 999px;
  display: inline-flex;
  font-family: var(--font-barlow);
  font-size: 17px;
  font-weight: 800;
  gap: 10px;
  letter-spacing: 0.04em;
  line-height: 1;
  padding: 13px 24px;
  text-transform: uppercase;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.direct-links a span {
  font-size: 15px;
}

.direct-links a:hover {
  background: var(--color-black);
  color: var(--color-cream);
}

.direct-links a:focus-visible {
  outline: 2px solid var(--color-brown);
  outline-offset: 3px;
}

.contact-form {
  background: var(--color-black);
  border-radius: 14px;
  box-shadow: 0 24px 60px -32px rgba(17, 17, 17, 0.55);
  color: var(--color-off-white);
  display: grid;
  gap: 26px;
  padding: clamp(28px, 4vw, 52px);
}

.form-head {
  border-bottom: 1px solid rgba(245, 245, 245, 0.18);
  padding-bottom: 20px;
}

.form-head h2 {
  font-family: var(--font-barlow);
  font-size: clamp(32px, 3.4vw, 44px);
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
}

.form-head p {
  color: var(--color-yellow);
  font-size: 13px;
  margin-top: 8px;
}

.topics {
  border: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 0;
  padding: 0;
}

.topics legend {
  font-size: 11px;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  opacity: 0.6;
  padding: 0;
  text-transform: uppercase;
}

.chip {
  cursor: pointer;
  display: block;
}

.chip input {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}

.chip span {
  border: 1px solid rgba(245, 245, 245, 0.35);
  border-radius: 999px;
  display: block;
  font-size: 13px;
  padding: 8px 16px;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.chip:hover span {
  border-color: var(--color-yellow);
}

.chip input:checked + span {
  background: var(--color-yellow);
  border-color: var(--color-yellow);
  color: var(--color-black);
  font-weight: 600;
}

.chip input:focus-visible + span {
  outline: 2px solid var(--color-off-white);
  outline-offset: 2px;
}

.inline-fields {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
}

.field {
  display: grid;
  gap: 6px;
}

.field span {
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.6;
  text-transform: uppercase;
}

.field input,
.field textarea {
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(245, 245, 245, 0.35);
  border-radius: 0;
  color: var(--color-off-white);
  font: inherit;
  font-size: 16px;
  outline: 0;
  padding: 10px 0;
  transition: border-color 0.2s ease;
  width: 100%;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(245, 245, 245, 0.3);
}

.field input:focus,
.field textarea:focus {
  border-bottom-color: var(--color-yellow);
}

.field textarea {
  min-height: 130px;
  resize: vertical;
}

.actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 6px;
}

.actions button {
  background: var(--color-yellow);
  border: 0;
  border-radius: 999px;
  color: var(--color-black);
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.actions button:hover {
  background: #fff;
  transform: translateY(-1px);
}

.actions a {
  border-bottom: 1px solid currentColor;
  font-size: 13px;
  opacity: 0.8;
  padding-bottom: 2px;
}

.actions a:hover {
  opacity: 1;
}

@media (max-width: 900px) {
  .contact-intro {
    gap: 22px;
    grid-template-columns: 1fr;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-aside {
    position: static;
  }
}

@media (max-width: 640px) {
  .inline-fields {
    grid-template-columns: 1fr;
  }

  .contact-intro {
    padding-top: 28px;
  }

  .portrait {
    width: 100%;
  }
}
</style>
