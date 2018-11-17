#!/usr/bin/env node

// Modules nécessaires
const program = require('commander')

// Fonctions importées
const Options = require('./fonctions/Options')
const Theme = require('./fonctions/Theme')
const Questions = require('./fonctions/Questions')
const Quiz = require('./fonctions/Quiz')

// Conﬁguration des options du programme
program
  .version('1.0.0')
  .option('-t, --theme', 'Voir les thèmes')
  .option('-g, --geography', 'Quiz Géographie')
  .option('-m, --music', 'Quiz Musique')
  .option('-j, --videoGame', 'Quiz Jeux Video')
  .option('-h, --history', 'Quiz Histoire')
  .option('-o, --option', 'Voir les options disponibles')
  .parse(process.argv) 


// Lance les fonctions selon l'option choisie par l'utilisateur
if (program.theme){
    Theme.getTheme()
}
else if (program.geography){
    Questions.getQuestions(Quiz.start, 22)
}
else if (program.music){
    Questions.getQuestions(Quiz.start, 12)
}
else if (program.videoGame){
    Questions.getQuestions(Quiz.start, 15)
}
else if (program.history){
    Questions.getQuestions(Quiz.start, 23)
}
else if (program.options){
    Options.getOptions()
}
else{
    console.log("Option invalide")
}