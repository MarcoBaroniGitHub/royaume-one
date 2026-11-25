# Personnel, professionnel et très privé — le château et ses pièces

Un même château peut accueillir la vie privée du propriétaire et les affaires du Royaume. L'accès à la salle du conseil ne donne pas accès à ses appartements. Ce principe doit s'appliquer aux humains, agents, outils et résultats dérivés.

## Trois axes indépendants

1. **Appartenance** : espace personnel, organisation, projet ou client.
2. **Sensibilité** : public, interne, restreint, secret technique.
3. **Usage** : consulter, construire en interne, préparer une candidature, transmettre à un destinataire ou publier.

Une ressource professionnelle peut être très privée. Une information personnelle peut être partageable pour un usage précis. Un bouton « pro/perso » ne suffit donc pas à décrire les droits.

## Expérience proposée

| Pièce | Ressources | Accès cible |
| --- | --- | --- |
| Appartements personnels | Organisation de la vie personnelle | Propriétaire et personnes/agents habilités pour une finalité précise |
| Pièces très privées | Contenus que le propriétaire réserve à lui-même | Propriétaire uniquement par défaut ; absents des recherches et contextes d'agents |
| Salles des affaires | Données d'une organisation et de ses projets/clients | Membres et agents habilités dans ce seul périmètre |
| Espace public | Références ou ressources approuvées pour publication | Diffusion explicite, avec provenance et autorisation de sortie |
| Coffre technique | Identifiants d'accès et valeurs secrètes | Services autorisés par opérations bornées ; valeurs absentes du contexte du modèle |

L'interface cible comporte un espace actif et un réglage sur chaque ressource : agents admis, usages autorisés, partage externe et publication. Les options héritent des restrictions de la source ; une exception doit être explicite et ne peut pas être décidée par l'agent lui-même.

## Le contrôle doit précéder le contexte

Les ressources interdites ne doivent pas simplement être masquées à l'écran. Titres, compteurs, recherche, mémoire, index vectoriels et caches doivent être filtrés avant exposition. Au moment d'une sortie, les restrictions des sources sont réévaluées avec les droits actuels. Une synthèse mélangeant une source partageable et une source privée reste soumise aux deux.

Un agent d'entreprise ne reçoit pas un accès transversal parce que son propriétaire possède aussi l'espace personnel. Un agent de supervision peut consulter les indicateurs autorisés sans lire tous les contenus. La révocation doit couvrir les tâches en attente et les sessions/caches concernés.

## État établi au 25 novembre 2026

| Élément | État vérifié |
| --- | --- |
| Politique expérimentale par espace/projet/finalité/destination | Implémentée dans ce dépôt, tests sur données fictives |
| Accès agents, usage professionnel et sortie externe séparés | Présents dans le démonstrateur |
| Mode « très privé » | Modèle fonctionnel documenté ; aucun espace privé réel créé par ce guide |
| Filtrage serveur, base, recherche et contexte des outils réels | Non livré dans cette fondation |
| Cloisonnement du cockpit privé existant | Non démontré par ce dépôt ; accès privé au site et cloisonnement interne sont distincts |
| Cloisonnement des mémoires ChatGPT et de tous les connecteurs | Dépend de l'hôte et des accès réels ; aucune garantie créée par une instruction |

## Recette avant de déclarer le système opérationnel

Utiliser deux organisations fictives, un espace personnel et une ressource très privée. Vérifier qu'une recherche professionnelle ne révèle ni contenu ni existence des sources privées, qu'une sortie non approuvée échoue côté serveur, qu'un résumé ne contourne pas les restrictions et qu'une révocation prend effet sur l'opération suivante. Conserver des preuves dépourvues de données privées. Tant que cette recette n'est pas satisfaite sur le circuit réel, ne pas présenter le château comme cloisonné en production.
