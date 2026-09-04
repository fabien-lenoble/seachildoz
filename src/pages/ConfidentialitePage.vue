<template>
  <div class="legal page-pad">
    <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
    <p class="updated"><strong>Dernière mise à jour : septembre 2026</strong></p>
    <p class="intro">
      La présente politique explique quelles données personnelles peuvent être collectées lorsque vous utilisez
      le site de Manon Le Bihan et comment elles sont utilisées.
    </p>
    <div class="cols">
      <div>
        <h2>1. Responsable du traitement</h2>
        <p>
          Les données collectées sur ce site sont traitées par :<br />
          Manon Le Bihan<br />
          Paris, France<br />
          Email : <a href="mailto:zoe.seachildoz@gmail.com">zoe.seachildoz@gmail.com</a>
        </p>

        <h2>2. Données collectées</h2>
        <p>Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être collectées :</p>
        <ul>
          <li>nom ;</li>
          <li>adresse email ;</li>
          <li>contenu du message ;</li>
          <li>toute information que vous choisissez de communiquer dans votre message.</li>
        </ul>
        <p>Le site ne collecte que les informations nécessaires au traitement de votre demande.</p>

        <h2>3. Pourquoi ces données sont-elles collectées ?</h2>
        <p>Les données transmises via le formulaire de contact sont utilisées uniquement pour :</p>
        <ul>
          <li>répondre à votre demande ;</li>
          <li>échanger avec vous au sujet d'un projet ;</li>
          <li>assurer le suivi de nos échanges.</li>
        </ul>
        <p>Elles ne sont pas utilisées à des fins de prospection commerciale sans votre accord.</p>

        <h2>4. Base légale</h2>
        <p>
          Le traitement des données transmises via le formulaire de contact repose sur les mesures nécessaires à
          la prise en compte de votre demande et, lorsque cela est applicable, sur les démarches précontractuelles
          à votre demande.
        </p>

        <h2>5. Destinataires des données</h2>
        <p>
          Les données transmises via le formulaire sont destinées à Manon Le Bihan. Elles peuvent également être
          accessibles aux prestataires techniques nécessaires au fonctionnement du site et du formulaire de
          contact, notamment son hébergeur ou le service utilisé pour l'envoi des messages.
        </p>
      </div>
      <div>
        <h2>6. Durée de conservation</h2>
        <p>
          Les données transmises via le formulaire de contact sont conservées pendant une durée n'excédant pas
          celle nécessaire au traitement de votre demande et au suivi de nos échanges.
        </p>
        <p>
          Lorsqu'aucune relation professionnelle n'est engagée à la suite d'un échange, les données sont
          supprimées ou archivées conformément aux obligations applicables.
        </p>

        <h2>7. Vos droits</h2>
        <p>
          Conformément à la réglementation applicable en matière de protection des données, vous disposez
          notamment d'un droit d'accès, de rectification, d'effacement, de limitation et, dans certains cas,
          d'opposition au traitement de vos données.
        </p>
        <p>
          Vous pouvez exercer vos droits en écrivant à :
          <a href="mailto:zoe.seachildoz@gmail.com">zoe.seachildoz@gmail.com</a>
        </p>
        <p>Vous pouvez également introduire une réclamation auprès de la CNIL.</p>

        <h2>8. Cookies et mesure d'audience</h2>
        <p>Le site peut utiliser des cookies ou technologies similaires nécessaires à son fonctionnement.</p>
        <p>
          Si des outils de mesure d'audience sont utilisés, les informations relatives à ces outils, à leur
          finalité et à leurs modalités de consentement sont précisées dans la présente politique.
        </p>

        <h2>9. Modification de la politique</h2>
        <p>
          Cette politique peut être mise à jour afin de tenir compte de l'évolution du site, des services
          utilisés ou de la réglementation applicable.
        </p>
        <p><strong>Dernière mise à jour : septembre 2026.</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal {
  padding-top: 12px;
  padding-bottom: 80px;
}

h1 {
  font-size: clamp(32px, 5.5vw, 72px);
  line-height: 0.9;
  margin-bottom: 24px;
}

.updated {
  margin-bottom: 8px;
}

.intro {
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 40px;
  max-width: 640px;
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

h2 {
  font-family: var(--font-body);
  font-size: 15px;
  margin: 22px 0 8px;
}

p {
  line-height: 1.7;
  font-size: 15px;
}

ul {
  margin: 0 0 14px;
  padding-left: 18px;
}

li {
  line-height: 1.7;
  font-size: 15px;
}

@media (max-width: 800px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>
