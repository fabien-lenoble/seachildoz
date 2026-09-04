<template>
  <div class="legal page-pad">
    <h1>MENTIONS LÉGALES</h1>
    <div class="text">
      <h2>Éditeur du site</h2>
      <p>Manon Le Bihan — Directrice artistique &amp; créative multidisciplinaire, Paris, France.</p>
      <p>Statut juridique : Auto-entrepreneur.</p>
      <p>SIRET : 107 773 301 00018</p>
      <p>Contact : <a href="mailto:zoe.seachildoz@gmail.com">zoe.seachildoz@gmail.com</a></p>

      <h2>Directeur de la publication</h2>
      <p>Manon Le Bihan</p>

      <h2>Hébergement</h2>
      <p>GitHub Pages — GitHub, Inc.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site, notamment les photographies, illustrations, textes,
        éléments graphiques et projets présentés, sont protégés par les dispositions relatives à la propriété
        intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou utilisation, totale ou partielle, des contenus
        présents sur ce site est interdite sans autorisation préalable de Manon Le Bihan.
      </p>
    </div>
  </div>
</template>

<style scoped>
.legal {
  padding-top: 12px;
  padding-bottom: 80px;
}

h1 {
  font-size: clamp(40px, 7vw, 86px);
  line-height: 0.9;
  margin-bottom: 40px;
}

.text {
  max-width: 720px;
}

h2 {
  font-family: var(--font-body);
  font-size: 16px;
  margin: 28px 0 8px;
}

p {
  margin-bottom: 8px;
  line-height: 1.7;
}
</style>
