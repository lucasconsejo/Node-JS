// Module nécessaire
const axios = require('axios')

// URL API pour lister les catégories
const URL_THEME = 'https://opentdb.com/api_category.php'


// Fonction qui utilise l'API pour récupérer les thèmes de quiz
module.exports.getTheme = () => {
    axios.get(URL_THEME)
        .then((response) =>{
            theme = response.data
            console.log('Voici les différents thèmes : ')

            // Sélection des thèmes -> Je n'ai pas utilisé tous les thèmes proposés par l'API
            for(let i = 0; i < theme['trivia_categories'].length; i++){
                if(i == 3 || i == 6  || i == 13 || i == 14){
                    console.log("- "+theme['trivia_categories'][i].name)
                }
            }
        })
        .catch((err)=>{
            console.log('Error', err)
        })
}