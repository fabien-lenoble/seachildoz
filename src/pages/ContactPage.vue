<template>
  <div class="page-shell contact-page">
    <section class="contact-layout">
      <div class="contact-heading">
        <h1 class="display-title">Travaillons<br />ensemble</h1>
        <p>Un projet, une envie<br />une question, une idee,<br />une collaboration...?</p>
      </div>

      <form class="contact-form" @submit.prevent="sendMail">
        <div class="inline-fields">
          <label>
            <span>Nom</span>
            <input v-model="form.lastName" type="text" />
          </label>
          <label>
            <span>Prenom</span>
            <input v-model="form.firstName" type="text" />
          </label>
        </div>
        <label>
          <span>Email</span>
          <input v-model="form.email" type="email" />
        </label>
        <label>
          <span>Votre message</span>
          <textarea v-model="form.message"></textarea>
        </label>
        <div class="actions">
          <button type="submit">Envoyer par mail</button>
          <a :href="whatsappUrl" target="_blank" rel="noreferrer">Whatsapp</a>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { site } from '../data/site.ts'

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  message: ''
})

const whatsappUrl = computed(() => {
  const message = encodeURIComponent(`Bonjour Manon, je souhaite parler d'un projet. ${form.message}`)
  return `${site.whatsapp}?text=${message}`
})

const sendMail = () => {
  const subject = encodeURIComponent('Nouveau projet')
  const body = encodeURIComponent(`Nom: ${form.lastName}\nPrenom: ${form.firstName}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  padding-bottom: 0;
}

.contact-layout {
  display: grid;
  gap: clamp(40px, 7vw, 96px);
  grid-template-columns: 0.9fr 1fr;
  min-height: 520px;
  padding: 95px 0 16px;
}

.contact-heading .display-title {
  font-size: clamp(48px, 6.4vw, 78px);
}

.contact-heading p {
  color: var(--color-muted);
  font-size: clamp(30px, 4.2vw, 52px);
  font-style: italic;
  font-weight: 300;
  line-height: 1.12;
  margin-top: 10px;
}

.contact-form {
  display: grid;
  gap: 30px;
  padding-top: 24px;
}

.inline-fields {
  display: grid;
  gap: 28px;
  grid-template-columns: 1fr 1fr;
}

label {
  display: grid;
  gap: 10px;
  text-transform: uppercase;
}

label span {
  color: var(--color-muted);
  font-size: 11px;
}

input,
textarea {
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--color-line);
  min-height: 28px;
  outline: 0;
}

textarea {
  border: 1px solid rgba(127, 123, 115, 0.18);
  min-height: 170px;
  padding: 14px;
  resize: vertical;
}

.actions {
  display: flex;
  gap: 24px;
}

.actions button,
.actions a {
  background: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  padding: 0;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .contact-layout,
  .inline-fields {
    grid-template-columns: 1fr;
  }

  .contact-layout {
    padding-top: 58px;
  }
}
</style>
