import type { PortfolioProject } from './projectTypes.ts'
import kiwipCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Montre-connectee-Enfant-KiwipWatch-Orange.jpg'
import rainforestCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/rainforest.webp'
import belLogoCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Logo_Entreprise_Bel_2019.svg.webp'
import hopitalSaintJosephCover from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/saint joseph.png'

// Chaque lien cliquable de la sélection vidéo du book dispose de sa propre fiche.
export const clientVideoProjects: PortfolioProject[] = [
  {
    id: 26, slug: 'inria-teaser-ia', universe: 'client', title: 'Inria — Intelligence artificielle',
    subtitle: 'Teaser événementiel', client: 'Inria', year: '2021', sortYear: 2021,
    role: 'Direction artistique et motion design', deliverables: ['Teaser événementiel'], categories: ['video', 'da'],
    cover: 'https://i.vimeocdn.com/video/1296358551-53003523cdf33cff7d82a0e861bb6be379c0260f4342a9562_640?region=us',
    palette: 'dark-flower', summary: 'Teaser vidéo pour Inria Saclay autour de l’intelligence artificielle.',
    description: 'Création d’un teaser événementiel pour Inria Saclay, avec direction artistique et motion design.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/610655971', category: 'Vidéo', description: 'Inria Saclay · Intelligence artificielle' }]
  },
  {
    id: 27, slug: 'kiwip-watch-5', universe: 'client', title: 'Kiwip Watch 5',
    subtitle: 'Spot publicitaire', client: 'Kiwip', year: '2021', sortYear: 2021,
    role: 'Direction artistique et direction de projet', deliverables: ['Spot publicitaire'], categories: ['video', 'da'],
    cover: kiwipCover,
    palette: 'rose', summary: 'Spot publicitaire pour la montre Kiwip Watch 5.',
    description: 'Direction artistique et direction de projet pour ce spot publicitaire Kiwip, présenté dans la sélection « En vrac » du book.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/645914026', category: 'Vidéo', description: 'Kiwip Watch 5 · Spot publicitaire' }]
  },
  {
    id: 29, slug: 'rainforest-cafe-responsable', universe: 'client', title: 'Rainforest Alliance — Un café plus responsable',
    subtitle: 'Spot publicitaire', client: 'Rainforest Alliance', year: '2020', sortYear: 2020,
    role: 'Direction artistique et motion design', deliverables: ['Spot publicitaire'], categories: ['video', 'da'],
    cover: rainforestCover, palette: 'desert',
    summary: 'Un spot pour présenter un café plus responsable.',
    description: 'Spot publicitaire Rainforest Alliance — « Un Café Plus Responsable », référencé dans la sélection vidéo du portfolio.',
    images: [], media: [{ type: 'embed', src: 'https://www.youtube-nocookie.com/embed/C0lk-tVXRW0', category: 'Vidéo', description: 'Rainforest Alliance · Un Café Plus Responsable' }]
  },
  {
    id: 30, slug: 'hopital-saint-joseph-hepatite-c', universe: 'client', title: 'Hôpital Saint-Joseph — Hépatite C',
    subtitle: 'Spot de prévention', client: 'Hôpital Saint-Joseph', year: '2020', sortYear: 2020,
    role: 'Direction artistique et motion design', deliverables: ['Vidéo de prévention'], categories: ['video', 'da'],
    cover: hopitalSaintJosephCover,
    palette: 'rose', summary: 'Vidéo de prévention consacrée à l’hépatite C.',
    description: 'Spot de prévention pour l’Hôpital Saint-Joseph, conçu en motion design autour de l’hépatite C.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/394218241', category: 'Vidéo', description: 'Hôpital Saint-Joseph · Hépatite C' }]
  },
  {
    id: 31, slug: 'tamy-yuso-spot', universe: 'client', title: 'Tamy & Yuso',
    subtitle: 'Spot publicitaire', client: 'Tamy & Yuso', year: '2020', sortYear: 2020,
    role: 'Direction artistique et direction de projet', deliverables: ['Spot publicitaire'], categories: ['video', 'da'],
    cover: 'https://i.vimeocdn.com/video/850668992-ae01ce23c663d2882af400c86a03ee78880649438bd2c7b2b2f919242b41cc4f-d_640?region=us',
    palette: 'powder', summary: 'Un spot publicitaire réalisé pour Tamy & Yuso.',
    description: 'Direction artistique et direction de projet pour le spot publicitaire Tamy & Yuso, présenté parmi les réalisations vidéo du book.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/387640316', category: 'Vidéo', description: 'Tamy & Yuso · Spot publicitaire' }]
  },
  {
    id: 32, slug: 'mon-coach-scolaire', universe: 'client', title: 'Mon Coach Scolaire',
    subtitle: 'Tournage et montage', client: 'Mon Coach Scolaire', year: '2020', sortYear: 2020,
    role: 'Tournage et montage', deliverables: ['Vidéo de présentation'], categories: ['video'],
    cover: 'https://i.vimeocdn.com/video/850665938-06e26f56b999a8fb03931122cef56fb3b30d6389d9eafa444dd3d77f1e6dfadc-d_640?region=us',
    palette: 'mist', summary: 'Projet vidéo réalisé en tournage et montage pour Mon Coach Scolaire.',
    description: 'Tournage et montage d’un contenu vidéo pour Mon Coach Scolaire, identifié dans la sélection « En vrac » du portfolio.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/387639832', category: 'Vidéo', description: 'Mon Coach Scolaire' }]
  },
  {
    id: 37, slug: 'bel-spot-publicitaire', universe: 'client', title: 'Bel — Spot publicitaire',
    subtitle: 'Direction artistique et motion design', client: 'Bel', year: '2020', sortYear: 2020,
    role: 'Direction artistique et motion design', deliverables: ['Spot publicitaire'], categories: ['video', 'da'],
    cover: belLogoCover, palette: 'mist',
    summary: 'Le lien du spot Bel de la sélection « En vrac », isolé sur cette fiche.',
    description: 'Spot Bel présenté dans la page « En vrac » du book. Le lien vidéo fourni dans le PDF est conservé ; sa vignette permet d’identifier le projet même si le lecteur d’origine n’est plus disponible.',
    images: [], media: [{ type: 'embed', src: 'https://player.vimeo.com/video/740295416', category: 'Vidéo', description: 'Bel · Spot publicitaire' }]
  }
]
