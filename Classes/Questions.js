// Modules nécessaires
const axios = require('axios')
const translate = require('translate')

// URL API
const URL_QUIZ = 'https://opentdb.com/api.php?amount=10&category='
const URL_TYPE = "&difficulty=medium&type=boolean"

let questionEn = {}
let questionFr = []

class Questions {
    constructor(){
        this.questionEn = {}
        this.questionFr = []

    }
    /*
    async traduction(i){
        this.questionFr[i] = await translate(this.questionEn[i].question, { to: 'fr', engine: 'yandex', key: 'trnsl.1.1.20181109T232454Z.24d26eeded149ec6.d57696e6f1b4dc0051db2370b6ea4a4f75c9c22f'})
        this.questionEn[i]['question'] = this.questionFr[i]
    }*/

    getQuestions(callback, nb_category){
        axios.get(URL_QUIZ+nb_category+URL_TYPE)
            .then((response) =>{
                questionEn = response.data['results']
                for(let i = 0; i < questionEn.length; i++){
    
                    // Fonctions pour traduire les questions en français
                    const langue = (async() =>{
                        questionFr[i] = await translate(questionEn[i].question, { to: 'fr', engine: 'yandex', key: 'trnsl.1.1.20181109T232454Z.24d26eeded149ec6.d57696e6f1b4dc0051db2370b6ea4a4f75c9c22f'})
                        questionEn[i]['question'] = questionFr[i] 
                    })()
                }
                setTimeout(function(){
                    callback(questionEn[0].category, questionEn)
                }, 900)
            })
            .catch((err)=>{
                console.log('Error', err)
            })
    }
}

module.exports = Questions