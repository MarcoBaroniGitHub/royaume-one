# Démarrer avec ChatGPT — guide 0.1.0

Ce guide prépare un usage assisté du Royaume. Il ne transforme pas le démonstrateur en plateforme autonome. Aucune instruction de compte ChatGPT ni connexion n'est modifiée par le téléchargement du dépôt. Le code original et la documentation de ce dépôt sont sous [Apache-2.0](../LICENSE).

## Ce qui doit être installé ou configuré

| Élément | Rôle | État aujourd'hui |
| --- | --- | --- |
| Dépôt Royaume ONE | Source commune du logiciel, des contrats et des instructions | Disponible, fondation expérimentale |
| Référence Git précise | Choisir le contenu exact utilisé | Possible par commit ; voir [versions](versioning.md) |
| Instructions ChatGPT | Définir le rôle, les usages et les obligations de preuve | [Modèle prêt à adapter](../chatgpt/project-instructions.fr.md), installation manuelle |
| Données et configuration privées | Vos espaces, comptes, projets et sources | Restent hors du dépôt public |
| Connexions autorisées | Accéder aux sources et opérations nécessaires | À connecter et vérifier dans l'hôte utilisé |
| Exécuteur durable | Reprises en dehors d'une conversation, file et contrôles | Non fourni par cette version |

## 1. Choisir une surface ChatGPT

La documentation OpenAI distingue les instructions globales du compte et les instructions d'un Projet, prioritaires dans ce Projet. Préférer des instructions propres au périmètre ; éviter d'y copier des informations très privées ou des secrets.

Dans ChatGPT classique, des Projets distincts avec mémoire limitée au projet peuvent séparer les contextes. La documentation consultée le 25/11/2026 précise toutefois que **ChatGPT Work n'est pas disponible dans un projet à mémoire limitée au projet**. Ce choix peut donc retirer des capacités utilisées dans Work. Vérifier les options réellement présentes avant de déplacer un travail.

Pour la surface Work utilisée par un cockpit connecté, un nom de projet et une consigne ne prouvent pas l'isolation. Les filtres des outils et du serveur doivent l'imposer ; ce contrôle n'est pas encore livré ici. Ne pas confier à cette fondation un contexte mélangeant données très privées et données professionnelles.

Sources officielles : [Projets, instructions et mémoire](https://help.openai.com/en/articles/10169521-projects-in-chatgpt), [instructions personnalisées du compte](https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions). Les interfaces et disponibilités dépendent de l'hôte et du compte.

## 2. Fixer la référence et les fichiers

Suivre [Choisir une version](versioning.md). Relever le commit complet du code **et** du modèle d'instructions utilisé ; ne pas se référer à `main` ou `latest` pour une installation figée. Conserver un profil privé d'installation suivant [l'exemple](../config/installation.example.json), en remplaçant ses valeurs indicatives.

Les documents nécessaires au premier essai sont le README, le présent guide, [les espaces](spaces.md), [l'architecture](architecture.md) et le [modèle d'instructions](../chatgpt/project-instructions.fr.md). Rendre ces textes effectivement accessibles à la conversation : fichiers fournis, contenu collé, ou outil autorisé capable de lire la référence Git choisie. Un lien GitHub seul n'est pas une installation ni une preuve de lecture automatique.

## 3. Installer les instructions

Dans un Projet ChatGPT compatible, ouvrir ses paramètres et y coller le contenu du modèle, en renseignant version, espace actif, projets et sources autorisés. Pour une autre surface, employer ses mécanismes d'instructions disponibles et conserver les mêmes références. Une instruction globale peut rappeler de charger le profil concerné ; elle ne doit pas injecter tous les contextes privés dans tous les chats.

`AGENTS.md` guide les agents de développement qui le chargent. Il ne remplace pas les paramètres ChatGPT et n'est pas automatiquement exécuté par une conversation ordinaire.

## 4. Connecter une seule source pour le premier essai

Donner accès uniquement à une source fictive ou non sensible et à une opération de lecture. Confirmer l'identité du compte et le périmètre réel exposé par l'outil. Ne pas importer un registre personnel complet pour montrer la plateforme à d'autres personnes. Le futur connecteur devra vérifier espace, mandat et finalité avant de préparer le contexte.

Si vous utilisez déjà un registre de missions, renseigner son URL dans votre profil privé. Le dépôt générique n'impose aucun registre personnel et ne contient aucune URL privée préremplie. Ne pas dupliquer automatiquement toutes les conversations dans ce registre. Une conversation déclarée privée/confidentielle ne doit faire l'objet d'aucune publication externe, même pour signaler son existence, sans autorisation explicite.

## 5. Contrôler la première session

Demander à l'assistant : « Indiquez la référence exacte que vous avez pu lire, l'espace actif, les sources accessibles, les opérations autorisées et ce qui reste indisponible. Utilisez seulement l'exemple fictif. »

Vérifier ensuite : une lecture autorisée réussit ; une ressource hors périmètre est absente des recherches et du contexte ; une expérimentation utilisable en interne n'est pas exportée comme référence externe. Le dépôt prouve actuellement ces décisions par des tests sur objets fictifs. Leur refus effectif par un outil réel reste à intégrer et tester : la seule réponse « je ne le ferai pas » du modèle ne suffit pas.

## 6. Évoluer sans mise à jour forcée

Choisir une nouvelle référence, lire les changements, essayer sur des données fictives, sauvegarder la configuration, puis basculer volontairement. Mettre à jour ensemble le code et les instructions accessibles aux nouvelles sessions. Une nouvelle version publiée par la communauté ne modifie pas votre installation. Le retour arrière des données devra utiliser des migrations et sauvegardes compatibles ; changer de code ne restaure pas automatiquement une base.
