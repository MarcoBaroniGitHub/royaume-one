# Architecture cible — proposition du 25 novembre 2026

## Objet du produit

Le Royaume structure le contexte nécessaire aux outils et aux agents. Les projets et tâches sont des objets du système, mais le produit n'impose pas de remplacer Jira, Notion ou GitHub. Une connexion à un outil n'autorise pas l'import de tout son contenu.

## Couches et responsabilités

| Couche | Responsabilité | État dans ce dépôt |
| --- | --- | --- |
| Interface | Cockpit, graphe/ville, réglages des ressources | Présentation et exemple de réglages |
| Noyau | Identités, espaces, projets, missions, provenance, événements, politique | Fonction de politique expérimentale |
| Passerelle d'accès | Authentifier l'appelant, charger les droits actuels, contrôler lecture et sortie | À construire côté serveur |
| SDK et hôte de plugins | API versionnée, cycle de vie, permissions, isolation | Contrat proposé |
| Adaptateurs | Jira, Notion, GitHub, messagerie, modèles | À implémenter ici |
| Exécution durable | File, idempotence, reprise, plafonds de coût, arrêt | À intégrer sur preuves |

## Individu et organisation

Une personne peut appartenir à son espace personnel, à une entreprise et à un projet client. Un espace correspond à une frontière de données ; un projet réduit encore le périmètre. Les rôles donnent des droits de base ; les attributs de la ressource, le mandat et la destination les restreignent. L'administrateur technique ne reçoit pas automatiquement un droit de lire tous les contenus.

Le graphe affiche uniquement les nœuds et relations autorisés. Titres, compteurs, liens, résumés, index vectoriels, caches, notifications et journaux doivent respecter les mêmes frontières. Un résultat dérivé conserve la provenance et les restrictions de toutes ses sources ; un résumé n'est pas automatiquement partageable.

## Autorisation à deux niveaux

1. Avant le contexte : filtrer les sources à la recherche et à la lecture, avec l'identité et les droits fournis par le serveur.
2. Avant l'effet externe : vérifier à nouveau les ressources sources, la finalité, l'opération et la destination, avec les droits actuels. La lecture ne vaut pas autorisation de transfert.

Le modèle ne décide pas de ses propres permissions. Les valeurs secrètes restent dans un service dédié, utilisables par référence via une opération bornée. Ni instructions dans un prompt, ni étiquettes, ni manifeste de plugin ne constituent une isolation.

## Expérience du verrou

| Réglage visible | Conséquence cible |
| --- | --- |
| Agents autorisés | Autorise la préparation du contexte seulement pour les mandats admis |
| Usages autorisés | Développement interne, recrutement, communication… choisis séparément |
| Partage externe | Refus par défaut ; destinataires et canaux explicites |
| Publication | Droit distinct, vers une destination publique précise |

Le premier exemple est une expérimentation utilisable pour développer mais non approuvée comme référence de recrutement. La même personne peut travailler dessus sans qu'un agent l'ajoute à un email externe, à une pièce jointe, à un GIF ou à un CV.

## Mise en œuvre progressive

Commencer par un monolithe modulaire, une base relationnelle et un contrôleur unique. Le filtrage par espace et les politiques côté serveur précèdent la recherche vectorielle et les plugins tiers. Des règles de base de données complètent les contrôles applicatifs. Aucun bénéfice à créer maintenant un microservice par institution royale.

Pour une entreprise, prouver l'isolation entre deux organisations, la révocation et la traçabilité avant le premier accès à des données réelles. SSO, déploiement dédié et support sont des services possibles ; les protections fondamentales doivent exister dans le socle communautaire.

## Portée de la preuve actuelle

`packages/core/policy.mjs` est une décision pure testée sur des objets fournis par un hôte de confiance. Il n'authentifie personne, ne filtre aucune base existante et n'isole aucun plugin. Une exécution dans le navigateur est pédagogique et modifiable par son utilisateur. L'étape suivante est son intégration serveur, suivie de tests de bout en bout avec un vrai adaptateur.
