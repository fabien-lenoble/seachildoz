# SeaChildOz - Manon Le Bihan Creative Website

Un site web hautement visuel pour Manon Le Bihan, Art Director, Photographe et Graphic Designer.

## 🎨 Caractéristiques

### Architecture
- **Vue 3** + **Vite** (SPA performante, pas de serveur requis)
- **Vue Router** pour la navigation
- **Glightbox** pour la galerie d'images
- Déploiement automatique sur **GitHub Pages**

### Sections principales

#### **HOME**
- Hero plein écran avec image de fond
- Navigation principale overlay
- Deux univers créatifs présentés

#### **WORK**
- Portfolio professionnel en grid 2 colonnes
- ~10 projets clients avec placeholders
- Pages détaillées par projet avec navigation flèches
- Métadonnées complètes (client, année, rôle, services, concept, etc.)

#### **EXPO PHOTO / SEACHILDOZ**
- **GALERIE** : Séries photographiques avec lightbox Glightbox
  - Sidebar scrollable avec liste des séries
  - Grille galerie responsive
  - Images cliquables ouvrant en plein écran

- **JOURNAL PHOTO** : Blog photographique
  - Sidebar scrollable avec articles
  - Contenu détaillé avec images intégrées
  - Système de tags

#### **À PROPOS DE MOI**
- Archive personnelle éditoriale complète
- Sections : WHO I AM, MY STORY, MY JOURNEY, EDUCATION, EXPERIENCE, SKILLS, APPROACH, INSPIRATIONS, CLIENT RECOMMENDATIONS
- Layout éditorial spacieux

#### **CONTACT / DEVIS**
- Showcase des services (Art Direction, Photography, Video, Graphic Design, Custom Project)
- Formulaire de devis complet
- Infos de contact directes
- Liens réseaux sociaux

## 📐 Design System

### Typographie
- **Anton** : Titres (majuscules, espacement générique, présence visuelle forte)
  - Main title : 64-80px desktop, 40-50px mobile
  - Section titles : 48-72px desktop, 32-44px mobile
  - Project titles : 36-56px

- **Poppins** : Corps de texte (14-18px, line-height 1.4-1.6)

### Palette de couleurs
- **Black** : #000000
- **Off-white** : #f5f5f5
- **Cream** : #faf8f3
- **Beige** : #e8e4dd
- **Warm Brown** : #8b7355

### Deux univers visuels distincts
1. **WORK** : Colorful, pop, graphic, playful, energetic
2. **SEACHILDOZ** : Dark, intimate, cinematic, quiet, poetic

## 🗂️ Structure du projet

```
src/
├── pages/
│   ├── HomePage.vue
│   ├── WorkPage.vue
│   ├── WorkDetailPage.vue
│   ├── ExpoPhotoPage.vue
│   ├── GaleriePage.vue
│   ├── JournalPhotoPage.vue
│   ├── AboutPage.vue
│   └── ContactPage.vue
├── components/
│   ├── Navigation.vue
│   └── Footer.vue
├── data/
│   ├── projects.js (10 projets placeholders)
│   ├── gallery.js (séries photos + journal entries)
│   └── about.js (contenu à propos complet)
├── styles/
│   └── globals.css
├── App.vue
├── main.js
└── router.js
```

## 🚀 Démarrage

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Accédez à `http://localhost:5173/`

### Build production
```bash
npm run build
```

### Déploiement GitHub Pages
Le site sera automatiquement deployé sur `https://yourusername.github.io/seachildoz/` lors d'un push sur `main`.

## 🎯 Points importants

- **Responsive** : Desktop et mobile (breakpoint 768px)
- **Pas de CMS** : Toutes les données sont en fichiers .js (facile à modifier)
- **Placeholders** : Images placeholder via `via.placeholder.com` (à remplacer par vos images)
- **Navigation clavier** : Flèches gauche/droite sur pages projets
- **Performance** : Optimisée pour Vite, lazy loading possible

## 📝 Prochaines étapes

1. Remplacer les images placeholders par vos vraies images
2. Mettre à jour les données dans `src/data/`
3. Configurer GitHub Pages dans les settings du repository
4. Personnaliser les URLs des réseaux sociaux et email
5. Ajouter des animations supplémentaires si souhaité

---

**Design créé pour refléter deux univers créatifs intégrés : le travail professionnel et la pratique artistique personnelle.**
# seachildoz
