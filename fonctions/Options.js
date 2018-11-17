// Module nécessaire
const colors = require('colors/safe')


// Fonction qui liste les différentes options du programme
module.exports.getOptions = () =>{
    console.log(colors.yellow('quiz')+' '+colors.grey('-[option]')+' :')
    console.log(colors.grey('-t')+', --theme', '(Voir les thèmes)')
    console.log(colors.grey('-g')+', --geography', '(Quiz Géographie)')
    console.log(colors.grey('-m')+', --music', '(Quiz Musique')
    console.log(colors.grey('-j')+', --videoGame', '(Quiz Jeux Video)')
    console.log(colors.grey('-h')+', --history', '(Quiz Histoire)')
    console.log(colors.grey('-o')+', --option', '(Voir les options disponibles)\n') 
}