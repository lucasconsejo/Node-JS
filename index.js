#!/usr/bin/env node

// Modules nécessaires
const axios = require('axios')
const program = require('commander')
const inquirer = require('inquirer')
const translate = require('translate')
const colors = require('colors/safe')

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

// Différents lien de l'API opentdb
const URL_THEME = 'https://opentdb.com/api_category.php'
const URL_QUIZ = 'https://opentdb.com/api.php?amount=10&category='
const URL_TYPE = "&difficulty=medium&type=boolean"

let theme = {}
let questionnaire = {}
let score = 0
let reponse = []
let questions = []
let traduction = {}

// Fonctions qui listes les options disponibles
function getOptions(){
    console.log(colors.yellow('quiz')+' '+colors.grey('-[option]')+' :')
    console.log(colors.grey('-t')+', --theme', '(Voir les thèmes)')
    console.log(colors.grey('-g')+', --geography', '(Quiz Géographie)')
    console.log(colors.grey('-m')+', --music', '(Quiz Musique')
    console.log(colors.grey('-b')+', --book', '(Quiz Livre)')
    console.log(colors.grey('-f')+', --films', '(Quiz Films)')
    console.log(colors.grey('-j')+', --videoGame', '(Quiz Jeux Video)')
    console.log(colors.grey('-h')+', --history', '(Quiz Histoire)')
    console.log(colors.grey('-s')+', --sport', '(Quiz Sport)')
    console.log(colors.grey('-o')+', --option', '(Voir les options disponibles)\n')
}

// Fonctions qui listes les thèmes disponibles
function getTheme(){
    axios.get(URL_THEME)
        .then((response) =>{
            theme = response.data
            console.log('Voici les différentes thèmes : ')

            // Selection des thèmes --> Je n'ai pas utilisé tout les thèmes proposés par l'API 
            for(let i = 0; i < theme['trivia_categories'].length; i++){
                if(i == 1 || i == 2 || i == 3 || i == 6 || i == 12 || i == 13 || i == 14){
                    console.log("- "+theme['trivia_categories'][i].name)
                }
            }
        })
        .catch((err)=>{
            console.log('Error', err)
        })
}

// Fonctions qui récupère les 10 questions selon le thème choisi
function getQuestions(callback, nb_category){
    axios.get(URL_QUIZ+nb_category+URL_TYPE)
        .then((response) =>{
            questionnaire = response.data['results']
            for(let i = 0; i < questionnaire.length; i++){

                // Fonctions pour traduire les questions en français
                const langue = ( async () =>{
                    traduction[i] = await translate(questionnaire[i].question, { to: 'fr', engine: 'yandex', key: 'trnsl.1.1.20181109T232454Z.24d26eeded149ec6.d57696e6f1b4dc0051db2370b6ea4a4f75c9c22f'})
                    questionnaire[i]['question'] = traduction[i]
                })()
            }
            setTimeout(function(){
                callback(questionnaire[0].category, questionnaire)
            },900)
        })
        .catch((err)=>{
            console.log('Error', err)
        })
}

// Fonctions qui lance le quiz selon le thème choisi
function startQuiz(category_name, questionnaire){
    console.log(colors.cyan('Bienvenue dans le quiz de '+category_name+' !'))
    console.log(colors.cyan('Vous allez devoir répondre à 10 questions Vrai ou Faux.'))
    console.log(colors.cyan('Êtes-vous prêt ? C\'est parti !\n'))

    for(let i = 0; i < questionnaire.length; i++){
        let nb_question = i + 1
        questions[i] =  {
            type: 'checkbox',
            message: `Questions n°${nb_question} : ${questionnaire[i].question}\n`,
            name: `reponse${nb_question}`,
            choices: ['Vrai', 'Faux'],
        }
        if(questionnaire[i].correct_answer == 'False'){
            reponse[i] = 'Faux'
        }
        else{
            reponse[i] = 'Vrai'
        }
    }

    // Saisie de l'utilisateur et verification sur la réponse est juste ou non
    inquirer.prompt(questions).then((answer) =>{
        console.log(colors.cyan('\nVoici les résultats : '))
        for(let i = 0; i < 10; i++){
            let nb_question = i + 1
            if(answer[`reponse${nb_question}`][0] == reponse[i]){
                score++
                console.log('Reponse n°'+nb_question+' : '+colors.green('Correcte ! C\'était '+reponse[i]))
            }
            else{
                console.log('Reponse n°'+nb_question+' : '+colors.red('Incorrect  C\'était '+reponse[i]))
            }
        }
        console.log(colors.cyan('Votre score : ')+colors.yellow(score+'/10'))    
        console.log(colors.cyan('A bientôt !\n'))
    })

}

// Lance les fonctions selon l'option choisi par l'utilisateur
if (program.theme){
    getTheme()
}
else if (program.geography){
    getQuestions(startQuiz, 22)
}
else if (program.music){
    getQuestions(startQuiz, 12)
}
else if (program.book){
    getQuestions(startQuiz, 10)
}
else if (program.films){
    getQuestions(startQuiz, 11)
}
else if (program.videoGame){
    getQuestions(startQuiz, 15)
}
else if (program.history){
    getQuestions(startQuiz, 23)
}
else if (program.sport){
    getQuestions(startQuiz, 21)
}
else if (program.options){
    getOptions()
}
else{
    console.log("Commande not found")
}