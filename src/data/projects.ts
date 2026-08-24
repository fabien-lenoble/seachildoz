export interface ProjectImage {
  [key: number]: string
}

export interface Project {
  id: number
  client: string
  title: string
  year: number
  role: string
  context: string
  concept: string
  artDirection: string
  photography: string | null
  video: string | null
  graphicDesign: string
  process: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    client: 'Brand Luxury',
    title: 'Identity Redesign',
    year: 2024,
    role: 'Art Director & Photographer',
    context: 'Complete visual identity overhaul for a luxury fashion brand',
    concept: 'Modern minimalism with editorial sophistication',
    artDirection: 'Clean typography, strategic negative space, premium positioning',
    photography: 'Studio and lifestyle photography',
    video: 'Brand introduction video',
    graphicDesign: 'Logo, brand guidelines, packaging',
    process: 'Research, mood boards, iterations, client feedback rounds',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+1+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+1+Image+2',
      'https://via.placeholder.com/1200x800?text=Project+1+Image+3'
    ]
  },
  {
    id: 2,
    client: 'Tech Startup',
    title: 'Campaign: Future of Work',
    year: 2024,
    role: 'Creative Director',
    context: 'Digital campaign for innovative workplace solution',
    concept: 'Playful yet sophisticated, technology meets humanity',
    artDirection: 'Contemporary typography, bold compositions, authentic imagery',
    photography: 'Lifestyle and environmental portraits',
    video: 'Social media content series',
    graphicDesign: 'Campaign assets, social templates, promotional materials',
    process: 'Concept development, visual exploration, content production',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+2+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+2+Image+2'
    ]
  },
  {
    id: 3,
    client: 'Contemporary Art Gallery',
    title: 'Exhibition Branding',
    year: 2023,
    role: 'Art Director',
    context: 'Visual identity for major contemporary art exhibition',
    concept: 'Elegant, minimalist, art-focused aesthetics',
    artDirection: 'Typography as primary visual element, white space emphasis',
    photography: 'Artwork documentation and installation photography',
    video: null,
    graphicDesign: 'Poster, exhibition guide, signage',
    process: 'Concept workshops, visual iterations, design refinement',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+3+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+3+Image+2'
    ]
  },
  {
    id: 4,
    client: 'Fashion Boutique',
    title: 'E-commerce & Branding',
    year: 2023,
    role: 'Graphic Designer & Art Director',
    context: 'Website redesign and visual identity refresh',
    concept: 'Editorial fashion aesthetic, digital first approach',
    artDirection: 'Large imagery, sophisticated layout, brand consistency',
    photography: 'Product and lifestyle photography',
    video: 'Product showcase videos',
    graphicDesign: 'Website design, marketing materials, social content',
    process: 'User research, design iterations, development collaboration',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+4+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+4+Image+2',
      'https://via.placeholder.com/1200x800?text=Project+4+Image+3'
    ]
  },
  {
    id: 5,
    client: 'Publishing House',
    title: 'Book Series Design',
    year: 2023,
    role: 'Graphic Designer',
    context: 'Complete design system for book series',
    concept: 'Cohesive visual language, editorial excellence',
    artDirection: 'Typography-driven design, thematic visual elements',
    photography: 'Cover photography and interior illustrations',
    video: null,
    graphicDesign: 'Cover design, interior layout, promotional materials',
    process: 'Creative brief, multiple design iterations, printing production',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+5+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+5+Image+2'
    ]
  },
  {
    id: 6,
    client: 'Coffee Roastery',
    title: 'Brand Identity',
    year: 2023,
    role: 'Creative Director & Photographer',
    context: 'Brand identity from concept to execution',
    concept: 'Artisanal, warm, contemporary',
    artDirection: 'Warm color palette, organic compositions, lifestyle focus',
    photography: 'Product, process, and lifestyle photography',
    video: 'Production process documentary',
    graphicDesign: 'Logo, packaging, signage, social media',
    process: 'Brand strategy, visual exploration, asset creation',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+6+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+6+Image+2'
    ]
  },
  {
    id: 7,
    client: 'Design Studio',
    title: 'Portfolio Website',
    year: 2022,
    role: 'Art Director & Web Designer',
    context: 'Showcase website for creative agency',
    concept: 'Bold, playful, contemporary design studio aesthetic',
    artDirection: 'Large typography, asymmetric layouts, vibrant imagery',
    photography: 'Project documentation and behind-the-scenes',
    video: 'Animated transitions and micro-interactions',
    graphicDesign: 'Website design system, motion design',
    process: 'Wireframing, high-fidelity design, development handoff',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+7+Image+1'
    ]
  },
  {
    id: 8,
    client: 'Non-profit Organization',
    title: 'Campaign: Social Impact',
    year: 2022,
    role: 'Creative Director',
    context: 'Multi-channel awareness campaign for social cause',
    concept: 'Human-centered, emotional, authentic storytelling',
    artDirection: 'Documentary style, authentic portraits, genuine moments',
    photography: 'Documentary and portrait photography',
    video: 'Testimonial and impact videos',
    graphicDesign: 'Campaign materials, social media, print collateral',
    process: 'Strategy sessions, content production, campaign rollout',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+8+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+8+Image+2'
    ]
  },
  {
    id: 9,
    client: 'Beauty Brand',
    title: 'Product Launch Campaign',
    year: 2022,
    role: 'Art Director',
    context: 'Launch campaign for new skincare line',
    concept: 'Natural, clean, minimalist luxury',
    artDirection: 'Soft textures, neutral tones, sophisticated simplicity',
    photography: 'Product photography and sensorial imagery',
    video: 'Ingredient and process videos',
    graphicDesign: 'Campaign assets, packaging, digital marketing',
    process: 'Creative concept, photoshoot production, asset design',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+9+Image+1',
      'https://via.placeholder.com/1200x800?text=Project+9+Image+2'
    ]
  },
  {
    id: 10,
    client: 'Architecture Firm',
    title: 'Visual Communication System',
    year: 2022,
    role: 'Graphic Designer',
    context: 'Comprehensive design system for architectural practice',
    concept: 'Modern, professional, visually compelling',
    artDirection: 'Clean lines, architectural photography, structured layouts',
    photography: 'Architectural documentation',
    video: 'Project walkthroughs',
    graphicDesign: 'Brand guidelines, presentation templates, marketing',
    process: 'Brand audit, system development, application design',
    images: [
      'https://via.placeholder.com/1200x800?text=Project+10+Image+1'
    ]
  }
]
