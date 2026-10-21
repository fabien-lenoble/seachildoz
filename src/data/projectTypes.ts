export type WorkUniverse = 'client' | 'personnel'
export type WorkCategory = 'branding' | 'da' | 'photo' | 'video' | 'illustration' | 'edition'

export interface ProjectMedia {
  type: 'image' | 'video' | 'embed'
  src: string
  description: string
  category?: string
}

export interface PortfolioProject {
  id: number
  slug: string
  universe: WorkUniverse
  title: string
  subtitle: string
  client: string
  year: string
  sortYear?: number
  role: string
  place?: string
  deliverables: string[]
  categories: WorkCategory[]
  cover?: string
  featureImage?: string
  palette?: string
  summary: string
  description: string
  images: string[]
  imageCaptions?: string[]
  clientAssetPath?: string
  clientDescription?: string
  media?: ProjectMedia[]
}

const clientProjectOrder = [
  'gogorilla',
  'vroomly',
  'love-fest',
  'flora-dahan-rabesson',
  'filmcorporate',
  'orano',
  'ratp',
  'credit-agricole-cotoit',
  'inria-teaser-ia',
  'snackin',
  'kiwip-watch-5',
  'action-logement',
  'rainforest-cafe-responsable',
  'hopital-saint-joseph-hepatite-c',
  'tamy-yuso-spot',
  'mon-coach-scolaire',
  'bel-spot-publicitaire',
  'noir-et-begue',
  'wapiyeah',
  'yamadooo'
]

export const sortClientProjects = (projects: PortfolioProject[]): PortfolioProject[] =>
  projects
    .filter(project => clientProjectOrder.includes(project.slug))
    .sort((first, second) => clientProjectOrder.indexOf(first.slug) - clientProjectOrder.indexOf(second.slug))
