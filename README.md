# Portfolio — Asma Benzaoucha

Portfolio professionnel construit avec **Next.js 15**, **TypeScript**, **Tailwind CSS** et **Framer Motion**, positionné comme *Computer Systems Engineer* (AI · Cybersecurity · Enterprise Systems · IAM).

## Structure

```
app/                → pages Next.js (layout, page, styles globaux)
components/          → Hero, About, Experience, Projects, Research, Skills, Timeline, Contact...
lib/content.ts       → TOUT le contenu texte du site (nom, expériences, projets, skills...)
public/cv/           → dépose ton CV en PDF ici (asma-benzaoucha-cv.pdf)
```

Pour mettre à jour le contenu (nouveau projet, nouvelle expérience, etc.), tu n'as presque jamais besoin de toucher aux composants : modifie simplement `lib/content.ts`.

## 1. Installation locale

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus) et [Git](https://git-scm.com/).

```bash
# dans le dossier du projet
npm install
npm run dev
```

Ouvre `http://localhost:3000` pour voir le site.

Avant de déployer :
- Ajoute ton CV en PDF dans `public/cv/asma-benzaoucha-cv.pdf`
- Relis `lib/content.ts` et ajuste les infos (GitHub, projets, dates) si besoin
- Vérifie l'URL finale dans `app/layout.tsx` (`metadataBase`) une fois ton domaine Vercel connu

## 2. Mettre le projet sur GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TON_UTILISATEUR/portfolio.git
git push -u origin main
```

## 3. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub.
2. Clique sur **Add New → Project**.
3. Sélectionne ton dépôt `portfolio`.
4. Laisse les paramètres par défaut — Next.js est détecté automatiquement.
5. Clique sur **Deploy**.

Après quelques minutes, tu obtiens une URL du type :

```
https://portfolio-xxxxx.vercel.app
```

Tu peux ensuite la personnaliser dans **Project → Settings → Domains** (par exemple `asma-benzaoucha.vercel.app`, ou un domaine acheté séparément comme `asmabenzaoucha.dev`).

## 4. Mises à jour futures

À chaque changement :

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel redéploie automatiquement le site à chaque `git push` sur `main`. Tu n'as plus jamais besoin de redéployer manuellement.

## Prochaines étapes possibles

- Ajouter une page dédiée par projet (architecture, résultats, captures) au lieu d'une simple carte
- Ajouter une section "Certificates" quand tu en auras
- Connecter un nom de domaine personnalisé
- Ajouter Google Analytics ou Vercel Analytics pour suivre les visites
