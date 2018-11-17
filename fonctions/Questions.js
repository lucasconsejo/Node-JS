// Modules nécessaires
const axios = require('axios')
const translate = require('translate')

// URL API
const URL_QUIZ = 'https://opentdb.com/api.php?amount=10&category='
const URL_DETAILS = "&difficulty=medium&type=boolean"

let listQuestions = {}


// Fonctions pour traduire les réponses en français
function translateAnswer(i){
    if(listQuestions[i].correct_answer == 'False'){
        listQuestions[i]['correct_answer']  = 'Faux'
    }
    else{
        listQuestions[i]['correct_answer']  = 'Vrai'
    }
}


// Fonctions pour traduire les questions en français
async function translateQuestions(i){
    listQuestions[i]['question'] = await translate(listQuestions[i].question, { to: 'fr', engine: 'yandex', key: 'trnsl.1.1.20181109T232454Z.24d26eeded149ec6.d57696e6f1b4dc0051db2370b6ea4a4f75c9c22f'})
}


// Fonctions qui utilise l'API pour récupérer les questions selon la catégorie choisie
module.exports.getQuestions = (callback, nb_category) =>{
    
    axios.get(URL_QUIZ+nb_category+URL_DETAILS)
        .then((response) =>{
            listQuestions = response.data['results']
                
            for(let i = 0; i < listQuestions.length; i++){
                translateAnswer(i)
                translateQuestions(i)
            }
            
            setTimeout(function(){
                callback(listQuestions)
            }, 900)
        })
        .catch((err)=>{
            console.log('Error', err)
        })
}