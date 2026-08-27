import portraitImage from '../assets/images/collage_accueil.png'
import journalImage from '../assets/images/gallery/291E3BD9-E14C-4EE0-9B2F-71262CD049D8.JPG'
import clientHeroImage from '../assets/images/gallery/d‚tails.png'
import absenceImage from '../assets/images/gallery/homme ombre.jpeg'
import projectImage from '../assets/images/gallery/mains JB1.jpeg'
import detailImage from '../assets/images/gallery/mains lumiere 6.jpeg'
import sunsetImage from '../assets/images/gallery/mer kaway jaune.jpeg'
import personalHeroImage from '../assets/images/gallery/tumblr_e811c9d528d32ab442770103666dc504_178dd21b_1280.jpg'

export type WorkUniverse = 'client' | 'personnel'
export type WorkCategory = 'branding' | 'da' | 'photo' | 'video' | 'illustration' | 'edition'

export interface PortfolioProject {
  id: number
  slug: string
  universe: WorkUniverse
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  place?: string
  deliverables: string[]
  categories: WorkCategory[]
  cover?: string
  palette?: string
  summary: string
  description: string
  images: string[]
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'hom',
    universe: 'client',
    title: 'HOM',
    subtitle: 'Identite visuelle',
    client: 'HOM',
    year: '2025',
    role: 'Strategie, design creation',
    deliverables: ['Identite visuelle', 'Packaging', 'Assets digitaux'],
    categories: ['branding', 'da'],
    palette: 'mist',
    summary: 'Branding, direction artistique, design graphique',
    description: 'Creation d une identite minimale, sensible et memorable. Le systeme pose une marque claire, des supports coherents et une direction visuelle capable de vivre sur le print comme sur le digital.',
    images: [clientHeroImage, detailImage]
  },
  {
    id: 2,
    slug: 'cocoon-eye-drama',
    universe: 'client',
    title: 'Cocoon Eye Drama',
    subtitle: 'Campagne beaute',
    client: 'Studio Beaute',
    year: '2025',
    role: 'Direction artistique, photographie',
    deliverables: ['Campagne', 'Shooting', 'Social assets'],
    categories: ['photo', 'da'],
    palette: 'rose',
    summary: 'Campagne photo et direction artistique',
    description: 'Un territoire visuel doux, frontal et textural, pense pour faire dialoguer matiere, peau et typographie dans une campagne a forte presence editoriale.',
    images: [portraitImage, projectImage]
  },
  {
    id: 3,
    slug: 'still-life',
    universe: 'client',
    title: 'Still Life',
    subtitle: 'Personnel',
    client: 'Recherche personnelle',
    year: '2024',
    role: 'Photographie, set design',
    deliverables: ['Serie photo', 'Direction lumiere'],
    categories: ['photo'],
    palette: 'dark-flower',
    summary: 'Nature morte et composition florale',
    description: 'Une serie calme et nocturne autour de la fragilite des formes. Les images jouent avec le noir, le jaune et les silences entre les objets.',
    images: [absenceImage, journalImage]
  },
  {
    id: 4,
    slug: 'amour-amour',
    universe: 'client',
    title: 'Amour Amour',
    subtitle: 'Toujours edition',
    client: 'Edition independante',
    year: '2024',
    role: 'Design editorial',
    deliverables: ['Livre', 'Maquette', 'Direction print'],
    categories: ['edition', 'illustration'],
    palette: 'powder',
    summary: 'Edition, print et objet papier',
    description: 'Un objet editorial tendre et graphique, construit autour d une grille simple, d une couleur enveloppante et d un rapport tactile au papier.',
    images: [detailImage, clientHeroImage]
  },
  {
    id: 5,
    slug: 'campaign-solar',
    universe: 'client',
    title: 'Campaign Solar',
    subtitle: 'Campagne solaire',
    client: 'Solar Studio',
    year: '2024',
    role: 'Direction artistique',
    deliverables: ['Campagne', 'Concept', 'Assets digitaux'],
    categories: ['da', 'video'],
    palette: 'desert',
    summary: 'Campagne solaire et images de marque',
    description: 'Une direction visuelle chaude, ouverte et cinetique, imaginee pour une campagne qui evoque le mouvement, la matiere et les horizons clairs.',
    images: [sunsetImage, journalImage]
  },
  {
    id: 6,
    slug: 'seachildoz',
    universe: 'personnel',
    title: 'Seachildoz',
    subtitle: 'Univers personnel',
    client: 'Recherche personnelle',
    year: '2025',
    role: 'Photographe, direction artistique',
    place: 'Paris, France',
    deliverables: ['Photographies argentiques', 'Edition digitale', 'Serie personnelle'],
    categories: ['photo'],
    palette: 'night',
    summary: 'Photographies argentiques et numeriques',
    description: 'Seachildoz rassemble des portraits, fragments de corps, gestes suspendus et paysages interieurs. Une archive sensible entre lumiere basse, peau, memoire et fiction.',
    images: [personalHeroImage, projectImage, absenceImage, sunsetImage]
  }
]

export const services = [
  {
    title: 'Direction artistique',
    text: 'Concepts creatifs, univers visuels, campagnes, scenographie'
  },
  {
    title: 'Branding & identite',
    text: 'Identite visuelle, logotype, territoire de marque'
  },
  {
    title: 'Image & photographie',
    text: 'Direction photo, shooting, retouche, editorial'
  },
  {
    title: 'Design & illustration',
    text: 'Maquette, mise en page, illustrations'
  },
  {
    title: 'Edition & print',
    text: 'Supports imprimes, books, affiches, flyers'
  },
  {
    title: 'Video & motion design',
    text: 'Direction de contenu, montage, motion design'
  }
]

export const packages = [
  {
    title: 'Social media',
    eyebrow: 'Presence digitale',
    price: 'A partir de 650 EUR',
    text: 'Pour donner une vraie coherence visuelle a Instagram, LinkedIn ou une campagne courte : direction, templates, contenus et rythme clair.',
    items: ['Mini audit image', 'Direction visuelle', '12 templates reseaux', '1 kit contenu']
  },
  {
    title: 'Identite',
    eyebrow: 'Lancement ou refonte',
    price: 'A partir de 1 200 EUR',
    text: 'Pour poser les bases d un univers de marque : logo, couleurs, typographies, references visuelles et premieres applications coherentes.',
    items: ['Logo ou refonte', 'Palette & typos', 'Mini charte', '3 supports clefs']
  },
  {
    title: 'Creation',
    eyebrow: 'Campagne creative',
    price: 'A partir de 1 800 EUR',
    text: 'Pour une sortie, un lancement, une collection ou un temps fort : concept, moodboard, direction artistique, images et declinaisons.',
    items: ['Concept & moodboard', 'Direction artistique', 'Shooting ou visuels', 'Assets print/digital']
  },
  {
    title: 'Entreprise',
    eyebrow: 'Accompagnement marque',
    price: 'A partir de 2 500 EUR',
    text: 'Pour structurer une image de marque sur plusieurs supports : campagne, documents, contenus, presentation, communication interne ou externe.',
    items: ['Audit & strategie', 'Territoire visuel', 'Supports de marque', 'Suivi creation']
  }
]

export const customOffers = [
  'Shooting portrait, produit, equipe ou editorial',
  'Evenement ponctuel, lancement, pop-up, exposition',
  'Direction artistique de campagne ou de tournage',
  'Edition, affiche, dossier presse, book ou support imprime',
  'Retouche, selection image, declinaisons social media'
]

export const journalItems = [
  {
    slug: 'a-propos-cheminement-artistique',
    title: 'A propos de moi',
    category: 'Cheminement artistique',
    image: journalImage,
    images: [journalImage, detailImage, portraitImage],
    excerpt: 'Une histoire de regard, de photographie, de dessin et de mouvement. Le debut d un chemin artistique construit autour des emotions.',
    text: [
      `J'avais une dizaine d'années, lorsque j'ai eu pour la première fois un appareil photo entre les mains et j'ai tout de suite été fascinée par l'image. Par l'émotion qu'une image pouvait produire. Par la capacité que nous avions, à pouvoir nous souvenir, d'une odeur, d'un parfum, d'un lieu, seulement grâce à un cliché. Par la capacité que nous avions à nous recréer ce film, qui accompagnait la scène, que nous avions immortalisée. En appuyant sur le déclencheur de l'appareil photo, on ne créait pas simplement une photo à accrocher sur un mur, ou à encadrer sur un bureau. En appuyant sur le déclencheur, c'est tout un univers, que l'on figeait, tout un monde que l'on mettait sur pause. C'était une fraction de seconde que l'on rendait éternelle, et qui pourtant l'instant d'après, avait disparu.`,
      `J'avais une dizaine d'années lorsque j'ai découvert le pouvoir des émotions, celles qui nous enveloppent, celles qui nous protègent, et nous font vivre. Alors, armée d'un vieil appareil photo, j'ai photographié. Durant plusieurs années, j'ai photographié chaque visage que je croisais, chaque rue que j'arpentais, chaque peau que je frôlais. J'ai photographié chaque souvenir, chaque sourire. Chaque odeur, chaque parfum, que je voulais figer hors du temps présent. J'ai photographié le beau, et le moins beau. Chaque jour. J'ai photographié sans cesse et sans relâche, la vie, le monde, les émotions, telles que je les voyais, telles que je les aimais, ou telles que j'aurais aimé qu'elles existent.`,
      `J'avais une quinzaine d'années, lorsque je me suis mise à dessiner. Dessiner, c'était découvrir le pouvoir de l'infini. De l'imagination, sans limite. Dessiner, c'était aller au-delà du réel, au-delà du temps. D'un seul coup de crayon, tout existait. Tout était possible. Les seules limites devenaient celles de notre imaginaire. Le dessin offrait la possibilité de créer des émotions qui n'existaient pas, ou qu'on ne pouvait photographier. Jonglant entre objectifs et pinceaux, j'ai appris à raconter des histoires, pourvu que cela me procure des émotions. Ou que cela vous en procure.`,
      `J'avais une vingtaine d'années lorsque j'ai voulu donner vie à mes images. Donner vie à mes photos et à mes croquis. J'ai découvert le pouvoir qu'avait une image en mouvement, un dessin animé, une musique à partager, une voix à enregistrer. J'ai découvert le pouvoir de vous faire vivre des choses, j'apprends à pouvoir m'émerveiller de la beauté du mouvement. J'ai longtemps pensé qu'il n'y avait rien de plus beau que l'éternité d'un souvenir figé à travers une photo, ou qu'une émotion ancrée sur un carnet de dessins. Mais le mouvement, ne serait-ce pas finalement ce qui nous représente tous, vivant. Et quoi de plus beau comme émotion, que celle-ci.`,
      `Le mouvement des va-et-vient, des allers-retours, l'écho des rires, le mouvement des pas de danse qui s'allument, des regards qui se transpercent, des lumières qui s'embrasent, et des mains qui s'agitent. Je vois le champ des possibilités, et je trouve cela fascinant.`,
      `J'avais une dizaine d'années, lorsque j'ai eu entre les mains un appareil photo pour la première fois. Vingt ans plus tard, je suis toujours fascinée par les images. Par la beauté, par celle que je cherche, celle que je trouve, celle que je crée. Celle qui existe toujours, si on apprend à la voir.`,
      `Je suis toujours amoureuse des sentiments que procure l'art, et c'est pour cette raison que je continuerai à faire vivre ces émotions qui brûlent en moi, et que je veux faire brûler en vous... pour toujours.`
    ]
  },
  {
    slug: 'mon-parcours',
    title: 'Mon parcours',
    category: 'Storybook',
    image: clientHeroImage,
    images: [clientHeroImage, projectImage, detailImage],
    excerpt: 'Des études en socio-psychologie à la direction artistique : un parcours fait de bifurcations, d écoute et d images.',
    text: [
      `Après les années lycée et avec un bac littéraire en poche, je décide de poursuivre mon chemin vers l'université. Passionnée d'art sous toutes ses formes, je touche à tout : musique, dessin, photographie, peinture, collage, PAO... Pourtant, je ne me sens ni assez légitime, ni assez talentueuse pour pouvoir imaginer en faire quelque chose.`,
      `Ma deuxième grande passion s'articule autour du monde, des autres. Et d'en prendre soin. Ma curiosité et ma volonté de me tourner vers une dynamique alliant ces deux univers, l'art et les autres, me dirigent vers les soins psychologiques dans une faculté de sociologie et psychologie, option art-thérapie / carcéral.`,
      `Mon expérience universitaire ainsi que les stages que j'ai pu effectuer m'ont permis de découvrir et de développer mes qualités d'écoute et d'empathie, atouts indispensables à tout domaine d'activité. Au travers des différents enseignements que j'ai pu découvrir, plusieurs domaines m'ont passionnée, me poussant à toujours aller plus loin dans mes connaissances.`,
      `Outre le fait de mieux appréhender et comprendre la nature humaine, aussi complexe soit-elle, je fus aussi et peut-être surtout motivée par un profond désir de pouvoir jouer un rôle. Celui d'aider et d'accompagner pour permettre à tous ceux qui en auraient besoin de développer au mieux leur potentialité, faire face à leurs difficultés et défis ou encore simplement leur apporter l'aide nécessaire pour qu'ils puissent se défaire de leurs entraves.`,
      `Prendre connaissance des différentes méthodes utilisées dans ce type d'étude a donné naissance à une certaine fascination pour la complexité et l'exhaustivité des caractères humains. Dès lors, cela m'a poussée à comprendre les nombreux mécanismes ayant trait aux émotions humaines, mais aussi aux comportements qui en découlent.`,
      `Durant ces années, j'ai mis à profit mon sens de l'écoute et de l'observation, mais aussi mon esprit de synthèse. J'ai su prouver que j'étais parfaitement apte à m'entretenir avec des gens et évaluer la situation en toute autonomie. Accompagner les personnes en difficulté affective, relationnelle ou sociale et apaiser leur souffrance morale.`,
      `Cette expérience m'a permis de découvrir la richesse de cette discipline universitaire en socio-psychologie, ainsi que la richesse de la nature humaine, mais surtout, elle m'a permis d'en apprendre plus sur moi. Et, en voulant sauver le monde, c'est finalement moi, que j'ai sauvé.`,
      `Je combine ces trois années de licence à des emplois étudiants. Je garde des enfants en fin de journée, et je suis bartender le soir et la nuit. Un rythme de ma vie qui me permet d'acquérir le sens de l'organisation... et quelques carences de sommeil.`,
      `Lassée de la capitale et de son effervescence, je quitte Paris. Je veux voir l'océan. Alors je prends la route à la recherche d'un nouveau nid. C'est Nantes que je rencontre, mais c'est elle qui m'adopte.`,
      `Là-bas, je décide de me focaliser sur l'art. L'Art avec un grand A. Armée des bagages de mes précédentes expériences, je vois l'art et la photo en particulier comme un vecteur d'expression thérapeutique. Une façon de partager des émotions et des sentiments. Mais aussi une façon de guérir ses plaies, et de soigner celles des autres.`,
      `Je veux pousser plus loin mon travail artistique, être capable de plus, sur le plan technique, notamment. J'ai besoin d'apprendre, moi qui ai toujours appris et pratiqué l'art seule. J'ai besoin de rencontrer des artistes, de créer avec des gens. Alors, je pousse les portes d'une école de design graphique, et j'intègre une entreprise de relation presse en alternance en tant que graphiste / maquettiste.`,
      `Ma formation et mon expérience dans ce domaine m'ont permis d'acquérir une très bonne connaissance du domaine de la mise en page et de la création graphique, ainsi que des outils de PAO. La photographie fait toujours partie intégrante de ma vie. Après l'acquisition de mon diplôme de designer graphique, mes photos rencontrent un succès que je n'attendais pas. Je les expose, et commence à les vendre.`,
      `Je jongle alors durant une année entre l'auto entrepreneuriat et un emploi de professeur artistique dans une école primaire. Je donne des cours de dessin, de photos numérique et argentique à des enfants, et j'organise notamment une exposition avec eux.`,
      `Puis, attirée par le mouvement, je reprends le chemin des études, et cette fois dans une école de cinéma. La vidéo s'accorde parfaitement avec la photo, l'animation parfaitement avec le dessin, et je trouve un chemin qui me fait du bien. Qui me permet de créer, de raconter des histoires, et de me sentir vivante.`,
      `Je travaille sur des projets personnels, pour des courts-métrages, mais également avec des réalisateurs sur différents projets. Enfin, je finis par retourner à Paris. Là-bas, ici, je deviens directrice artistique et cheffe de projet pour plusieurs agences.`,
      `Mon parcours a connu des rebondissements, et j'ai pris différents chemins pour arriver là où je suis aujourd'hui. Mes nombreuses expériences m'ont permis d'apprendre à me construire, à me connaître et à toujours aller de l'avant. Je suis fière de ce cheminement et de ces différentes aventures qui font de moi la femme que je suis aujourd'hui.`
    ]
  },
  {
    slug: 'seachildoz-pourquoi-photographier',
    title: 'Seachildoz : pourquoi photographier',
    category: 'Photographie',
    image: personalHeroImage,
    images: [personalHeroImage, absenceImage, sunsetImage],
    excerpt: 'Ecrire, parler, photographier : une tentative de dire l intime sans toujours avoir les mots.',
    text: [
      `Ouvrir la bouche pour parler ; écrire pour dire quelque chose, pour signifier que l'on existe, c'est comme ouvrir la porte aux autres et parfois, les autres ont des couteaux à la place des doigts.`,
      `J'avais envie de pouvoir écrire, mais je ne l'ai pas fait. Non pas parce que je ne dis jamais les choses importantes quand elles arrivent, mais parce que je ne savais pas si j'avais le droit de le dire. Je voulais pouvoir écrire, à la manière des écrivains ou des poètes, qui racontent une vérité, sans qu'elle ne soit ni trop dure, ni trop douce. Qu'elle soit juste ce qu'elle est, enveloppée d'un écrin rassurant.`,
      `Je ne sais pas exactement à quel moment j'ai compris, si c'était à travers un regard, un geste, un mot, ou un rire. C'était sûrement quelque chose de banal. Ce sont toujours les choses banales qui nous font nous rendre compte qu'il y a une fleur qui a éclot à l'intérieur de nous, pendant qu'une autre a fanée.`,
      `Je ne sais pas. Je ne l'ai pas dit peut-être parce que je n'arrivais pas à trouver les mots jolis, parce que je n'étais ni écrivaine, ni poète. Je ne l'ai pas dit peut-être parce que j'avais peur. Peur que cela devienne important. Écrire, c'était rendre réel, inviter les autres dans une intimité trop profonde.`,
      `Alors je ne l'ai pas dit, et j'ai photographié, pour sublimer le tragique, déguiser les cicatrices, et offrir au monde un musée de tableaux aux blessures invisibles, et aux mots silencieux.`
    ]
  },
  {
    slug: 'les-series-photographiques',
    title: 'Les series photographiques',
    category: 'Series intimes & personnelles',
    image: detailImage,
    images: [detailImage, personalHeroImage, absenceImage],
    excerpt: 'Un espace pour presenter les differentes series photographiques, leurs intentions, leurs themes et leurs liens avec l intime.',
    text: [
      `Textes a venir. Cet article presentera les differentes series photographiques intimes et personnelles : leurs points de depart, leurs images fondatrices et les emotions qui les traversent.`,
      `Chaque serie pourra etre abordee comme un territoire a part entiere : une couleur, une lumiere, une maniere de regarder les corps, les gestes, les absences, les paysages ou les souvenirs.`,
      `Cette page servira a relier les photographies entre elles, a expliquer ce qui les rassemble, ce qui les separe, et comment elles construisent progressivement l univers Seachildoz.`
    ]
  },
  {
    slug: 'dix-faits-sur-moi',
    title: 'Dix faits sur moi',
    category: 'A savoir sur moi',
    image: portraitImage,
    images: [portraitImage, journalImage, clientHeroImage],
    excerpt: 'Une page plus personnelle : petites obsessions, habitudes, references et details qui composent un imaginaire.',
    text: [
      `J'adore l'eau. L'océan, la mer, les rivières... J'aime vivre au bord de l'eau, et faire du bateau.`,
      `Mes fleurs préférées sont les tournesols, car ils sont toujours tournés vers la lumière.`,
      `Je ne peux pas travailler sans écouter ou regarder un podcast, une série, un film. Ça me permet de mieux me concentrer.`,
      `J'adore le thé. Glacé l'été et brûlant l'hiver.`,
      `J'ai beaucoup de plantes, et elles ont toutes des prénoms : Ana la Monstera, Gus le Ficus, Léa le Calathéa...`,
      `Ma mémoire me fait souvent défaut. Je prends beaucoup de photos et de vidéos juste pour pouvoir me souvenir.`,
      `J'ai recueilli au total dans ma vie six chats abandonnés. Et j'ai eu aussi des souris, un lapin, et des rats.`,
      `J'ai une passion pour les robes, et j'en ai un peu plus d'une centaine chez moi. Et non, je n'ai plus de places.`,
      `Je suis végétarienne depuis une dizaine d'années. Je le vis bien, j'adore manger et non je n'ai pas de carences.`,
      `J'aime bien faire des listes. Souvent.`,
      `Livres : Maintenance qu'il faut finir sur Tati, Le lait et miel, L'Alchimiste, Le Petit Prince, Mr Ibrahim et les fleurs du Coran.`,
      `Films : La Vie rêvée de Walter Mitty, The Truman Show, Pulp Fiction, Raiponce, La La Land.`,
      `Musiques : The Doors, Janis Joplin, Son Lux, Charles Aznavour, Pomme.`,
      `Tableaux : La Nuit étoilée, Les Amants, Le Baiser, La Persistance de la Mémoire, Nighthawks.`,
      `Photographes : Ren Hang, Charlotte Abramow, Emma Birsk, Paolo Emmanuel Baretta, Paolo Raeli.`
    ]
  },
  {
    slug: 'images-qui-restent',
    title: 'Images qui restent',
    category: 'Journal',
    image: absenceImage,
    images: [absenceImage, sunsetImage, projectImage],
    excerpt: 'Pourquoi certaines images continuent de travailler longtemps apres le premier regard.',
    text: [
      'Une image qui reste n est pas forcement spectaculaire. Parfois elle tient a une posture, une couleur, un vide, une chose presque invisible qui accroche la memoire.',
      'Je cherche souvent cet endroit entre narration et sensation. Le spectateur doit pouvoir entrer dans l image sans qu on lui explique tout.',
      'Dans les projets clients comme dans les recherches personnelles, cette question revient toujours : qu est-ce qu on garde quand on a ferme la page ?'
    ]
  }
]

export const clientHero = clientHeroImage
export const personalHero = personalHeroImage
export const homePortrait = portraitImage