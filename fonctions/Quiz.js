// Module nécessaire
const inquirer = require('inquirer')
const colors = require('colors/safe')
const say = require('say')

let questions = []
let response = []
let score = 0


// Fonction qui prépare les questions pour les utiliser dans le "Inquirer" après
function  generateQuestions(listQuestions){
    for(let i = 0; i < listQuestions.length; i++){
        let nbQuestions = i + 1

        // Stocke les réponses
        response[i] = listQuestions[i].correct_answer
        
        if(i == 0){
            say.speak(`Question numero ${nbQuestions} : ${listQuestions[i].question}`, 'Microsoft Hortense Desktop')
        }

        // Stocke les questions
        questions[i] =  {
            type: 'checkbox',
            message: `Questions n°${nbQuestions} : ${listQuestions[i].question}\n`,
            name: `response${nbQuestions}`,
            choices: ['Vrai', 'Faux'],
            validate: function (input) {
                var done = this.async();
                setTimeout(function() {
                    if(i != 9){
                        say.speak(`Question numero ${nbQuestions+1} : ${listQuestions[i+1].question}`, 'Microsoft Hortense Desktop')
                    }
                done(null, true);
                }, 0);
            }
        }        
    }
}


// Fonction saisie de l'utilisateur & vérification si la réponse est juste ou non
function answerUser(){
    inquirer.prompt(questions)
        .then((answer) =>{
            console.log(colors.cyan('\nVoici les résultats : '))

            for(let i = 0; i < 10; i++){
                let nbQuestions = i + 1
                
                if(answer[`response${nbQuestions}`][0] == response[i]){
                    score++
                    console.log('Reponse n°'+nbQuestions+' : '+colors.green('Correcte ! La réponse était : '+response[i]))
                }
                else{
                    console.log('Reponse n°'+nbQuestions+' : '+colors.red('Incorrecte. La réponse était : '+response[i]))
                }
            }
            console.log(colors.cyan('Votre score : ')+colors.yellow(score+'/10'))    
            console.log(colors.cyan('A bientôt !\n'))
            process.exit(0);
        })
} 


//Fonction Quiz
module.exports.start= (listQuestions) => {
    console.log(colors.cyan('Bienvenue dans le quiz de '+listQuestions[0].category+' !'))
    console.log(colors.cyan('Vous allez devoir répondre à 10 questions Vrai ou Faux.'))
    console.log(colors.cyan('Êtes-vous prêt ? C\'est parti !\n'))

    generateQuestions(listQuestions)
    answerUser()
}