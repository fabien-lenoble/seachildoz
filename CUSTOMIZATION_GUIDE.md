# 🛠️ Guide de personnalisation

## Comment remplacer les données placeholders par vos vraies données

---

## 1. Projets clients (WORK)

**Fichier** : `src/data/projects.js`

### Structure d'un projet
```javascript
{
  id: 1,                           // Numéro unique (1-10)
  client: 'Nom du client',         // String
  title: 'Titre du projet',        // String
  year: 2024,                      // Nombre
  role: 'Votre rôle',             // String
  context: 'Description contexte', // String
  concept: 'Concept créatif',      // String
  artDirection: 'Description AD',  // String
  photography: 'Type photos',      // String ou null
  video: 'Type vidéo',            // String ou null
  graphicDesign: 'Description',   // String
  process: 'Processus créatif',   // String
  images: [
    'url/image1.jpg',
    'url/image2.jpg',
    'url/image3.jpg'
  ]
}
```

### Comment ajouter/modifier
1. Ouvrir `src/data/projects.js`
2. Modifier les 10 projets existants
3. Remplacer les URLs des images
4. Garder les `id` de 1 à 10

### Exemple réel
```javascript
{
  id: 1,
  client: 'Nike',
  title: 'Campaign: Future of Sport',
  year: 2024,
  role: 'Creative Director & Photographer',
  context: 'Global marketing campaign for Nike Sport Pro',
  concept: 'Bold, dynamic, athletic universe',
  artDirection: 'High-energy imagery, modern typography',
  photography: 'Athlete and product photography',
  video: 'Campaign film 30s & 60s',
  graphicDesign: 'Social assets, print collateral, digital',
  process: 'Concept workshops, mood boards, production',
  images: [
    '/images/nike-1.jpg',
    '/images/nike-2.jpg',
    '/images/nike-3.jpg'
  ]
}
```

---

## 2. Galerie photographique (SEACHILDOZ)

**Fichier** : `src/data/gallery.js`

### Structure d'une série
```javascript
{
  id: 1,                    // Numéro unique
  title: 'Titre série',     // String
  year: 2024,              // Nombre
  description: 'Desc',     // String (courte)
  images: [
    'url/image1.jpg',
    'url/image2.jpg',
    // ... images de la série
  ]
}
```

### Comment modifier
1. Ouvrir `src/data/gallery.js` (première partie)
2. Il y a 5 séries actuellement
3. Modifier les infos et images
4. Garder la structure identique

---

## 3. Journal photographique (Blog)

**Fichier** : `src/data/gallery.js` (deuxième partie)

### Structure d'un article
```javascript
{
  id: 1,                    // Numéro unique
  title: 'Titre article',  // String
  date: '2024-08-15',      // Format YYYY-MM-DD
  excerpt: 'Accroche',     // String (courte, ~10 mots)
  fullText: `
    Paragraphe 1...

    Paragraphe 2...

    Paragraphe 3...
  `,                        // String (les \n\n séparent les paragraphes)
  images: [
    'url/image1.jpg',
    'url/image2.jpg'
  ],
  tags: ['tag1', 'tag2']   // Array de strings
}
```

### Comment ajouter un article
1. Ouvrir `src/data/gallery.js`
2. Ajouter un objet dans `journalEntries`
3. Utiliser les dates réelles
4. Séparer les paragraphes avec `\n\n`
5. Les images s'affichent entre le texte et les tags

### Exemple
```javascript
{
  id: 6,
  title: 'Sur la lumière naturelle',
  date: '2024-08-20',
  excerpt: 'La lumière naturelle est le langage universel de la photographie...',
  fullText: `La lumière naturelle est le langage universel de la photographie.

Elle ne nécessite pas d'équipement coûteux. Elle est gratuite, honnête, réelle.

Apprendre à la voir, c'est apprendre à raconter des histoires.`,
  images: ['url/light-1.jpg', 'url/light-2.jpg'],
  tags: ['light', 'nature', 'photography']
}
```

---

## 4. À propos de moi

**Fichier** : `src/data/about.js`

### Sections à modifier

#### WHO I AM
```javascript
whoIAm: `Votre bio courte (2-3 phrases)...`
```

#### MY STORY
```javascript
myStory: `Votre histoire personnelle...`
```

#### MY JOURNEY
```javascript
myJourney: `Votre parcours professionnel...`
```

#### EDUCATION
```javascript
education: [
  {
    institution: 'Nom école',
    degree: 'Diplôme',
    year: '2024'
  }
]
```

#### EXPERIENCE
```javascript
experience: [
  {
    role: 'Titre du poste',
    period: '2024-2025',
    description: 'Description du rôle'
  }
]
```

#### SKILLS
```javascript
skills: ['Skill1', 'Skill2', 'Skill3', ...]
```

#### INSPIRATIONS
```javascript
inspirations: [
  'Inspiration 1',
  'Inspiration 2',
  ...
]
```

#### CLIENT RECOMMENDATIONS
```javascript
references: [
  {
    name: 'Nom client',
    role: 'Titre',
    quote: 'Citation complète...',
    company: 'Nom entreprise'
  }
]
```

#### LINKS
```javascript
links: [
  { label: 'Instagram', url: 'https://instagram.com/...', icon: 'instagram' },
  { label: 'Email', url: 'mailto:email@domain.com', icon: 'email' },
  { label: 'LinkedIn', url: 'https://linkedin.com/...', icon: 'linkedin' }
]
```

---

## 5. Contact (Services)

**Fichier** : `src/pages/ContactPage.vue`

### Services (ligne ~10)
```javascript
const services = [
  {
    id: 1,
    title: 'SERVICE NAME',
    description: 'Description courte',
    examples: ['Exemple 1', 'Exemple 2', 'Exemple 3'],
    price: 'Starting from €5,000'  // ou 'On quote'
  }
]
```

### Email de contact
Ligne 66 du fichier :
```javascript
window.location.href = `mailto:hello@seachildoz.com?subject=...`
```
Remplacer `hello@seachildoz.com` par votre email

---

## 6. Images

### Où les mettre ?
Vous avez 3 options :

**Option A** : URL web (recommandé)
```javascript
images: [
  'https://seachildoz.com/images/project-1.jpg',
  'https://seachildoz.com/images/project-2.jpg'
]
```

**Option B** : Dossier local
```
src/assets/images/
├── projects/
├── gallery/
└── about/
```
Puis référencer :
```javascript
images: ['/images/projects/project-1.jpg']
```

**Option C** : Stockage cloud
```javascript
images: [
  'https://images.cloudinary.com/...',
  'https://cdn.example.com/...'
]
```

### Format recommandé
- **Format** : JPG (optimisé) ou WebP
- **Taille** : ~800x600 minimum pour galerie
- **Format projet** : ~1200x800 pour case studies

---

## 7. Navigation & Branding

### Logo/Branding
**Fichier** : `src/components/Navigation.vue` (ligne ~10)
```vue
<router-link to="/" class="nav-logo">
  <span class="logo-text">MANON LE BIHAN</span>  ← Changer ici
</router-link>
```

### Footer
**Fichier** : `src/components/Footer.vue` (ligne ~5)
```vue
<h3>MANON LE BIHAN</h3>  ← Changer ici
<p>Art Director · Photographer · Graphic Designer</p>  ← Changer ici
```

### Réseaux sociaux
**Fichier** : `src/components/Footer.vue` (ligne ~20)
```vue
<a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
<a href="mailto:hello@seachildoz.com">Email</a>
<a href="https://www.linkedin.com/..." target="_blank">LinkedIn</a>
```

---

## 8. Couleurs (optionnel)

**Fichier** : `src/styles/globals.css` (ligne ~11)
```css
:root {
  --color-black: #000000;        /* Noir */
  --color-off-white: #f5f5f5;    /* Off-white */
  --color-cream: #faf8f3;        /* Crème */
  --color-beige: #e8e4dd;        /* Beige */
  --color-brown: #8b7355;        /* Brown chaud */
}
```

Vous pouvez modifier les codes hex, mais la palette actuelle est harmonieuse.

---

## 9. Typographie (optionnel)

Actuellement : Anton + Poppins (déjà importées de Google Fonts)

Pour changer :
1. Ouvrir `src/styles/globals.css` (ligne 1)
2. Modifier l'import Google Fonts
3. Mettre à jour les variables CSS

---

## 10. Tester localement

Après chaque modification :
```bash
npm run dev
# Ouvrir http://localhost:5173/
# Les changements s'affichent immédiatement (hot reload)
```

---

## 11. Déployer les modifications

```bash
# 1. Build
npm run build

# 2. Commit et push
git add .
git commit -m "Update projects and gallery content"
git push origin main

# 3. GitHub Pages se met à jour automatiquement (~1-2 min)
```

---

## 💡 Tips

- ✅ **Textes** : Modifier les fichiers `.js` sans crainte
- ✅ **Images** : Les remplacer dans les données (URLs)
- ✅ **Dates** : Format strict : `YYYY-MM-DD`
- ✅ **Tags** : Minuscules, sans espaces, hyphens OK
- ⚠️ **Structure JSON** : Garder les virgules, crochets, accolades
- ⚠️ **Pas de caractères** : Éviter `"` non échappées dans textes

---

## ❓ Questions fréquentes

**Q: Comment ajouter un 11ème projet ?**
A: Modifier l'`id` à 11 mais attention à la grille (elle affichera 11 cards)

**Q: Et si j'oublie une virgule ?**
A: La page ne s'affichera pas. Check la console (F12) pour voir l'erreur

**Q: Puis-je changer la palette de couleurs ?**
A: Oui, dans `src/styles/globals.css` `:root`

**Q: Et ajouter des pages ?**
A: Créer un `.vue` dans `src/pages/`, puis route dans `src/router.js`

---

**Besoin d'aide ? Consultez le README.md et PROJECT_SUMMARY.md** 🎨
