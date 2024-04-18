# BasicApp

Bienvenue sur le test technique BasicApp.


## Test technique

Crée un repos Git et pense à commit de façon régulière.
Voici la liste des tâches à effectuer.


### Ajout de l'outil "Date & heure"

Dans la même logique que l'outil `Mon IP`, crée une nouvelle route `/tools/show-datetime` pour l'outil `Date & heure`, qui va chercher la date et l'heure sur l'api `jsontest.com` via le service Angular déjà existant.
De plus, la date doit être formatée comme suit, avec le timezone de Sydney, Australie : `Il est 14h59 et nous sommes le 8 octobre 2017`.


### Poster un article

En t'inspirant de la structure actuelle du projet, crée une nouvelle route `/post/new` permettant, via un formulaire composé de 2 champs, de poster un nouvel article sur l'API `jsonplaceholder.typicode.com`.
Le formulaire doit suivre le Material Design, être responsive et avec les contraintes de validations suivantes :

 - Titre : input text, 3 à 60 caractères
 - Contenue : textarea, 30 à 600 caractères

Le formulaire doit être posté à l'API avec le `userId` numéro `3`. Après l'envoi du formulaire, un loader doit apparaître. Et enfin, afficher un message de félicitation avec le numéro de l'article (`id`).


### Rendre l'application "lazy loading"

Découpe l'application en 3 modules :

- Maintenir le module principal, avec juste la page `Home`
- Un module pour les pages commençant par `/tools`
- Et un autre pour la page par `/post/new`

Les 2 nouveaux modules doivent profiter du `lazy loading` d'Angular.


### Icône sur-mesure

Créez une nouvelle icône au format SVG destinée à représenter le logo rond des Ripeurs, intégrer dans un écran de téléphone. Tu as un exemple de ce qui est attendu, dans le fichier : `./icon-example.jpg`.
Puis charge-la via le service Angular `MatIconRegistry` et utilise-la via `<mat-icon>`
Ajoute cette icône à la page d'accueil avec une taille qui s'adapte à la largeur de l'écran en prenant toute la largeur, sans jamais dépasser 800px.


### API no-code avec Make

Pour donner un peu de piquant à ce test, tu vas implémenter une API en no-code à l'aide de `make.com`, qui va remplacer celle utilisée pour la fonctionnalité précédente `Poster un article` (à la place de `jsonplaceholder.typicode.com`). Le no-code (de type back / automatisation) n'étant peut-être pas familier pour toi, voilà quelques étapes qui vont permettre d'y arriver :
_(N'hésite pas à regarder des tutoriels à ce sujet)_

 - Crée un compte (c'est gratuit) sur `make.com`.
 - Crée un nouveau scénario.
 - Ajoute un module de type "Webhook" => "Custom webhook" (tu devrais ensuite avoir une URL de ce genre : `https://hook.eu1.make.com/xxx...`). Cette URL sera ton nouveau point d'entrée d'API back, en substitution à l'ancienne API `jsonplaceholder.typicode.com`.

Pour la suite, voici les règles que ton scénario doit suivre, c’est-à-dire, ton API no-code de substitution :
_(Tout est faisable directement avec Make)_

 - Vérifie l'existence des 3 champs envoyés au webhook, en JSON : `title`, `body` et `userId`. S'il y a un champ manquant, tu renvoies un webhook de réponse, avec une erreur HTTP 400 (et idéalement, un message dans le JSON).
 - Génère une ID (incrémental, c'est mieux, sinon aléatoire) du nouveau post (cherche une solution avec Make).
 - Insère automatiquement le contenu du post dans un Google Sheet ou Airtable, avec l'ID du post et les 3 champs précédents.
 - Renvoie avec un webhook de réponse, le résultat JSON avec les 4 champs (exactement comme l'ancienne API `jsonplaceholder.typicode.com`).

Normalement, tu n'as fait aucune modification sur le projet Angular (sauf l'URL de l'API), et tu as donc créé un substitut identique à l'ancienne API `jsonplaceholder.typicode.com`. Pour boucler cette partie du test, réalise les actions suivantes :

 - Crée un dossier `no-code` à la racine du projet Git.
 - Fais un screenshot du scénario Make et mets-le dans le dossier `no-code`.
 - Fais un export du scénario (pendant l'édition du scénario, clique sur l'icône avec "3 petits points" à droite de `Save` et clique sur `Export Blueprint`) et copie le fichier d'export JSON dans le dossier `no-code`.
 - Rends le Google Sheet ou le Airtable accessible au public (disponible directement via un lien de partage, en navigation privée) et copie le lien dans un fichier texte, dans le dossier `no-code`.
 - Et surtout, pense à laisser ton scénario actif sur Make (`ON` en bas à gauche), pour que je puisse l'exécuter avec ton projet.


## Note finale

L'idée est d'avoir un code structuré, logique, facilement compréhensible et modulable.

Enfin, push ton projet sur un repos Git privé (comme Gitlab ou Github) et donne-moi un accès en lecture à l'adresse mail "it@lesripeurs.com".

Bon courage 👍
