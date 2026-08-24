# 🎨 BIENVENUE - SEACHILDOZ

## 👋 Commencez ici !

Votre site web créatif est **prêt à l'emploi**. Voici comment démarrer :

---

## ⚡ 1. Démarrage immédiat

```bash
cd /Users/fabienlenoble/web/seachildoz

# Option A : Script automatique
./start.sh

# Option B : Commande manuelle
npm run dev
```

Puis ouvrez : **http://localhost:5173/**

---

## 📝 2. Votre première modification

### Changer votre nom
1. Ouvrir `src/components/Navigation.vue`
2. Ligne 10 : remplacer `MANON LE BIHAN` par votre nom
3. Le site se met à jour automatiquement (hot reload)

### Ajouter une vraie image
1. Ouvrir `src/data/projects.js`
2. Ligne 8 : remplacer `https://via.placeholder.com/1200x800...`
3. Par votre URL : `https://mon-site.com/images/project-1.jpg`

### Modifier un projet client
1. Ouvrir `src/data/projects.js`
2. Modifier le projet #1 (id: 1)
3. Champs : client, title, year, role, concept, images...

---

## 📚 Documentation

| Fichier | Quand le lire |
|---------|--------------|
| **QUICK_REFERENCE.md** | Cheat sheet rapide ⭐ |
| **README.md** | Vue d'ensemble générale |
| **CUSTOMIZATION_GUIDE.md** | Guide détaillé d'édition |
| **PROJECT_SUMMARY.md** | Résumé complet du projet |
| **GITHUB_PAGES_SETUP.md** | Pour déployer |

---

## 🎯 Prochaines étapes

### Court terme (maintenant)
1. ✅ Tester le site avec `npm run dev`
2. ✅ Changer le nom (Navigation.vue)
3. ✅ Modifier 1-2 projets (projects.js)
4. ✅ Remplacer 1-2 images

### Moyen terme (cette semaine)
1. ✅ Ajouter vos 10 projets réels
2. ✅ Ajouter vos séries photo (gallery.js)
3. ✅ Mettre à jour votre bio (about.js)
4. ✅ Personnaliser le contact/email

### Long terme (avant déploiement)
1. ✅ Toutes les images remplacées
2. ✅ Tous les textes personnalisés
3. ✅ Liens sociaux configurés
4. ✅ Build de test : `npm run build`
5. ✅ Déployer sur GitHub Pages

---

## 🚀 Déploiement (quand prêt)

```bash
# 1. Build production
npm run build

# 2. Créer repo GitHub
./setup-github.sh YOUR_USERNAME

# 3. Pusher
git push -u origin main

# 4. Configurer GitHub Pages dans Settings
# → Site live en 1-2 minutes!
```

---

## 🎨 L'architecture

```
HOME (hero plein écran)
  ↓
WORK (portfolio professionnel)
  ├─ 10 projets clients
  ├─ Grille 2 colonnes
  └─ Pages détaillées avec navigation flèches
  
SEACHILDOZ (univers photographique)
  ├─ GALERIE (séries photo + lightbox)
  ├─ JOURNAL PHOTO (blog + articles)
  
À PROPOS DE MOI (archive éditoriale)
  ├─ Bio, histoire, journey
  ├─ Education, expérience
  ├─ Skills, inspirations
  ├─ Recommandations clients
  
CONTACT / DEVIS
  ├─ Services détaillés
  ├─ Formulaire de devis
  └─ Direct contact
```

---

## 🔑 Fichiers clés à modifier

```
src/data/
├── projects.js        ← 10 projets clients
├── gallery.js         ← Séries photo + journal
└── about.js           ← Bio, story, skills

src/components/
├── Navigation.vue     ← Votre nom, logo
└── Footer.vue         ← Réseaux sociaux

src/pages/
└── ContactPage.vue    ← Email de contact
```

---

## ✨ Points forts du projet

✅ **Ultra rapide** : Build 94ms (Vite)  
✅ **Léger** : 185KB gzippé  
✅ **Responsif** : Desktop & mobile  
✅ **Beautiful** : Design editorial  
✅ **Facile** : No CMS, données en .js  
✅ **Gratuit** : GitHub Pages hosting  
✅ **Auto-deploy** : GitHub Actions  

---

## 💡 Besoin d'aide ?

1. **Erreur de syntax** → Check console (F12)
2. **Image ne s'affiche pas** → Vérifier l'URL
3. **Données manquantes** → Voir CUSTOMIZATION_GUIDE.md
4. **Déploiement** → Voir GITHUB_PAGES_SETUP.md

---

## 🎯 Success Checklist

- [ ] Site s'affiche avec `npm run dev`
- [ ] Vous avez modifié le nom
- [ ] Vous avez changé une image
- [ ] Vous avez édité un projet
- [ ] Vous avez lu QUICK_REFERENCE.md
- [ ] Build production fonctionne (`npm run build`)
- [ ] Repository GitHub créé
- [ ] Site déployé sur GitHub Pages
- [ ] Tout fonctionne en production

---

## 📞 En cas de problème

1. Vérifier la console (F12)
2. Lire la documentation pertinente
3. Vérifier la syntax JSON (projects.js, gallery.js)
4. Reset avec `rm -rf node_modules && npm install`

---

## 🎨 Bon à savoir

- **Pas de base de données** : Tout est en fichiers .js
- **Pas de serveur** : Déploiement statique sur GitHub Pages
- **Pas d'animations lourdes** : Design minimaliste, transitions légères
- **Pas de composants externes** : Juste Vue 3 + Glightbox pour galerie

---

## 🚀 Ready to go!

```bash
./start.sh
# Et c'est parti! 🎉
```

**Votre site est prêt à être personnalisé.** 

Modifiez les données, mettez vos images, et en quelques heures vous aurez votre portfolio complet.

---

**Questions ? Consultez les fichiers .md dans le dossier racine.** ✨
