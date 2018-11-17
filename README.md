# Quiz Culture G

Par Lucas CONSEJO

Ingésup B2B Bordeaux

Le 17/11/2018

lien git : [lucasconsejo/Node-JS](https://github.com/lucasconsejo/Node-JS)


## Pour lancer le script : 

quiz -[option]

## Liste options : 
* -t, --theme, 'Voir les thèmes'
* -g, --geography, 'Quiz Géographie'
* -m, --music, 'Quiz Musique'
* -j, --videoGame, 'Quiz Jeux Video'
* -h, --history, 'Quiz Histoire'
* -o, --option', 'Voir les options disponibles

## Description du script :

C'est un quiz Vrai ou Faux de 10 questions. Les questions sont récupérées depuis une API.
L'utilisateur peut répondre aux questions en sélectionnant "Vrai" ou "Faux" avec la barre espace pour chaque question. 
Les réponses sont affichées à la fin du quiz, ainsi que le score final.

## Modules utilisés :
- axios : pour récupérer les données de l'API https://opentdb.com/.
- commander : pour passer des options.
- inquirer : pour que l'utilisateur puisse choisir "Vrai" ou "Faux".
- translate : pour traduire les questions anglaises en françaises.
- colors : pour mettre des couleurs dans la console.
- say : pour qu'une voix pose les questions.

## Problèmes rencontrés :
- L'API fournit des questions en anglais, avec un encodage particulier (J'avais essayé d'utiliser le package 'utf8' mais ça n'a rien changé...).
- La traduction des questions anglaises en françaises n'est pas correcte pour toutes questions. :/
- La voix qui pose les questions ne comprend pas les "é" et autres accents.
- Il est possible que la voix ne soit pas la même sur Mac & Windows... J'ai configuré la voix selon la voix installer sur mon OS (Windows).
C'est donc possible que la voix ne fonctionnent pas sur Mac --> A vérifier.
- Je n'ai pas trouvé le moyen de stopper la voix qui parle lorsqu'on passe à une autre question (La voix se superpose si on attend la fin de la question (**_INSUPPORTABLE A ECOUTER --> JE DECONSEILLE D'ESSAYER !_**)).
- Je n'ai pas utilisé tous les thèmes proposés par l'API car certains thèmes ne contiennent aucune question sous forme de "Vrai ou Faux".
