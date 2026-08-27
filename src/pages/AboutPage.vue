<template>
  <div class="page-shell about-page">
    <section class="about-intro">
      <h1>Je cree des<br />images et des<br />univers qui<br />ont du sens</h1>
    </section>

    <section class="about-section-1">
      <div class="crop">
        <img class="about-section-1-image" :src="clientHeroImage" alt="Portrait Manon" />
      </div>
      <div class="about-section-1-text-1">
        <div>
          <p>
            Je m'appelle Manon, on m'appelle aussi Zoë. J'aurais du m'appeler Nikita, mais le prenom etait deja pris par le chat. Alors plutot que de renommer le chat, on a decide de m'appeler Manon.
          </p>
          <p>
            Je ne ressemble ni a une espionne du KGB, ni a une heroine de film et encore moins a un president russe, et finalement Manon, ca coulait de source.
          </p>
        </div>
        <router-link class="journal-photo-link" to="/journal-photo">accéder au journal</router-link>
      </div>
    </section>

    <section class="about-body">
      <h2>Insomnie à tendance artistique alors souvent, je crée des choses.</h2>
      <div class="body-grid first">
        <div>
          <p class="bold">J'AIME QUAND UNE IMAGE SEMBLE ÉVIDENTE, MAIS QU'ON NE SAIT PAS EXACTEMENT POURQUOI.</p>
          <p v-for="part in longText.split('\n')" :key="part">{{ part }}</p>
        </div>
        <img
          class="about-img-1"
          :src="clientHeroImage"
          alt="SEACHILDOZ"
        />
      </div>
      <div class="body-grid second">
        <img
            class="about-img-2"
            :src="clientHeroImage2"
            alt="SEACHILDOZ"
        />
        <p>{{ secondText }}</p>
      </div>
      <h2>Créer, c'est donner une forme à ce qui n'en n'avait pas encore</h2>
    </section>
  </div>
</template>

<script setup lang="ts">
import clientHeroImage from '../assets/images/gallery/autoportrait 9.jpeg';
import clientHeroImage2 from '../assets/images/gallery/cheveux aux vents2.jpeg';

const longText = 'J\'aime les images qui racontent quelque chose, les idées qui décalent un peu le regard et les univers qui ont leur propre personnalité. Mon parcours s\'est construis entre design, image, photographie, vidéo avec une curiosité toujours plus grande pour les nouvelles façon de raconter une histoire.\nJe travaille à la croisée de plusieurs disciplines : identité visuelle, branding, direction artistique, photographie, illustration, contenu et image. Je ne cherche pas forcément à choisir une case, mais plutôt le bon langage pour chaquie projet. Selon les besoins, je peux imaginer un concept, construire un univers, definir une direction visuelle ou passer passer derriere l\'objectif.\nCe qui m\'interesse avant tout, c\'est de creer des univers qui donnent envie de s\'arreter, de regarder, de ressentir. J\'aime mélanger les réferences, les matieres, les époques et les influences pour trouver une esthetiques singuliere, parfois pop, parfois brute, parfois plus sensible. En bref : faire des choses belles, vivantes et un peu différentes.'
const secondText = 'L\'humain est au centre de ma façon de travailler. J\'aime prendre le temps d\'écouter, de comprendre les envies, les besoins et parfois meme les doutes qui se cachent derriere des envies et des projets. Mon rôle est d\'accompagner chacun dans son developpement, en mettant mes compétences et ma sensibilité au service de leurs idées. Communication, identité, stratégie, création, j\'aime intervenir là où c\'est pertinent, créer des passerelles entre les disciplines et apporter des solutions concrètes, toujours pensées pour la personne qui se trouve derriere le projet.'

</script>

<style scoped>
.about-page {
  min-height: 1900px;
}

.about-intro {
  padding: 48px 20px 0;
}

.about-intro h1 {
  font-family: var(--font-poppins);
  font-size: clamp(38px, 4.8vw, 60px);
  font-weight: 800;
  line-height: 1.14;
  margin-bottom: 26px;
  text-transform: uppercase;
}

.about-intro img {
  aspect-ratio: 1.24 / 1;
  object-fit: cover;
  width: min(100%, 530px);
}

.about-intro aside {
  align-content: start;
  display: grid;
  font-size: 13px;
  line-height: 1.05;
  padding-top: 10px;
}

.about-intro aside p {
  max-width: 270px;
}

.about-intro a {
  border-bottom: 1px solid var(--color-line);
  justify-self: start;
  margin-top: 168px;
  padding: 0 80px 14px 0;
  text-transform: uppercase;
}

.about-section-1 {
  display: flex;
  gap: 24px;
  justify-content: start;
  margin-bottom: 52px;
  padding: 0 6px;
}

.crop {
  width: 500px;
  height: 380px;
  overflow: hidden;
}

.crop img {
  width: 500px;
  height: 500px;
  margin: -60px 0 -60px 0;
}
.about-section-1-text-1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
}

.about-section-1-text-1 div {
  font-size: 13px;
  max-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.journal-photo-link {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-line);
  padding-bottom: 4px;
  margin: 36px auto 0 0;
  letter-spacing: 0.16em;
}

.about-body {
  padding: 0 6px;
}

.about-img-1 {
  max-width: 800px;
}

.about-img-2 {
  width: 700px;
}

.path-section {
  border-bottom: 1px solid var(--color-line);
  border-top: 1px solid var(--color-line);
  margin: 10px 0 72px;
  padding: 58px 6px 62px;
}

.path-heading {
  display: grid;
  gap: 18px;
  grid-template-columns: 0.36fr 1fr 0.78fr;
  margin-bottom: 54px;
}

.path-heading > span {
  background: var(--color-black);
  height: 4px;
  margin-top: 11px;
  width: 42px;
}

.path-heading h2 {
  font-family: var(--font-poppins);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 0.98;
  text-transform: uppercase;
}

.path-heading p {
  align-self: end;
  color: var(--color-muted);
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  max-width: 300px;
}

.path-columns {
  display: grid;
  gap: clamp(48px, 10vw, 110px);
  grid-template-columns: 1fr 1fr;
}

.path-block h3 {
  font-family: var(--font-barlow);
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1;
  margin-bottom: 32px;
  text-transform: uppercase;
}

.path-item {
  border-top: 1px solid var(--color-line);
  display: grid;
  gap: 5px;
  margin-bottom: 24px;
  padding-top: 13px;
  position: relative;
}

.path-item strong {
  font-size: 13px;
  line-height: 1.05;
  text-transform: uppercase;
}

.path-item small {
  color: var(--color-muted);
  font-size: 11px;
  font-style: italic;
  line-height: 1.2;
}

.path-item ul {
  display: grid;
  gap: 2px;
  list-style: none;
  margin-top: 3px;
  max-width: 350px;
}

.path-item li {
  font-size: 11px;
  line-height: 1.22;
}

.path-item li::before {
  content: '- ';
}

.formation-item {
  grid-template-columns: 86px 1fr;
}

.year-mark {
  color: rgba(20, 20, 20, 0.12);
  font-family: var(--font-poppins);
  font-size: 58px;
  font-weight: 700;
  line-height: 0.82;
  writing-mode: vertical-rl;
}

.cv-link {
  border-top: 1px solid var(--color-line);
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-top: 34px;
  padding-top: 18px;
  text-transform: uppercase;
}

.about-body h2 {
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1;
  margin: 0 0 60px;
  text-transform: uppercase;
}

.bold {
  font-weight: 700;
  text-transform: uppercase;
}

.body-grid {
  display: flex;
  align-items: start;
  gap: 34px;
  justify-content: start;
  margin-bottom: 52px;
}

.body-grid.first div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.body-grid.second {
  display: flex;
  justify-content: end;
}

.body-grid p {
  font-size: 13px;
  max-width: 310px;
}

.body-grid.second p {
  max-width: 300px;
}

.color-block {
  justify-self: start;
  min-height: 420px;
  width: 100%;
}

.rose {
  background: #b68c84;
}

.wide {
  background: #b68c84;
  justify-self: start;
  min-height: 250px;
  width: 100%;
}

@media (max-width: 640px) {
  .about-page {
    min-height: auto;
  }

  .about-intro,
  .body-grid,
  .body-grid.second,
  .path-heading,
  .path-columns,
  .formation-item {
    grid-template-columns: 1fr;
    padding-left: 0;
    padding-right: 0;
  }

  .path-heading > span {
    margin-top: 0;
  }

  .year-mark {
    font-size: 44px;
    writing-mode: horizontal-tb;
  }

  .about-intro a {
    margin-top: 46px;
  }

  .color-block {
    min-height: 220px;
    width: 100%;
  }
}
</style>
