# Site 2 – Restaurant gastronomique – Intégration

## Vue d'ensemble

Ce frontend (Site 2) est un **site vitrine + réservation** pour restaurant gastronomique, basé sur le modèle du site hôtelier de référence. Il est conçu pour utiliser le **backend du site de référence** et une **base de données commune** (schéma dans `Consignes générales/database-a-faire-evoluer-sans-modifier`).

## Ce qui est inclus (frontend uniquement)

- **Pages publiques** : Accueil, Menu (carte), Réservation, Galerie, Contact, Chat (formulaire de contact en direct)
- **Auth** : Connexion / Inscription, Mot de passe oublié, Réinitialisation, bouton OAuth Google (nécessite configuration Better Auth)
- **Admin** : Tableau de bord (stats, affichage prix), Réservations, Messages contact, Gestion utilisateurs
- **Config** : `config/site.config.js` – nom, couleurs, horaires, coordonnées (personnalisation commerçant)
- **API** : Proxy `/api/backend/*` vers le backend du site de référence (`BACKEND_URL` ou `NEXT_PUBLIC_API_URL`)

## Connexion au backend (site de référence)

1. **Variables d'environnement** (`.env.local`) :
   - `NEXT_PUBLIC_API_URL` ou `BACKEND_URL` : URL du backend (ex. `http://localhost:5000`)
   - `NEXT_PUBLIC_HOTEL_ID` : optionnel, ID de l’établissement dans la base commune (ex. UUID du `hotels` ou équivalent pour le site 2)

2. **Endpoints attendus côté backend** (dans le dossier du site de référence) :
   - `POST /reservations` – création réservation (body : reservationDate, reservationTime, guests, guestEmail, etc.)
   - `GET /reservations`, `GET /reservations/stats` – liste et statistiques
   - `POST /contact` – envoi message contact (body : name, email, message, hotelId…)
   - `GET /dashboard/contact-stats`, `GET /dashboard/stats` – stats dashboard
   - `GET /users` – liste utilisateurs (admin)

   Le backend du site de référence peut exposer les mêmes routes ; le frontend Site 2 les appelle via le proxy `/api/backend`.

## Authentification (Better Auth)

Les pages **Connexion**, **Inscription**, **Mot de passe oublié** et **Réinitialisation** utilisent **Better Auth** côté client (`lib/auth-client.js`). Pour qu’elles fonctionnent :

- **Option A – Auth sur le site de référence**  
  Configurer le frontend Site 2 pour rediriger vers la page de login du site de référence (même base utilisateurs).

- **Option B – Auth sur Site 2 (même base que la référence)**  
  Ajouter dans ce frontend :
  - Route API Better Auth : `pages/api/auth/[[...all]].ts` (handler Better Auth)
  - Config serveur : `lib/auth.ts` (betterAuth avec prismaAdapter, même `DATABASE_URL` que la référence)
  - Prisma : schéma minimal avec les tables `better_auth_user`, `better_auth_session`, `better_auth_account`, `better_auth_verification` (comme dans le site de référence)
  - Env : `BETTER_AUTH_SECRET`, `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, etc.

La base de données reste **commune** (fichier `database-a-faire-evoluer-sans-modifier` non modifié) ; seules les tables Better Auth déjà présentes sont utilisées.

## Base de données commune

- Ne **pas** modifier le fichier `Consignes générales/database-a-faire-evoluer-sans-modifier`.
- Les tables utilisées côté backend (réservations, contact, users, etc.) sont celles de ce schéma (ex. `room_reservations` ou équivalent, `contact_messages`, `users`). Le backend du site de référence doit être adapté si besoin pour un “site 2” (ex. filtre par `hotel_id` ou identifiant site).

## Déploiement

- **Build** : `npm run build` (sans Prisma si Option A ; avec Prisma generate si Option B).
- **Env** : définir `NEXT_PUBLIC_API_URL` (ou `BACKEND_URL`) vers l’API du site de référence.
- Hébergement possible : Vercel, Netlify, etc., comme le frontend du site de référence.

## Personnalisation commerçant

- **Nom, slogan, couleurs, polices** : `config/site.config.js`
- **Horaires, adresse, téléphone, email** : `config/site.config.js` → `business`
- **Menu (carte)** : `data/menuData.js` (peut ensuite être remplacé par des appels API au backend commun)

---

**Résumé** : Frontend Site 2 = 100 % dans ce dossier. Backend et évolutions backend = dans le dossier du **site de référence**. Base de données = commune, schéma inchangé.
