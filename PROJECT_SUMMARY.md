# 🎨 SEACHILDOZ - Site Web Créatif

## ✅ Projet créé et prêt à l'emploi

Votre site web ultra-visuel pour Manon Le Bihan est **100% fonctionnel** et deployable immédiatement sur GitHub Pages.

---

## 📋 Contenu créé

### Pages principales
✅ **HOME** - Hero plein écran avec navigation principale
✅ **WORK** - Portfolio professionnel (10 projets avec fiches détaillées)
✅ **EXPO PHOTO** - Galerie et journal photographique (SEACHILDOZ)
✅ **À PROPOS** - Archive éditoriale personnelle
✅ **CONTACT / DEVIS** - Services, formulaire de devis, contact direct

### Composants réutilisables
✅ Navigation responsive (desktop & mobile)
✅ Footer élégant
✅ Système de routing complet

### Design system
✅ **Typographie** : Anton (titres) + Poppins (texte)
✅ **Palette** : Noir, Off-white, Crème, Beige, Brown chaud
✅ **Responsive** : Desktop & mobile (breakpoint 768px)
✅ **Deux univers visuels** : WORK (playful) vs SEACHILDOZ (cinematic)

### Fonctionnalités
✅ Glightbox pour galerie photo avec lightbox
✅ Navigation flèches entre projets
✅ Formulaire de devis interactif
✅ Blog photographique avec articles détaillés
✅ Métadonnées complètes sur projets

---

## 📁 Structure du projet

```
seachildoz/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-déploiement GitHub Pages
├── src/
│   ├── pages/                  ← 8 pages principales
│   ├── components/             ← Navigation + Footer
│   ├── data/                   ← Données (projects, gallery, about)
│   ├── styles/
│   │   └── globals.css         ← Design system complet
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── dist/                       ← Build production (après npm run build)
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Comment démarrer

### 1. Installation (déjà fait ✅)
```bash
npm install
```

### 2. Développement local
```bash
npm run dev
# Ouvrir → http://localhost:5173/
```

### 3. Build production
```bash
npm run build
# Crée le dossier /dist avec site compilé
```

### 4. Déploiement GitHub Pages
```bash
# Initialiser le repo local
cd /Users/fabienlenoble/web/seachildoz
git init
git add .
git commit -m "Initial commit: Seachildoz website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/seachildoz.git
git push -u origin main
```

**Ensuite** : GitHub Pages se configure automatiquement
**Résultat** : Site live à `https://YOUR_USERNAME.github.io/seachildoz/`

---

## 🎯 Prochaines étapes (pour vous)

### Immédiat
1. Remplacer les images placeholders dans `src/data/` par vos vraies images
2. Mettre à jour les données clients/projets dans `src/data/projects.js`
3. Ajouter vos séries photos dans `src/data/gallery.js`
4. Personnaliser les textes dans `src/data/about.js`

### Contact & réseaux
1. Remplacer `hello@seachildoz.com` par votre vrai email
2. Mettre à jour les URLs Instagram/LinkedIn/etc.

### Déploiement final
1. Créer le repository GitHub `seachildoz`
2. Pusher le code (voir section 4 ci-dessus)
3. Configurer GitHub Pages dans Settings du repo
4. Voilà ! Site live 🚀

---

## 💡 Notes importantes

### Images
- Actuellement : placeholders via `via.placeholder.com`
- À faire : remplacer par vos images réelles
- Format recommandé : JPEG optimisé ou WebP

### Données
- Pas de base de données
- Tout est en fichiers `.js` (facile à éditer)
- Pas besoin de backend
- Idéal pour GitHub Pages (hosting statique gratuit)

### Performance
- Build léger : ~185KB JS gzippé
- Vite optimise les dépendances
- Lazy loading possible si besoin

### Responsive
- ✅ Desktop (>768px)
- ✅ Mobile (<768px)
- Navigation mobile avec menu hamburger
- Layouts adaptatifs

---

## 📞 Support personnalisation

Voici les fichiers clés à personnaliser :

| Fichier | À faire |
|---------|---------|
| `src/data/projects.js` | Ajouter vos 10 projets clients |
| `src/data/gallery.js` | Ajouter séries photos + journal entries |
| `src/data/about.js` | Votre bio, histoire, skills, etc. |
| `src/pages/HomePage.vue` | Changer image hero (ligne 8) |
| `src/components/Footer.vue` | Mettre à jour liens sociaux |
| `src/pages/ContactPage.vue` | Vérifier adresse email (ligne 66+) |

---

## 🎨 Design decisions

### Pourquoi Vue 3 + Vite ?
- ⚡ Ultra rapide (build ~94ms)
- 📦 Léger (185KB gzippé)
- 🔄 Hot reload pour développement
- 📱 Parfait pour GitHub Pages

### Pourquoi pas de CMS ?
- Pour vitrine simple = overkill
- Données faciles à modifier en `.js`
- Pas de serveur nécessaire
- Déploiement statique gratuit

### Design philosophy
- **Minimaliste** : Négatif space > décoration
- **Editorial** : Typographie forte, imagery large
- **Deux univers** : WORK vs SEACHILDOZ clairement distincts
- **Authentique** : Pas de templates génériques

---

## ✨ Bon à savoir

1. **Keyboard navigation** : Flèches gauche/droite sur pages projets
2. **Mobile menu** : Menu hamburger responsive
3. **Smooth transitions** : 0.3s - 0.4s sur hover/interactions
4. **Scrollbar custom** : Matching design system
5. **No external dependencies** : Minimal footprint

---

## 📊 Fichiers de configuration

- **vite.config.js** : Config Vite (base path pour GitHub Pages)
- **.github/workflows/deploy.yml** : Auto-déploiement
- **.nojekyll** : Désactive Jekyll sur GitHub Pages
- **index.html** : Meta tags, fonts (Anton + Poppins)

---

## 🎯 Vue d'ensemble

```
ACCUEIL
  ↓
HERO PLEIN ÉCRAN + NAV PRINCIPALE
  ↓
╔════════════════════════════════════╗
║  WORK                  SEACHILDOZ  ║
║  (Professionnel)      (Personnel)  ║
║                                    ║
║  Portfolio clients    Galerie      ║
║  10 projets           Journal      ║
║  Cases studies        Blog photo   ║
║  Flèches nav          Lightbox     ║
╚════════════════════════════════════╝
  ↓
À PROPOS (Archive éditoriale)
  ↓
CONTACT (Services + Devis)
```

---

**✅ Le projet est prêt. À vous de jouez ! 🎨**
