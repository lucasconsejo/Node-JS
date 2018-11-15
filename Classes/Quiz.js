const inquirer = require('inquirer')
const colors = require('colors/safe')
const say = require('say')

let questions = []
let reponse = []
let score = 0

class Quiz {
    constructor(){
        this.questions = []
        this.reponse = []
        this.score = 0
    }

    /*traductionReponse(questions_category){
        if(questionnaire[i].correct_answer == 'False'){
            reponse[i] = 'Faux'
        }
        else{
            reponse[i] = 'Vrai'
        }
    }*/

    startQuiz(category_name, questions_category){

        console.log(colors.cyan('Bienvenue dans le quiz de '+category_name+' !'))
        console.log(colors.cyan('Vous allez devoir répondre à 10 questions Vrai ou Faux.'))
        console.log(colors.cyan('Êtes-vous prêt ? C\'est parti !\n'))

        // Genere les questions
        for(let i = 0; i < questions_category.length; i++){
            let nb_question = i + 1
            
            if(i == 0){
                say.speak(`Question numero ${nb_question} : ${questions_category[i].question}`, 'Microsoft Hortense Desktop')
            }
    
            questions[i] =  {
                type: 'checkbox',
                message: `Questions n°${nb_question} : ${questions_category[i].question}\n`,
                name: `reponse${nb_question}`,
                choices: ['Vrai', 'Faux'],
                validate: function (input) {
                    var done = this.async();
                    setTimeout(function() {
                        if(i != 9){
                            say.speak(`Question numero ${nb_question+1} : ${questions_category[i+1].question}`, 'Microsoft Hortense Desktop')
                        }
                      done(null, true);
                    }, 0);
                  }
            }

            if(questions_category[i].correct_answer == 'False'){
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
                    console.log('Reponse n°'+nb_question+' : '+colors.green('Correcte ! La réponse était : '+reponse[i]))
                }
                else{
                    console.log('Reponse n°'+nb_question+' : '+colors.red('Incorrecte. La réponse était : '+reponse[i]))
                }
            }
            console.log(colors.cyan('Votre score : ')+colors.yellow(score+'/10'))    
            console.log(colors.cyan('A bientôt !\n'))
            process.exit(0);
        })
    }
}

module.exports = Quiz