#!/usr/bin/env node

// Modules nécessaires
const program = require('commander')

const Options = require('./Classes/Options')
const Theme = require('./Classes/Theme')
const Questions = require('./Classes/Questions')
const Quiz = require('./Classes/Quiz')

let options = new Options()
let theme = new Theme()
let questions = new Questions()
let quiz = new Quiz()

program
  .version('1.0.0')
  .option('-t, --theme', 'Voir les thèmes')
  .option('-g, --geography', 'Quiz Géographie')
  .option('-m, --music', 'Quiz Musique')
  .option('-b, --book', 'Quiz Livre')
  .option('-f, --films', 'Quiz Films')
  .option('-j, --videoGame', 'Quiz Jeux Video')
  .option('-h, --history', 'Quiz Histoire')
  .option('-s, --sport', 'Quiz Sport')
  .option('-o, --option', 'Voir les options disponibles')
  .parse(process.argv) 


// Lance les fonctions selon l'option choisi par l 'utilisateur
if (program.theme){
    theme.getTheme()
}
else if (program.geography){
    questions.getQuestions(quiz.startQuiz, 22)
}
else if (program.music){
    questions.getQuestions(quiz.startQuiz, 12)
}
else if (program.book){
    questions.getQuestions(quiz.startQuiz, 10)
}
else if (program.films){
    questions.getQuestions(quiz.startQuiz, 11)
}
else if (program.videoGame){
    questions.getQuestions(quiz.startQuiz, 15)
}
else if (program.history){
    questions.getQuestions(quiz.startQuiz, 23)
}
else if (program.sport){
    questions.getQuestions(quiz.startQuiz, 21)
}
else if (program.options){
    options.getOptions()
}
else{
    console.log("Commande not found")
}