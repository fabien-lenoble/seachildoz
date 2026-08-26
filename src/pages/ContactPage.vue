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

    <footer class="contact-footer">
      <div>
        <h2>Manon Le Bihan</h2>
        <p>Art Director &<br />Multidisciplinary creative</p>
        <p>Paris, France</p>
      </div>
      <div>
        <h2>Contact</h2>
        <a href="mailto:manon@manon.fr">manon@manon.fr</a>
        <a :href="whatsappUrl" target="_blank" rel="noreferrer">whatsapp</a>
      </div>
      <div class="socials" aria-label="Liens sociaux">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"></a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  message: ''
})

const whatsappUrl = computed(() => {
  const message = encodeURIComponent(`Bonjour Manon, je souhaite parler d'un projet. ${form.message}`)
  return `https://wa.me/?text=${message}`
})

const sendMail = () => {
  const subject = encodeURIComponent('Nouveau projet')
  const body = encodeURIComponent(`Nom: ${form.lastName}\nPrenom: ${form.firstName}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:manon@manon.fr?subject=${subject}&body=${body}`
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

.contact-footer {
  background: var(--color-black);
  color: var(--color-off-white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 calc(var(--page-pad) * -1);
  min-height: 184px;
  padding: 42px var(--page-pad);
}

.contact-footer h2 {
  border-bottom: 1px solid var(--color-line);
  display: inline-block;
  font-family: var(--font-poppins);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 6px;
  text-transform: uppercase;
}

.contact-footer p,
.contact-footer a {
  display: block;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
}

.socials {
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: end;
}

.socials a {
  background: var(--color-cream);
  border-radius: 50%;
  height: 52px;
  width: 52px;
}

@media (max-width: 640px) {
  .contact-layout,
  .contact-footer,
  .inline-fields {
    grid-template-columns: 1fr;
  }

  .contact-layout {
    padding-top: 58px;
  }

  .socials {
    justify-content: start;
  }
}
</style>
