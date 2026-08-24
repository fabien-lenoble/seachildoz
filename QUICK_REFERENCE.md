# 📚 QUICK REFERENCE - SeaChildOz

## 🚀 Commandes essentielles

```bash
# Démarrer le développement
npm run dev

# Build production
npm run build

# Déployer sur GitHub
git push origin main
```

---

## 📝 Fichiers à éditer

### 1. Données des projets
**Fichier** : `src/data/projects.js`
- ~10 projets clients
- Champ : id, client, title, year, role, context, concept, artDirection, photography, video, graphicDesign, process, images

### 2. Galerie & Journal
**Fichier** : `src/data/gallery.js`
- `gallerySeries` : 5 séries photo
- `journalEntries` : 5 articles blog

### 3. À propos
**Fichier** : `src/data/about.js`
- Sections : WHO I AM, MY STORY, MY JOURNEY
- Arrays : education, experience, skills, inspirations, references, links

### 4. Contact (email)
**Fichier** : `src/pages/ContactPage.vue` ligne 66
```javascript
window.location.href = `mailto:YOUR_EMAIL@domain.com?subject=...`
```

### 5. Navigation (logo, branding)
**Fichier** : `src/components/Navigation.vue` ligne 10
```vue
<span class="logo-text">YOUR NAME HERE</span>
```

### 6. Footer (réseaux sociaux)
**Fichier** : `src/components/Footer.vue`
```vue
<a href="https://instagram.com/YOUR_PROFILE">Instagram</a>
```

---

## 🎨 Personnalisation avancée

### Changer la palette de couleurs
**Fichier** : `src/styles/globals.css` ligne 11
```css
--color-black: #000000;
--color-off-white: #f5f5f5;
--color-cream: #faf8f3;
--color-beige: #e8e4dd;
--color-brown: #8b7355;
```

### Images placeholder
Remplacer les URLs `https://via.placeholder.com/...` par vos images réelles

---

## 📊 Structure des données

### Projet
```javascript
{
  id: 1,
  client: 'Client Name',
  title: 'Project Title',
  year: 2024,
  role: 'Your Role',
  context: 'Context...',
  concept: 'Concept...',
  artDirection: 'AD description...',
  photography: 'Photo type...',
  video: 'Video description...',
  graphicDesign: 'Design description...',
  process: 'Process...',
  images: ['url1', 'url2', 'url3']
}
```

### Série photo
```javascript
{
  id: 1,
  title: 'Series Title',
  year: 2024,
  description: 'Short description',
  images: ['url1', 'url2', 'url3', 'url4', 'url5']
}
```

### Article journal
```javascript
{
  id: 1,
  title: 'Article Title',
  date: '2024-08-15',
  excerpt: 'Short excerpt...',
  fullText: `Text with \n\n paragraph breaks...`,
  images: ['url1', 'url2'],
  tags: ['tag1', 'tag2']
}
```

---

## 📂 Architecture des routes

```
/                    → HomePage
/work                → WorkPage (grid de projets)
/work/1              → WorkDetailPage (project #1)
/work/2              → WorkDetailPage (project #2)
...
/expo-photo          → ExpoPhotoPage (galerie ou journal)
/galerie             → GaleriePage
/journal-photo       → JournalPhotoPage
/about               → AboutPage
/contact             → ContactPage
```

---

## 🎯 Pages et leurs composants

| Page | Route | Fichier | Description |
|------|-------|---------|-------------|
| HOME | / | HomePage.vue | Hero plein écran + nav principale |
| WORK | /work | WorkPage.vue | Grid 2 colonnes de projets |
| WORK DETAIL | /work/:id | WorkDetailPage.vue | Case study détaillée |
| EXPO | /expo-photo | ExpoPhotoPage.vue | Conteneur (tabs: galerie/journal) |
| GALERIE | /galerie | GaleriePage.vue | Galerie photo avec sidebar |
| JOURNAL | /journal-photo | JournalPhotoPage.vue | Blog photo |
| À PROPOS | /about | AboutPage.vue | Archive éditoriale |
| CONTACT | /contact | ContactPage.vue | Services + formulaire |

---

## 🔧 Fichiers de config

| Fichier | Rôle |
|---------|------|
| `vite.config.js` | Vite configuration (base path pour GitHub Pages) |
| `package.json` | Dependencies & scripts |
| `index.html` | HTML template (meta tags, fonts) |
| `.github/workflows/deploy.yml` | Auto-deployment workflow |
| `.nojekyll` | GitHub Pages configuration |

---

## 📱 Responsive

**Desktop** : ≥768px
**Mobile** : <768px
**Navigation mobile** : Hamburger menu auto

---

## 🎯 Déploiement en 3 étapes

### 1. Créer repo GitHub
- Aller à https://github.com/new
- Nom : `seachildoz`
- Public
- NO README/gitignore/license (on a déjà)

### 2. Initialiser et pusher
```bash
./setup-github.sh YOUR_USERNAME
# ou manuel:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/seachildoz.git
git push -u origin main
```

### 3. Configurer GitHub Pages
- Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages / root
- ✅ Done!

Site live : `https://YOUR_USERNAME.github.io/seachildoz/`

---

## 🔗 Ressources

- Vue 3 Docs : https://vuejs.org
- Vite Docs : https://vitejs.dev
- Vue Router : https://router.vuejs.org
- Glightbox : https://biati-digital.github.io/glightbox/

---

## 💡 Tips

- ✅ Les changements en `npm run dev` se voient immédiatement (hot reload)
- ✅ Les images peuvent être des URLs externes ou locales
- ✅ La date du journal doit être `YYYY-MM-DD`
- ✅ Les tags sont automatiquement minuscules
- ⚠️ Pas de caractères spéciaux non-échappés dans textes
- ⚠️ Garder la structure JSON (crochets, accolades, virgules)

---

## 🎨 Inspiration design

- Typo forte : Anton pour titres, Poppins pour corps
- Espace négatif : moins c'est plus
- Images grandes : elles sont vos meilleurs assets
- Deux univers : distincts mais liés par typo/grille/nav

---

## 📞 Support

Consultez :
1. `README.md` - Overview
2. `PROJECT_SUMMARY.md` - Ce qui a été fait
3. `CUSTOMIZATION_GUIDE.md` - Guide détaillé d'édition
4. `GITHUB_PAGES_SETUP.md` - Déploiement
5. Ce fichier - Quick reference

---

**Prêt à démarrer ? 🚀**

```bash
./start.sh
# ou
npm run dev
```

Accédez à http://localhost:5173/ et explorez !
