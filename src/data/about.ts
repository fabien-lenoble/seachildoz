export interface EducationEntry {
  institution: string
  degree: string
  year: string
}

export interface ExperienceEntry {
  role: string
  period: string
  description: string
}

export interface Reference {
  name: string
  role: string
  quote: string
  company: string
}

export interface Link {
  label: string
  url: string
  icon: string
}

export interface AboutData {
  whoIAm: string
  myStory: string
  myJourney: string
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
  approach: string
  inspirations: string[]
  references: Reference[]
  links: Link[]
}

export const aboutData: AboutData = {
  whoIAm: `Manon Le Bihan is an Art Director, Photographer, and Graphic Designer based in France. With over 8 years of experience in the creative industry, she has worked with luxury brands, cultural institutions, and innovative startups to develop cohesive visual identities and compelling campaign concepts.

Her practice spans art direction, photography, video production, and graphic design—always with a focus on strategic thinking and authentic visual storytelling.`,

  myStory: `I grew up surrounded by art and design. My mother was a painter, my father a photographer. The creative environment of my childhood shaped my approach to visual communication.

I formally studied graphic design at École de Condé in Paris, where I discovered my passion for the intersection between photography and art direction. My early years were spent learning the technical and creative foundations of design, but what really drove me was the desire to tell stories through images.

After graduating, I worked at several design studios and learned from talented mentors. But I always felt torn between two worlds: the commercial, fast-paced world of client work, and my personal artistic practice. Eventually, I realized these two worlds didn't have to be separate.`,

  myJourney: `My journey as a creative professional began at Studio Contrast in Paris (2016-2018), where I worked as a junior designer on brand identity projects. I learned discipline, process, and the importance of strategic thinking.

In 2018, I went freelance and began taking on more substantial projects as an art director. This is when my personal photographic practice, SEACHILDOZ, began to develop in parallel. What started as a personal project became my artistic voice.

The turning point came in 2020-2021. I had spent so long compartmentalizing my work—the "professional" work and the "personal" work—that I felt fragmented. A significant personal moment led me to reconsider my priorities and integrate these two aspects of my practice.

Since then, I have built a sustainable creative practice that honors both my commercial work with clients and my personal artistic expression. I work with clients who appreciate the artistic approach, and I protect time for my personal photography practice.

The name SEACHILDOZ comes from a place of deep personal significance—a blend of nature, childhood memory, and artistic identity. It represents the intimate, personal universe I protect and cultivate.`,

  education: [
    {
      institution: 'École de Condé Paris',
      degree: 'Diploma in Graphic Design',
      year: '2014'
    },
    {
      institution: 'Summer Programs',
      degree: 'Photography at Academy of Visual Arts, Berlin',
      year: '2013'
    }
  ],

  experience: [
    {
      role: 'Freelance Art Director & Photographer',
      period: '2018–Present',
      description: 'Worked with luxury brands, cultural institutions, and tech startups on comprehensive brand identity, campaigns, and visual communication projects.'
    },
    {
      role: 'Senior Designer',
      period: '2017–2018',
      description: 'Led design projects for fashion, beauty, and lifestyle brands at Studio Contrast Paris.'
    },
    {
      role: 'Junior Designer',
      period: '2016–2017',
      description: 'Foundation in brand identity design, marketing collateral, and corporate communication systems.'
    }
  ],

  skills: [
    'Art Direction',
    'Brand Identity Design',
    'Photography & Photoshoot Direction',
    'Graphic Design',
    'Campaign Concept Development',
    'Visual Communication Systems',
    'Video Direction',
    'Typography',
    'Editorial Design',
    'Digital Design',
    'Creative Strategy',
    'Client Management'
  ],

  approach: `My approach to creative work is rooted in three principles:

**Authenticity** — I believe that the best creative work comes from genuine understanding. I invest time in understanding your brand, your audience, and your deeper purpose.

**Visual Excellence** — Every element serves a purpose. I prioritize strong visual communication through photography, typography, and composition over decoration.

**Integration** — I see my personal artistic practice and my professional work as integrated. This brings depth and artistic rigor to commercial projects, and strategic thinking to my personal work.`,

  inspirations: [
    'Diane Arbus – for her fearless approach to photography and psychological depth',
    'Erwin Olaf – for poetic visual narratives and sophisticated visual language',
    'Helmut Newton – for provocative positioning and bold art direction',
    'Cinematic photography – the work of Roger Deakins, Emmanuel Lubezki',
    'Contemporary art – artists like Cindy Sherman, Nan Goldin, Sally Mann',
    'Editorial design – publications like Wallpaper*, Kinfolk, The Gentlewoman',
    'Swiss design – the precision and elegance of modernist graphic design'
  ],

  references: [
    {
      name: 'Sophie Martin',
      role: 'Creative Director, Brand Luxury',
      quote: 'Manon brought a sophisticated artistic perspective to our brand refresh. Her ability to balance commercial strategy with authentic visual storytelling is rare.',
      company: 'Brand Luxury'
    },
    {
      name: 'Laurent Delorme',
      role: 'Founder, Tech Startup',
      quote: 'Working with Manon was transformative. She didn\'t just create assets—she helped us articulate our brand vision visually.',
      company: 'Tech Startup'
    },
    {
      name: 'Isabella Romano',
      role: 'Curator, Contemporary Art Gallery',
      quote: 'Manon\'s work for our exhibition was elegant and culturally sensitive. She understood the nuances of contemporary art immediately.',
      company: 'Contemporary Art Gallery'
    }
  ],

  links: [
    { label: 'Instagram', url: '#', icon: 'instagram' },
    { label: 'Email', url: 'mailto:hello@seachildoz.com', icon: 'email' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin' }
  ]
}
