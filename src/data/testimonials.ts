export type Testimonial = {
  quote: string
  author: string
  role: string
  source?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Une superbe personne, créative, à l’écoute et attachante !',
    author: 'Jordan Auffret Van Out',
    role: 'Professeur en école d’audiovisuel'
  },
  {
    quote: 'Un travail de qualité, une vraie artiste en dehors du réel.',
    author: 'Lucille Baty',
    role: 'Thérapeute'
  },
  {
    quote: 'Une femme attachante, touchante et créative, elle reste à votre écoute et vous transporte dans son univers.',
    author: 'José Manuel Veloso',
    role: 'Motion designer'
  }
]
