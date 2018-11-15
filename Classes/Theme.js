// Module nécessaire
const axios = require('axios')

// URL API pour lister les catégories
const URL_THEME = 'https://opentdb.com/api_category.php'

class Theme{
    constructor(){
        this.theme = {}
    }

    getTheme(){
        axios.get(URL_THEME)
            .then((response) =>{
                this.theme = response.data
                console.log('Voici les différentes thèmes : ')
    
                // Selection des thèmes --> Je n'ai pas utilisé tout les thèmes proposés par l'API 
                for(let i = 0; i < this.theme['trivia_categories'].length; i++){
                    if(i == 1 || i == 2 || i == 3 || i == 6 || i == 12 || i == 13 || i == 14){
                        console.log("- "+this.theme['trivia_categories'][i].name)
                    }
                }
            })
            .catch((err)=>{
                console.log('L\'API bug ! Yess !', err)
            })
    }
}

module.exports = Theme