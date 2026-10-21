import belLogo from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/Logo_Entreprise_Bel_2019.svg.webp'
import oranoLogo from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/medium_fit_BA8Z08K_JL1ZLVC_4SPDAV2_ORANO_2021.png'
import rainforestLogo from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/rainforest.webp'
import saintJosephLogo from '../assets/images/gallery/UNIVERS CLIENT/LOGOS/saint joseph.png'

export type ClientLogo = {
  name: string
  logo: string
  slug?: string
  /** Correction optique : certains fichiers ont de grandes marges internes. */
  scale?: number
}

/**
 * 4 logos maximum pour garder la bande lisible.
 * Pour afficher RATP, Crédit Agricole ou Le Gogorilla, déposer les fichiers dans
 * src/assets/images/gallery/UNIVERS CLIENT/LOGOS/ puis les importer ici.
 */
export const clientLogos: ClientLogo[] = [
  { name: 'Orano', logo: oranoLogo, slug: 'orano', scale: 0.78 },
  { name: 'Bel', logo: belLogo, scale: 0.95 },
  { name: 'Rainforest Alliance', logo: rainforestLogo, scale: 1.5 },
  { name: 'Hôpital Saint Joseph', logo: saintJosephLogo, scale: 2.1 }
]

export const otherClients = [
  'RATP',
  'Crédit Agricole',
  'Action Logement',
  'Inria',
  'Le Gogorilla',
  'Snack’in',
  'Yamadooo',
  'Vroomly'
]
