<template>
  <div class="page-shell about-page">
    <section class="about-intro">
      <div>
        <h1>Je cree des<br />images et des<br />univers qui<br />ont du sens</h1>
        <img :src="homePortrait" alt="Portrait Manon" />
      </div>
      <aside>
        <p>
          Je m'appelle Manon, on m'appelle aussi Zoe. J'aurais du m'appeler Nikita, mais le prenom etait deja pris par le chat. Alors plutot que de renommer le chat, on a decide de m'appeler Manon.
        </p>
        <p>
          Je ne ressemble ni a une espionne du KGB, ni a une heroine de film et encore moins a un president russe, et finalement Manon, ca coulait de source.
        </p>
      </aside>
    </section>

    <section class="about-body">
      <h2>Insomnie a tendance artistique alors souvent, je cree des choses.</h2>
      <div class="body-grid first">
        <p>{{ longText }}</p>
        <div class="color-block rose"></div>
      </div>
      <div class="body-grid second">
        <div class="color-block wide"></div>
        <p>{{ secondText }}</p>
      </div>
    </section>

    <section class="path-section">
      <div class="path-heading">
        <span></span>
        <h2>Chemins<br />parcourus</h2>
        <p>Une trajectoire entre ecoute, image, edition, photographie et direction artistique.</p>
      </div>

      <div class="path-columns">
        <article class="path-block">
          <h3>Experiences</h3>
          <div v-for="experience in experiences" :key="experience.title" class="path-item">
            <strong>{{ experience.title }}</strong>
            <small>{{ experience.place }}</small>
            <ul>
              <li v-for="mission in experience.missions" :key="mission">{{ mission }}</li>
            </ul>
          </div>
        </article>

        <article class="path-block formations-block">
          <h3>Formations</h3>
          <div v-for="formation in formations" :key="formation.year" class="path-item formation-item">
            <span class="year-mark">{{ formation.year }}</span>
            <div>
              <strong>{{ formation.title }}</strong>
              <small>{{ formation.place }}</small>
              <ul>
                <li v-for="skill in formation.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { homePortrait } from '../data/portfolio.ts'

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
const secondText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.'

const experiences = [
  {
    title: 'Directrice artistique - cheffe de projet',
    place: 'Filmcorporate (75) - Nov. 2018 - Sept. 2022 (4 ans)',
    missions: ['Direction artistique', 'Production video (DIR. Prod / OPV / Montage...)', 'Motion design', 'Creations & supervisions graphiques', 'Illustrations & story-boarding', 'Web-design', 'Communication / RS', 'Cheffe de projet', 'Gestion clientele & commerciale', 'Management & encadrement']
  },
  {
    title: 'Directrice artistique - cheffe de projet',
    place: 'Snack In (75) - Mars 2020 - Mai 2022 (2 ans)',
    missions: ['Direction artistique', 'Conception artistique de l agence Snackin', 'Webdesign du site web https://snackin.io', 'Creation des contenus RS', 'Gestion de la communication']
  },
  {
    title: 'Motion designeuse - webdesigneuse',
    place: 'Wayipeah (75) - Avr. 2019 - Jan. 2022 (3 ans)',
    missions: ['Direction artistique', 'Creation artistique de l agence', 'Creations & supervisions graphiques (graphisme, maquettes, motion design)', 'Illustrations & story-boarding', 'Cheffe de projet']
  },
  {
    title: 'Directrice artistique - webdesigneuse',
    place: 'Yamadoo (75) - Fev. 2019 - Decembre 2020 (2 ans)',
    missions: ['Direction artistique de l agence', 'Creation artistique de l agence', 'Web designeuse (application mobile et site web)', 'Direction communication reseaux sociaux', 'Cheffe de projet']
  },
  {
    title: 'Photographe / videaste',
    place: 'Seachildoz (44) - Sept. 2016 - Sept. 2020 (4 ans)',
    missions: ['Expositions & ventes de photos (projets personnels)', 'Shooting pour particuliers ou professionnels (event, concert, entreprises, particuliers...)', 'Realisations de courts-metrages (projets personnels)', 'Realisations de videos pour particuliers et entreprises']
  },
  {
    title: 'Photographe / videaste',
    place: 'ICAM (44) - Juill. - Aout 2018 (1 mois)',
    missions: ['Tournages et shooting photo']
  },
  {
    title: 'Cadreuse / chef op',
    place: 'Sunny Prod - MUM Studio (44) - Avr. - Juil. 2018 (3 mois)',
    missions: ['Court metrage Sunny', 'Projection festival', 'Prix de l image au festival du court metrage des jeunes a Gonesse en septembre 2018']
  },
  {
    title: 'Monteuse video',
    place: 'Micellium Production (44) - Fev. - Avr. 2018 (3 mois)',
    missions: ['Montage videos et habillages graphiques']
  },
  {
    title: 'Professeur artistique',
    place: 'Nantes Metropoles (44) - Sept. 2016 - Aout 2017 (1 an)',
    missions: ['Cours de dessin (8-12 ans)', 'Initiation a la photographie numerique et argentique pour les jeunes (7-11 ans)', 'Organisation d une exposition photo (7-11 ans)']
  },
  {
    title: 'Graphiste / maquettiste',
    place: 'Oxygen RP (44) - Sept. 2015 - Sept. 2016 (1 an)',
    missions: ['Graphiste et maquettiste']
  }
]

const formations = [
  {
    year: '2018',
    title: 'Certificat en production & post-production audiovisuelle',
    place: 'Ecole MJM Graphic Design, Nantes',
    skills: ['Theories et techniques de prise de vues & de captation sonore', 'Experience des relations et collaborations creatives avec les techniciens', 'Processus et techniques de fabrication d un film', 'Guider les acteurs', 'Experiences sensibles et artistiques du montage', 'Processus et techniques du montage et de la chaine de post-production', 'Realisation de story-board']
  },
  {
    year: '2017',
    title: 'Formation de specialisation en photographie',
    place: 'Formation en ligne, MS Univ',
    skills: ['Outils et camera', 'Point de vue', 'Film & images au 20e siecle', 'Technique de la photographie', 'Principe de la photo composition et la post-production digitale', 'Lightroom', 'Photoshop', 'Eclairages & lumieres']
  },
  {
    year: '2016',
    title: 'Diplome certifie de concepteur en design graphique',
    place: 'Ecole MJM Graphic Design, Nantes',
    skills: ['Graphisme', 'Illustration', 'Creations / compositions graphiques', 'Retouches photographiques', 'Techniques de dessin', 'InDesign', 'Illustrator', 'Photoshop', 'Dessin', 'Photographie', 'Art digital', 'Web design']
  },
  {
    year: '2015',
    title: 'Licence de psychologie & de sociologie',
    place: 'Options : art therapie & psychologie carcerale - Universite Paris 8 (75)',
    skills: ['Art therapie', 'Psychologie sociale', 'Accompagnement & sensibilisation', 'Observation, identification & diagnostique', 'Ecoute, comprehension & dialogue', 'Collaboration, developpement', 'Redaction d articles', 'Histoire et etude de l art (vecteur de guerison)']
  },
  {
    year: '2012',
    title: 'Baccalaureat litteraire',
    place: 'Options : musique & histoire de l art - Lycee Gerard de Nerval (77)',
    skills: []
  }
]
</script>

<style scoped>
.about-page {
  min-height: 1900px;
}

.about-intro {
  display: grid;
  gap: clamp(42px, 8vw, 92px);
  grid-template-columns: 1.2fr 0.72fr;
  padding: 48px 20px 54px;
}

.about-intro h1 {
  font-family: var(--font-poppins);
  font-size: clamp(38px, 4.8vw, 60px);
  font-weight: 700;
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

.about-body {
  padding: 0 6px;
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
  font-family: var(--font-anton);
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

.body-grid {
  align-items: start;
  display: grid;
  gap: 34px;
  grid-template-columns: minmax(260px, 320px) minmax(190px, 300px);
  justify-content: start;
  margin-bottom: 52px;
}

.body-grid.second {
  grid-template-columns: minmax(240px, 310px) minmax(260px, 320px);
  justify-content: end;
}

.body-grid p {
  font-size: 13px;
  line-height: 1.1;
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
