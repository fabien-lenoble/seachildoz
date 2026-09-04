<template>
  <div class="page-shell not-found-page">
    <span class="kicker">Erreur 404</span>
    <h1 class="display-title">Page introuvable</h1>
    <p>Cette page n'existe pas, a été déplacée, ou l'adresse comporte une erreur.</p>
    <router-link to="/" class="back-home">Retour à l'accueil <span aria-hidden="true">→</span></router-link>
  </div>
</template>

<style scoped>
.not-found-page {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
}

.kicker {
  color: var(--color-muted);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.not-found-page .display-title {
  margin: 14px 0 20px;
}

.not-found-page p {
  max-width: 420px;
  margin-bottom: 34px;
}

.back-home {
  border-bottom: 1px solid var(--color-line);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding-bottom: 4px;
  text-transform: uppercase;
}
</style>
