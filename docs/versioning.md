# Choisir une version et conserver sa propre installation

Le dépôt commun contient le logiciel, la documentation et les instructions génériques. Chaque utilisateur garde ses données, comptes, sources et autorisations dans une configuration privée distincte. La communauté peut améliorer le socle sans modifier automatiquement les installations.

## État actuel

Le paquet porte le numéro `0.0.1`. C'est un indicateur de fondation expérimentale, pas une version stable ni un installateur. Le cockpit privé est annoncé séparément en V23 : ce numéro compte ses publications d'interface ; il ne signifie pas que le noyau communautaire est en version 23. Le projet n'a actuellement ni catalogue de releases, ni sélecteur intégré, ni mise à niveau automatique.

Une **référence Git complète** permet déjà de choisir un état précis du dépôt. La fondation initiale est le commit `2504a0b4fd6466af8ba4644f583f976d65244a67` ; elle contient le démonstrateur mais pas le kit ChatGPT ajouté ensuite. Pour utiliser le kit, choisir un commit qui inclut ce document et le dossier `chatgpt/`.

## Épingler le code et les instructions

Depuis un clone du dépôt, sans modification locale en cours :

```sh
git fetch origin
# Remplacer le texte ci-dessous par le commit complet examiné dans GitHub.
git checkout --detach COMMIT_COMPLET_CHOISI
git rev-parse HEAD
npm test
npm run build
```

Le résultat de `git rev-parse HEAD` est la référence exacte à conserver dans votre profil privé. Pour cette fondation, préférer le code et les instructions du même commit. Un `main` ou `latest` peut changer ; un nom de branche ne fixe donc pas une installation. Les futurs tags devront être liés à un commit contrôlé et ne pas être déplacés.

Copier [installation.example.json](../config/installation.example.json) vers `installation.local.json`, remplacer les valeurs indicatives et garder ce profil hors du dépôt public. Ce fichier est un **contrat documentaire de configuration** : aucun runtime ne le charge actuellement et sa valeur `automaticUpdates: false` ne constitue pas, à elle seule, un contrôle logiciel. Les commandes ci-dessus permettent le choix manuel dès aujourd'hui.

## Versions à distinguer à terme

| Objet | Référence à conserver |
| --- | --- |
| Noyau/interface communautaire | Version publiée et commit complet |
| Instructions et guides | Version du modèle et commit réellement chargé |
| Schéma des données | Numéro de migration et sauvegarde compatible |
| API de plugins | Version du contrat de l'hôte |
| Chaque plugin | Identifiant, version, empreinte et droits accordés |
| Configuration personnelle/professionnelle | Révision privée, sans secrets dans le Git public |
| Modèle et connecteurs de l'hôte | Identifiants et capacités disponibles ; figer le dépôt ne fige pas leur comportement |

## Cible de distribution

Des releases nommées, par exemple `1.2.3`, accompagnées de notes, versions compatibles, migrations, tests et provenance. Cette numérotation est une convention proposée : aucun tag `1.2.3`, V1 ou V2 n'est publié par ce guide.

Une contribution arrive en proposition de changement, passe la revue et les contrôles, puis peut entrer dans une release. L'utilisateur reste sur sa référence jusqu'à sa propre décision de bascule. Une amélioration de ses données ou préférences privées ne devient pas automatiquement une contribution publique ; le contenu partageable doit être extrait et autorisé explicitement.

## Mettre à niveau et revenir en arrière

Lire les notes, exporter la configuration, sauvegarder les données, essayer dans un environnement séparé et contrôler les accès avant la bascule. Une hausse de permissions d'un plugin exige un nouvel accord. Conserver la référence précédente et les instructions associées. Revenir à un ancien code ne restaure ni les données migrées ni les messages déjà envoyés ; la restauration doit être conçue et testée séparément.
