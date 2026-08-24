# Configuration pour déploiement GitHub Pages

## Première configuration

1. **Créer un repository GitHub** nommé `seachildoz` (ou le nom que vous préférez)

2. **Cloner/Initialiser le repo local**
```bash
cd /Users/fabienlenoble/web/seachildoz
git init
git add .
git commit -m "Initial commit: SeachildOz creative website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/seachildoz.git
git push -u origin main
```

3. **Configurer GitHub Pages**
   - Aller dans les Settings du repository
   - Section "Pages"
   - Build and deployment
   - Source : "Deploy from a branch"
   - Branch : "gh-pages" / root
   - Vérifier que GitHub Actions est activé

4. **Le workflow de déploiement** (`/.github/workflows/deploy.yml`)
   - S'exécute automatiquement à chaque push sur `main`
   - Build le projet
   - Déploie la build vers `gh-pages`

## Résultat final

Votre site sera accessible à :
```
https://YOUR_USERNAME.github.io/seachildoz/
```

## Développement local

```bash
npm run dev
# → http://localhost:5173/
```

## Build production

```bash
npm run build
# → Génère le dossier /dist
```

---

**Le vite.config.js est déjà configuré avec `base: '/seachildoz/'` pour GitHub Pages**
