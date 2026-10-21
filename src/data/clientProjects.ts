import actionLogementCover from '../assets/images/gallery/UNIVERS CLIENT/FILMCORPORATE/ACTION LOGEMENT/Capture d’écran 2022-08-17 à 10.46.28.png'
import creditAgricoleCover from '../assets/images/gallery/UNIVERS CLIENT/FILMCORPORATE/COTOIT/Capture d’écran 2022-08-17 à 10.34.48.png'
import ratpCover from '../assets/images/gallery/UNIVERS CLIENT/FILMCORPORATE/RATP/LIVRETS/PASSE VALIDE/PASSE_VALIDE_OK.png'
import filmcorporateCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/FC_MOCKUP.png'
import snackinCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/snackin Logo Mockup_.png'
import vroomlyCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/V_seul_carr_-_Fond_rose_.jpg'
import wapiyeahCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/wapiyeah_Mockup_3.png'
import yamadoooCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/yamadooo MockUp 5.png'
import noirEtBegueCover from '../assets/images/gallery/UNIVERS CLIENT/N&B/Logo NB Mockup3.png'
import inriaCover from '../assets/images/gallery/UNIVERS CLIENT/REALS/CAPTURES/Capture d’écran 2022-02-15 à 16.41.11.png'
import floraCover from '../assets/images/gallery/UNIVERS CLIENT/Shootflora_selec-39.jpg'
import type { PortfolioProject } from './projectTypes.ts'
import gogorillaCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Plan de travail 23@3x.png'
import gogorillaMoodboard from '../assets/images/gallery/UNIVERS CLIENT/gogoplanche.png'
import loveFestCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Fichier 1@3x.png'
import loveFestMoodboard from '../assets/images/gallery/UNIVERS CLIENT/lovefestplanche.png'

export const clientPortfolioProjects: PortfolioProject[] = [
  {
    id: 1, slug: 'gogorilla', universe: 'client', title: 'Le Gogorilla',
    subtitle: 'Identité, communication et événementiel', client: 'Gogorilla · brasserie',
    year: 'En cours', sortYear: 2026,
    role: 'Stratégie, direction artistique, branding, graphisme, photographie et vidéo',
    deliverables: ['Rebranding', 'Réseaux sociaux et contenus', 'Carte et menus', 'Photographie et vidéo', 'Identité et communication événementielles'],
    categories: ['branding', 'da', 'photo', 'video'], palette: 'desert',
    summary: 'Faire évoluer l’image de la brasserie et faire vivre sa communauté.',
    description: `Gogorilla est un projet sur lequel j’interviens de manière globale pour faire évoluer l’image et la communication du lieu. À mon arrivée, j’ai réalisé le rebranding de l’identité visuelle, avec l’objectif de donner à la brasserie une image plus moderne, cohérente et reconnaissable.

  J’accompagne aujourd’hui le lieu sur différents supports, du social media à la création de contenus, mais aussi sur ses supports physiques avec notamment la conception et l’évolution de la carte et des menus. Photographie, graphisme, vidéo et direction artistique me permettent de créer une continuité entre l’expérience sur place et sa présence en ligne.

  J’ai également développé une stratégie événementielle, en imaginant différents rendez-vous et formats : concerts, DJ sets, blind tests, soirées et offres ponctuelles... puis leur identité et leur communication. L’idée est de faire de l’événementiel un véritable outil pour donner vie au lieu et créer une communauté autour de lui.

  Ce projet me permet ainsi de réunir plusieurs facettes de mon métier : stratégie, direction artistique, branding, graphisme, photographie, vidéo et communication, avec toujours la même envie : construire une image qui ne se contente pas de montrer Gogorilla, mais qui fait ressentir son ambiance et donne envie d’en faire partie.`,
    cover: gogorillaCover,
    images: [gogorillaMoodboard]
  },
  {
    id: 2, slug: 'love-fest', universe: 'client', title: 'Love Fest',
    subtitle: 'Identité visuelle et scénographie de mariage', client: 'Love Fest',
    year: '2026 / 2027', sortYear: 2027, role: 'Direction artistique, graphisme, illustration et scénographie',
    deliverables: ['Identité visuelle', 'Faire-part et papeterie', 'Illustrations', 'Signalétique', 'Scénographie et décoration'],
    categories: ['branding', 'da', 'illustration', 'edition'], palette: 'powder',
    summary: 'Un mariage imaginé comme un mini-festival, de l’identité au décor.',
    description: `Pour notre mariage, j’ai choisi de traiter l’événement comme un véritable projet artistique à part entière, en imaginant une identité visuelle et un univers cohérents de la première annonce jusqu’au jour J.

  J’ai conçu l’ensemble de la direction artistique: faire-part, annonces, illustrations, papeterie, impressions, signalétique et différents supports graphiques, en construisant une identité pensée pour nous mais aussi pour raconter l’esprit de la fête.

  J’ai également imaginé toute la scénographie et la décoration du lieu, que j’ai choisi de transformer en véritable mini-festival : couleurs, fleurs, matières, mobilier, installations, jeux, espaces, détails et objets ont été pensés comme les éléments d’un même décor.

  Un projet à la croisée de la direction artistique, du graphisme, de l’illustration et de la scénographie, où l’objectif était de créer non seulement une identité visuelle, mais surtout un univers dans lequel nos invités pourraient entrer et vivre l’histoire avec nous.`,
    cover: loveFestCover,
    images: [loveFestMoodboard]
  },
  {
    id: 3, slug: 'vroomly', universe: 'client', title: 'Vroomly',
    subtitle: 'Direction artistique interne', client: 'Vroomly', year: '2022 - 2025', sortYear: 2025,
    role: 'Direction artistique, vidéo, branding et marketing',
    deliverables: ['Vidéos B2B et B2C', 'Rebranding', 'Campagnes CRM et SEA', 'Supports digitaux'],
    categories: ['branding', 'da', 'video'], cover: vroomlyCover, palette: 'mist',
    summary: 'Production vidéo, identité visuelle et campagnes marketing.',
    description: 'Pendant trois ans chez Vroomly, j’ai évolué au sein de l’équipe marketing, à la croisée de la direction artistique, de la production vidéo et de la création marketing. J’ai pris en charge des contenus de la préproduction à la livraison : préparation, tournage, montage, habillage et motion design. J’ai participé au déploiement de l’identité sur les supports de communication, aux campagnes CRM et SEA et au rebranding complet. Mon rôle comprenait également la gestion de projet, l’analyse des performances et les tests A/B.',
    images: [vroomlyCover]
  },
  {
    id: 4, slug: 'filmcorporate', universe: 'client', title: 'Filmcorporate',
    subtitle: 'Agence de communication 360 et audiovisuel', client: 'Filmcorporate',
    year: '2018 - 2022', sortYear: 2022,
    role: 'Direction artistique, direction de projet et management',
    deliverables: ['Identité visuelle et site web', 'Campagnes 360', 'Production audiovisuelle', 'Stratégie social media'],
    categories: ['branding', 'da', 'video', 'illustration'], cover: filmcorporateCover, palette: 'desert',
    summary: 'Quatre ans de direction de projet et direction artistique en agence.',
    description: 'Pendant quatre ans dans cette agence de conseil, de communication 360 et de production audiovisuelle, j’ai assuré la direction de projet de la définition du besoin à la livraison : devis, rétroplanning, coordination d’équipe et de prestataires, ateliers créatifs et suivi client. En direction artistique, j’ai encadré une équipe de 3 à 5 personnes, supervisé la communication social media et participé aux créations : graphisme, storyboard, animation, montage, webdesign, tournages et shootings. J’ai également conçu la refonte de l’identité visuelle et des supports de l’agence.',
    clientAssetPath: 'FILMCORPORATE/AGENCE', images: [filmcorporateCover]
  },
  {
    id: 5, slug: 'house-of-brass', universe: 'client', title: 'House of Brass',
    subtitle: 'Photographie, vidéo et communication musicale', client: 'House of Brass',
    year: 'Année de tournée — date non précisée',
    role: 'Photographie, captation vidéo, direction artistique et création éditoriale',
    deliverables: ['Photographies de concert', 'Captation vidéo', 'Dossier de presse', 'Kit média'],
    categories: ['photo', 'video', 'da', 'edition'], palette: 'night',
    summary: 'Un an aux côtés du groupe électro brass house pour raconter sa première tournée.',
    description: 'Pendant un an, j’ai accompagné House of Brass, groupe d’électro brass house, lors de sa première tournée. J’ai photographié ses concerts, notamment son passage sur la Main Stage du Festifl’Art, en cherchant à restituer l’énergie du live, les échanges avec le public et l’univers du groupe. J’ai également participé à la captation vidéo et créé son dossier de presse et son kit média afin de présenter le projet aux journalistes, programmateurs et partenaires.',
    images: []
  },
  {
    id: 6, slug: 'ratp', universe: 'client', title: 'RATP', subtitle: 'Parcours de formation', client: 'RATP',
    year: '2021', sortYear: 2021, role: 'Direction artistique, direction de projet et motion design',
    deliverables: ['Capsules vidéo', 'Identité graphique', 'Supports pédagogiques', 'Goodies', 'Livrets et illustrations'],
    categories: ['branding', 'da', 'video', 'illustration', 'edition'], cover: ratpCover, palette: 'mist',
    summary: 'Une campagne de formation pédagogique destinée aux agents RATP.',
    description: 'J’ai accompagné la RATP dans une vaste campagne de formation pour ses agents. Nous avons conçu une charte graphique pour les vidéos et les supports imprimés, puis produit une vingtaine de capsules pédagogiques au ton ludique. La journée d’accueil comprenait vidéo, kakémonos, livrets, goodies et pochette apprenant. Les livrets de formation intégraient une cinquantaine d’illustrations. Un an plus tard, les formateurs ont été filmés dans les locaux de la RATP pour numériser le parcours.',
    clientAssetPath: 'FILMCORPORATE/RATP', images: [ratpCover],
    media: [{
      type: 'embed',
      src: 'https://player.vimeo.com/video/665654927',
      category: 'Capsule de formation',
      description: 'RATP · Vente — capsule de formation'
    }]
  },
  {
    id: 7, slug: 'noir-et-begue', universe: 'client', title: 'Noir & Bègue',
    subtitle: 'Podcast et identité visuelle', client: 'Noir & Bègue', year: '2019', sortYear: 2019,
    role: 'Direction artistique, identité visuelle, motion design et photographie',
    deliverables: ['Identité visuelle', 'Logo', 'Dossier de presse', 'Flyers', 'Vidéo', 'Goodies', 'Shooting photo'],
    categories: ['branding', 'da', 'video', 'photo', 'edition'], cover: noirEtBegueCover, palette: 'mist',
    summary: 'Création et lancement d’un podcast de sensibilisation.',
    description: 'Pendant plusieurs mois, j’ai collaboré avec Mike sur la création et le lancement de ce podcast d’information et de sensibilisation consacré au parcours d’un chef d’entreprise noir et bègue. Après des brainstormings et un travail de définition du format, j’ai conçu sa direction artistique bichrome et un logo intégrant le mot « bègue » dans un microphone. J’ai réalisé la charte, les flyers, les dossiers de presse et de présentation, une vidéo en motion design, des goodies, un micro-trottoir et un shooting photo.',
    clientAssetPath: 'N&B', images: [noirEtBegueCover]
  },
  {
    id: 8, slug: 'snackin', universe: 'client', title: 'Snack’in',
    subtitle: 'Identité et social media', client: 'Snack’in', year: '2018 - 2020', sortYear: 2020,
    role: 'Direction artistique, identité visuelle et social media',
    deliverables: ['Naming et identité visuelle', 'Charte graphique', 'Site web', 'Contenus social media', 'Campagnes vidéo'],
    categories: ['branding', 'da', 'video'], cover: snackinCover, palette: 'desert',
    summary: 'Création de l’identité d’un média de snack content.',
    description: 'Snack’in souhaitait lancer un média de snack content sur les réseaux sociaux. J’ai imaginé son identité visuelle, sa charte et son site web. Le nom et la baseline « La cerise sur vos réseaux » associent l’idée de snack content à un univers ludique. J’ai créé les contenus Instagram, LinkedIn et Facebook — posts, stories et vidéos — et accompagné la stratégie, la veille et la rédaction en lien avec les community managers.',
    clientAssetPath: 'SNACKIN', images: [snackinCover],
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLH9Ee1pbJNJmvZReHNqZnjnm_HduGTll2',
        category: 'Campagne Confinement',
        description: 'Snack’in · Campagne Confinement'
      },
      {
        type: 'embed',
        src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLH9Ee1pbJNJnX1o9evKAAHBQZIGaySBbs',
        category: 'Campagne Fausse Pub',
        description: 'Snack’in · Campagne Fausse Pub'
      },
      {
        type: 'embed',
        src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLH9Ee1pbJNJl7uPctDuGEk29AoSkUzXnb',
        category: 'Campagne 8 secondes',
        description: 'Snack’in · Campagne 8 secondes'
      }
    ]
  },
  {
    id: 9, slug: 'action-logement', universe: 'client', title: 'Action Logement',
    subtitle: 'Vidéos d’information en motion design', client: 'Action Logement', year: '2020', sortYear: 2020,
    role: 'Direction artistique, direction de projet et motion design',
    deliverables: ['Vidéos d’information', 'Motion design', 'Campagne digitale'],
    categories: ['da', 'video'], cover: actionLogementCover, palette: 'dark-flower',
    summary: 'Des vidéos d’accompagnement réalisées à distance pendant la crise sanitaire.',
    description: 'Au début de la pandémie de COVID-19, Action Logement nous a confié une vidéo présentant les aides et solutions disponibles pour les salariés et les entreprises. Les tournages étant complexes, le film a été réalisé en motion design et pensé pour être décliné. Cette collaboration a ensuite conduit à trois vidéos pour le lancement de la plateforme de logement social Al’in.',
    clientAssetPath: 'FILMCORPORATE/ACTION LOGEMENT', images: [actionLogementCover],
    media: [{
      type: 'embed',
      src: 'https://player.vimeo.com/video/473068248',
      category: 'Spot publicitaire',
      description: 'Action Logement · Des solutions adaptées à vos revenus'
    }]
  },
  {
    id: 10, slug: 'credit-agricole-cotoit', universe: 'client', title: 'Crédit Agricole',
    subtitle: 'Cotoit · contenus pédagogiques', client: 'Cotoit · Groupe Crédit Agricole', year: '2021', sortYear: 2021,
    role: 'Direction artistique, direction de projet et motion design',
    deliverables: ['MOOC', 'Tutoriels screencast', 'Vidéos d’information', 'Cover Facebook animée'],
    categories: ['branding', 'da', 'video'], cover: creditAgricoleCover, palette: 'rose',
    summary: 'Des contenus vidéo pour expliquer une plateforme de copropriété en ligne.',
    description: 'J’ai accompagné Cotoit, filiale du groupe Crédit Agricole, sur la création de contenus pédagogiques et la présentation de sa plateforme. Un creativeshop de deux jours à Orléans a permis de préciser les objectifs : visibilité, génération de leads, image de marque, expertise et animation de communauté. Nous avons ensuite réalisé des vidéos d’information, des tutoriels en screencast, des MOOC et une cover Facebook animée.',
    clientAssetPath: 'FILMCORPORATE/COTOIT', images: [creditAgricoleCover],
    media: [{
      type: 'embed',
      src: 'https://player.vimeo.com/video/311210682',
      category: 'Vidéo coulisses',
      description: 'Cotoit · Les coulisses'
    }]
  },
  {
    id: 11, slug: 'wapiyeah', universe: 'client', title: 'Wapiyeah',
    subtitle: 'Identité d’agence', client: 'Wapiyeah', year: '2019', sortYear: 2019,
    role: 'Direction artistique, identité visuelle et webdesign',
    deliverables: ['Charte graphique', 'Logo', 'Site web', 'Campagnes vidéo'],
    categories: ['branding', 'da', 'video'], cover: wapiyeahCover, palette: 'mist',
    summary: 'Un univers graphique conçu pour une agence de motion design en RDC.',
    description: 'J’ai conçu la charte graphique et le site de Wapiyeah, agence spécialisée en motion design et communication en République démocratique du Congo. Il fallait adapter les codes visuels à une audience locale. Le nom combine « wapi », qui signifie « où » en lingala, et « yeah ». L’identité associe couleurs pastel, typographie légère et formes arrondies.',
    clientAssetPath: 'WAPIYEAH', images: [wapiyeahCover]
  },
  {
    id: 15, slug: 'yamadooo', universe: 'client', title: 'Yamadooo', subtitle: 'Application mobile', client: 'Yamadooo',
    year: '2019', sortYear: 2019, role: 'Identité visuelle, UI/UX et direction de projet',
    deliverables: ['Identité visuelle', 'Logo', 'Site web', 'Application mobile', 'Social media'],
    categories: ['branding', 'da'], cover: yamadoooCover, palette: 'desert',
    summary: 'Une application pour mettre en relation des particuliers et faire transiter des colis.',
    description: 'Pour Yamadooo, j’ai conçu l’identité visuelle et le récit de l’application, le logo, le site web et l’interface mobile. J’ai suivi le développement avec le prestataire basé à l’île Maurice, réalisé les tests de l’application et contribué à la stratégie de communication de lancement.',
    clientAssetPath: 'YAMADOOO', images: [yamadoooCover]
  },
  {
    id: 16, slug: 'orano', universe: 'client', title: 'Orano', subtitle: 'Communication audiovisuelle', client: 'Orano',
    year: '2018 - 2022', sortYear: 2022, role: 'Direction artistique, vidéo et motion design',
    deliverables: ['Aftermovies', 'Interviews', 'Montages vidéo', 'Habillages motion design', 'Guides vidéo'],
    categories: ['da', 'video'], cover: inriaCover, palette: 'powder',
    summary: 'Des films et contenus vidéo pour événements et campagnes internes.',
    description: 'J’ai collaboré avec le groupe Orano sur les Orano Awards, les Challenges et les conventions. Les missions comprenaient des aftermovies, interviews, habillages en motion design, une cinquantaine de montages vidéo ainsi qu’un guide destiné aux collaborateurs qui se filmaient à distance.',
    clientAssetPath: 'FILMCORPORATE/REALS/CAPTURES', images: [inriaCover]
  },
  {
    id: 17, slug: 'flora-dahan-rabesson', universe: 'client', title: 'Flora Dahan Rabesson',
    subtitle: 'Shooting photo et identité visuelle', client: 'Flora Dahan Rabesson', year: '2024', sortYear: 2024,
    role: 'Direction artistique, photographie et identité visuelle',
    deliverables: ['Shooting photo', 'Identité visuelle', 'Images de marque'], categories: ['photo', 'da'],
    cover: floraCover, palette: 'rose', summary: 'Création d’images et identité visuelle.',
    description: 'Conception d’un univers visuel et réalisation d’un shooting photo pour construire une image de marque cohérente, sensible et identifiable.',
    images: [floraCover]
  },
]
