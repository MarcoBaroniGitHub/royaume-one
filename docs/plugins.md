# Plugins — contrat proposé v0.1

## Référence Obsidian

L'application Obsidian est propriétaire ; son API et son exemple officiel de plugin sont publics. L'exemple utilise TypeScript, une classe `Plugin`, un manifeste avec version et version minimale de l'hôte, `onload`/`onunload`, des commandes, vues, réglages et inscriptions d'événements nettoyées à la désactivation.

Les plugins Obsidian héritent des accès de l'application : la documentation précise qu'ils ne peuvent pas être limités fiablement par permission. Ce fonctionnement ne convient pas comme frontière de sécurité pour un Royaume personnel ou d'entreprise.

Sources officielles consultées le 25/11/2026 : [licence](https://obsidian.md/license), [sécurité des plugins](https://obsidian.md/help/plugin-security), [exemple](https://github.com/obsidianmd/obsidian-sample-plugin), [code TypeScript](https://github.com/obsidianmd/obsidian-sample-plugin/blob/master/src/main.ts), [manifeste](https://github.com/obsidianmd/obsidian-sample-plugin/blob/master/manifest.json).

## Contrat Royaume

Un plugin étend des points prévus sans modifier le noyau : commandes, panneaux, vues du graphe, outils métiers ou adaptateurs. Il déclare identité, version, API compatible, paramètres, capacités demandées et destinations réseau. Le propriétaire accorde seulement un sous-ensemble dans un espace/projet précis. Une déclaration n'est jamais une autorisation.

L'hôte fournit des opérations telles que `context.search`, `resources.read`, `missions.propose`, `ui.registerPanel`, `events.subscribe`. L'envoi externe reste une opération séparée et explicitement habilitée. Chaque appel repasse par le contrôleur central avec les droits actuels, y compris après une révocation.

Le manifeste `plugins/example/manifest.json` illustre un plugin en lecture seule ; il n'est pas un plugin exécuté par cette version. Le SDK et le chargeur restent à construire.

## Isolation nécessaire

Plugins d'interface : iframe d'origine distincte et protocole de messages validé, sans accès au DOM de l'hôte. Plugins exécutants : processus/conteneur séparé, accès fichiers et réseau refusés par défaut, identité courte et limitée, secrets uniquement via la passerelle. Un Worker ou un contexte JavaScript seul ne doit pas être présenté comme un bac à sable suffisant.

## Distribution et gouvernance

- Versions immuables, provenance et intégrité contrôlées ; compatibilité du contrat testée.
- Toute nouvelle capacité demandée par une mise à jour doit être approuvée avant activation.
- Installation, activation et autorisations distinctes ; désactivation nettoie commandes, événements et tâches ; révocation réévaluée sur les opérations en attente.
- Pas d'auto-installation ni d'auto-extension des droits ; arrêt et retour à une version antérieure documentés.
- Catalogue et éventuels plugins payants après un hôte isolé et un premier plugin utile. Le catalogue n'est pas le MVP.
