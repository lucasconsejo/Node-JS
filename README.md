# Quiz Culture G
Par Lucas CONSEJO
Ingésup B2B Bordeaux
Le 10/11/2018
lien git : [lucasconsejo/Node-JS](https://github.com/lucasconsejo/Node-JS)


## Pour lancer le script : 

    quiz -[option]

## Liste options : 
* -t, --theme, 'Voir les thèmes'
* -g, --geography, 'Quiz Géographie'
* -m, --music, 'Quiz Musique'
* -b, --book, 'Quiz Livre'
* -f, --films, 'Quiz Films'
* -j, --videoGame, 'Quiz Jeux Video'
* -h, --history, 'Quiz Histoire'
* -s, --sport' 'Quiz Sport'
* -o, --option', 'Voir les options disponibles

## Description du script :

    C'est un quiz Vrai ou Faux de 10 questions.
    Les questions sont récupérés depuis une API.
    L'utilisateur peut répondre au questions en sélectionnant "Vrai" ou "Faux" avec la barre espace pour chaque question.
    Les réponses sont affichés à la fin du quiz, ainsi que le score final.

## Modules utilisés :

    - axios : pour récupérer les données de l'API https://opentdb.com/.
    - commander : pour passer des options.
    - inquirer : pour que l'utilisateur puisse choisir "Vrai" ou "Faux".
    - translate : pour traduire les questions anglaise en française.
    - colors : pour mettre des couleurs dans la console.