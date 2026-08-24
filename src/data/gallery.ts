import selfPortrait2 from '../assets/images/gallery/mains JB1.jpeg'
import selfPortrait3 from '../assets/images/gallery/mains corps.jpeg'
import selfPortrait4 from '../assets/images/gallery/mains exp.jpeg'
import selfPortrait5 from '../assets/images/gallery/pieds.jpeg'
import selfPortrait1 from '../assets/images/gallery/visage ficelle 2.jpeg'

import absence1 from '../assets/images/gallery/couple fantome 4.jpeg'
import absence3 from '../assets/images/gallery/dos lit.jpeg'
import absence2 from '../assets/images/gallery/homme ombre.jpeg'
import absence4 from '../assets/images/gallery/livre.jpeg'

import surreal5 from '../assets/images/gallery/ballons rouges 3.jpeg'
import surreal4 from '../assets/images/gallery/ballons rouges.jpeg'
import surreal3 from '../assets/images/gallery/ciel5.jpeg'
import surreal1 from '../assets/images/gallery/mer kaway jaune.jpeg'
import surreal2 from '../assets/images/gallery/pierre ballon.jpeg'

import bodies3 from '../assets/images/gallery/detail22.jpeg'
import bodies2 from '../assets/images/gallery/fleur qui tombe.jpeg'
import bodies1 from '../assets/images/gallery/melon2.jpeg'

import cinematic2 from '../assets/images/gallery/details 18.jpeg'
import cinematic3 from '../assets/images/gallery/details.jpeg'
import cinematic1 from '../assets/images/gallery/storytelleing7.jpeg'

export interface GallerySeries {
  id: number
  title: string
  year: number
  description: string
  images: string[]
}

export interface JournalEntry {
  id: number
  title: string
  date: string
  excerpt: string
  fullText: string
  images: string[]
  tags: string[]
}

export const gallerySeries: GallerySeries[] = [
  {
    id: 1,
    title: 'Self-Portrait Series',
    year: 2024,
    description: 'An intimate exploration of identity and presence through self-portraiture.',
    images: [
      selfPortrait1,
      selfPortrait2,
      selfPortrait3,
      selfPortrait4,
      selfPortrait5
    ]
  },
  {
    id: 2,
    title: 'Absence & Memory',
    year: 2023,
    description: 'Exploring themes of absence, loss and memory through atmospheric photography.',
    images: [
      absence1,
      absence2,
      absence3,
      absence4
    ]
  },
  {
    id: 3,
    title: 'Surreal Landscapes',
    year: 2023,
    description: 'Dreamlike environments that challenge perception and reality.',
    images: [
      surreal1,
      surreal2,
      surreal3,
      surreal4,
      surreal5
    ]
  },
  {
    id: 4,
    title: 'Bodies & Forms',
    year: 2022,
    description: 'Study of the human form, vulnerability, and physical presence.',
    images: [
      bodies1,
      bodies2,
      bodies3
    ]
  },
  {
    id: 5,
    title: 'Cinematic Moments',
    year: 2022,
    description: 'Moments captured with a cinematic sensibility and narrative quality.',
    images: [
      cinematic1,
      cinematic2,
      cinematic3
    ]
  }
]

export const journalEntries: JournalEntry[] = [
  {
    id: 1,
    title: 'On Self-Portraiture and Identity',
    date: '2024-08-15',
    excerpt: 'The act of photographing oneself is an act of conversation with the unknown...',
    fullText: `The act of photographing oneself is an act of conversation with the unknown. When I stand before the camera, I am both the observer and the observed, creating a dialogue between who I am and who I wish to become.

Self-portraiture has been my constant companion throughout this artistic journey. It is a form of meditation, a way to explore the layers of identity that exist beyond the surface. Each image is a moment of vulnerability, a confession without words.

The camera becomes a mirror, but not a passive one. It transforms and distorts reality, offering new perspectives on what we think we know about ourselves. In these images, I search for truth, yet find only more questions.`,
    images: [
      'https://via.placeholder.com/600x800?text=Journal+1+Image+1',
      'https://via.placeholder.com/600x800?text=Journal+1+Image+2'
    ],
    tags: ['identity', 'self-portrait', 'photography']
  },
  {
    id: 2,
    title: 'Absence: A Language Without Words',
    date: '2024-07-20',
    excerpt: 'What is not shown is as important as what is. Absence speaks volumes...',
    fullText: `What is not shown is as important as what is. Absence speaks volumes. In photography, silence is a tool—a deliberate choice to leave space for the viewer's imagination.

The absence of a person, the emptiness of a room, the void left behind by a departed moment—these are the subjects that fascinate me most. They carry emotional weight without needing to announce themselves.

I am drawn to negative space, to the quiet moments between action. Photography has taught me that sometimes what we do not see is more powerful than what we do. The unseen becomes a presence in itself, occupying the frame with invisible weight.`,
    images: [
      'https://via.placeholder.com/600x800?text=Journal+2+Image+1'
    ],
    tags: ['absence', 'negative-space', 'minimalism']
  },
  {
    id: 3,
    title: 'Surrealism and Dream Logic',
    date: '2024-06-10',
    excerpt: 'Dreams follow their own rules. In surreal photography, we access a different truth...',
    fullText: `Dreams follow their own rules. In surreal photography, we access a different truth—one that transcends the literal and enters the psychological.

My exploration of surrealism is not about creating fantasy. It is about revealing the dreamlike quality that already exists within reality. By manipulating light, composition, and perspective, I transform ordinary scenes into something unfamiliar, something that awakens the viewer's unconscious.

Surrealism is a language for feelings that cannot be expressed in words. It is a rebellion against the rational, an embrace of the intuitive and the unknown. Every surreal image is a riddle without an answer, an invitation to feel rather than to understand.`,
    images: [
      'https://via.placeholder.com/600x800?text=Journal+3+Image+1',
      'https://via.placeholder.com/600x800?text=Journal+3+Image+2'
    ],
    tags: ['surrealism', 'dreams', 'subconscious']
  },
  {
    id: 4,
    title: 'The Body as Landscape',
    date: '2024-05-05',
    excerpt: 'The human body is a landscape of stories, scars, and secrets...',
    fullText: `The human body is a landscape of stories, scars, and secrets. It is terrain worth exploring with tenderness and depth.

In my work with bodies, I am interested in vulnerability. The body, in its rawness and imperfection, holds truth. Stretch marks, scars, aging—these are not flaws. They are evidence of a life lived, of time passing, of resilience.

Photography of the body is an act of witness. It is a way of saying: "I see you. Your body is beautiful not despite its imperfections, but because of them. You are valid. You exist." Through this work, I hope to create a space where people can see themselves as I see them—with compassion and reverence.`,
    images: [
      'https://via.placeholder.com/600x800?text=Journal+4+Image+1'
    ],
    tags: ['body', 'vulnerability', 'beauty']
  },
  {
    id: 5,
    title: 'Cinematic Photography: Creating Narrative',
    date: '2024-04-12',
    excerpt: 'Every photograph tells a story. The question is: what story do we choose to tell?...',
    fullText: `Every photograph tells a story. The question is: what story do we choose to tell?

Cinematic photography borrows the language of film—composition, lighting, mood—to create images that feel like scenes from an unfinished narrative. There is tension, mystery, emotion.

I am influenced by cinema, literature, and painting. I study how light falls across a face, how negative space suggests meaning, how color creates atmosphere. Every element serves the story. Nothing is accidental.

The goal is not to document reality, but to reveal the emotional truth beneath the surface. To create images that make the viewer feel something, even if they cannot articulate what that something is.`,
    images: [
      'https://via.placeholder.com/600x800?text=Journal+5+Image+1',
      'https://via.placeholder.com/600x800?text=Journal+5+Image+2'
    ],
    tags: ['cinema', 'narrative', 'storytelling']
  }
]
