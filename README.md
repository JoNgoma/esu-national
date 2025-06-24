# 🎓 ESU National - Application Web de Gestion Académique

**ESU National** est une application web moderne conçue pour digitaliser les processus liés à l’**Enseignement Supérieur et Universitaire** (ESU) en République Démocratique du Congo. Elle fournit un portail fluide, sûr et intuitif permettant aux étudiants, enseignants et responsables académiques d'accéder et de gérer les informations essentielles du secteur.

---

## 🚀 Fonctionnalités principales

* ✅ Authentification (connexion / inscription)
* ✅ Gestion et consultation des établissements reconnus en RDC
* ✅ Accès aux filières, cycles et suivis des divers étudiants
* ✅ Tableau de bord personnalisé pour les contrôleurs
* ✅ Système responsive adapté à tous les écrans

---

## 🧱 Stack technique

| Technologie  | Rôle                               |
| ------------ | ---------------------------------- |
| Vue.js 3     | Framework principal (SPA)          |
| Vue Router   | Gestion des routes front-end       |
| Bootstrap | Design rapide et réactif           |
| Vite         | Build & développement ultra-rapide |

> Backend : pensé pour être connecté avec une API REST (Laravel, AdonisJS, etc.)
> IndexedDb : pensé pour continuer les enregistrment même hors connexion
> PWA : pensé pour tourner sur PC hors navigateur
---


## ⚙️ Installation locale

```bash
# 1. Cloner le dépôt
git clone https://github.com/JoNgoma/esu-national.git
cd esu-national

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# Le projet sera disponible sur http://localhost:5173
```

---

## 📁 Structure du projet (simplifiée)

```
esu-national/
├── public/
│   └── assets/         # Images, icônes, fichiers statiques
├── src/
│   ├── components/     # Composants Vue réutilisables
│   ├── pages/          # Pages principales (Home, Login...)
│   ├── router/         # Définition des routes
│   └── main.js         # Entrée de l'application
├── index.html          # Point d’entrée (avec balises head)
└── package.json
```

---

## 📌 Objectifs du projet

* Moderniser la gestion de l’ESU en RDC
* Rendre les processus académiques plus accessibles et transparents
* Offrir une solution nationale, modulaire et évolutive

---

## 👨‍💻 Auteur

**Josué Ngoma**
Développeur Web passionné par la modernisation du secteur public via des outils numériques performants.

---

