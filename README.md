# 🕵️ Inspecteur Gadget

**Le détective des bonnes affaires.** Interface rétro 3D inspirée de l’époque Nintendo 64.

**Création : @hippo.reporter** Application de bureau Electron pour rechercher des produits, comparer des offres du Web et garder ses trouvailles.

## Identité visuelle

- Direction artistique rétro 3D / Nintendo 64 : panneaux biseautés, boutons en relief, textures bleu nuit et jaune, typographie pixel/arcade.
- Maquette de référence : `assets/maquette-interface.png`.
- GIF fourni intégré dans l’application : `assets/inspecteur-gadget.gif`.
- Crédit créateur visible dans l’interface : **par @hippo.reporter**.

## Fonctionnalités du prototype

- Recherche par nom ou lien via les résultats Web publics DuckDuckGo.
- Filtres d'état, catégorie et budget (les filtres sont indicatifs lorsque le moteur ne fournit pas ces informations dans ses extraits).
- Priorisation indicative des boutiques spécialisées et indépendantes.
- Favoris et historique stockés localement, sans compte.
- Alertes de prix vérifiées toutes les 30 minutes lorsque l'application est ouverte.
- Export CSV et PDF.
- Recherche multiple à partir de captures avec identification IA facultative via une API compatible OpenAI.
- Build Windows `.exe` et macOS `.dmg` via GitHub Actions.

## Installation pour développeurs

Prérequis : Node.js 20+ et Git.

```bash
npm install
npm start
```

Créer l'installateur de la machine courante :

```bash
npm run dist
```

Les fichiers sont créés dans `dist/`. La compilation macOS doit idéalement être faite sur macOS et Windows sur Windows ; GitHub Actions le fait automatiquement.

## Publier les deux versions avec GitHub

1. Créez un dépôt GitHub vide nommé `inspecteur-gadget`.
2. Décompressez cette archive et envoyez **le contenu** du dossier à la racine du dépôt (pas le dossier parent).
3. Faites `Commit changes` sur la branche `main`.
4. Ouvrez l'onglet **Actions** puis **Build Inspecteur Gadget**.
5. Cliquez **Run workflow**. Le workflow compile sur `macos-latest` et `windows-latest`.
6. Ouvrez l'exécution terminée et récupérez les artefacts `inspecteur-gadget-macos-latest` (DMG) et `inspecteur-gadget-windows-latest` (EXE).
7. Pour créer une version publique : créez un tag `v1.0.0` et poussez-le (`git tag v1.0.0 && git push origin v1.0.0`). Le workflow sera relancé. Publiez ensuite les installateurs dans **Releases**.

## IA facultative et coût

La recherche texte/lien ne demande pas de clé API. La reconnaissance automatique des captures d'écran nécessite une clé d'un fournisseur compatible avec l'API OpenAI et un modèle vision. Le fournisseur peut facturer les requêtes : consultez ses tarifs. La clé est enregistrée dans les réglages locaux de l'application ; ne la partagez jamais.

## Limites importantes de cette première version

- Le moteur utilise les résultats HTML publics DuckDuckGo ; ce n'est pas un index exhaustif et le moteur peut limiter les requêtes.
- Les prix sont extraits des extraits de recherche lorsqu'ils y figurent. Ils ne sont pas garantis comme prix final, disponibilité ou frais de port. Toujours vérifier le prix sur le site marchand avant d'acheter.
- Les badges de confiance sont des indices basés sur le domaine, pas une certification du vendeur. Les petites boutiques inconnues sont conservées mais signalées.
- Les filtres d'état/catégorie et la détection du meilleur prix sont limités par les informations publiées par les sites.
- Les alertes fonctionnent tant que l'application est ouverte.
- L'identification IA est facultative et dépend du fournisseur configuré.

## Sécurité & confidentialité

Pas de compte utilisateur. Historique, favoris et alertes sont conservés dans le dossier de données local Electron. Les recherches sont envoyées à DuckDuckGo. Les captures sont envoyées au fournisseur IA uniquement si l'utilisateur configure une clé et déclenche l'identification.

## Licence

À définir avant diffusion publique. Vérifiez les droits sur les éléments graphiques et les marques utilisées.


## Crédit

Inspecteur Gadget est créé par **@hippo.reporter**. L’interface et les éléments de marque du projet doivent conserver cette attribution dans les versions redistribuées.


### Icône de l'application

L'icône macOS (`assets/icon.icns`), Windows (`assets/icon.ico`) et l'aperçu PNG (`assets/icon.png`) utilisent désormais une image fixe extraite du GIF fourni : ce n'est pas le GIF animé qui sert d'icône, mais une image arrêtée du personnage.
