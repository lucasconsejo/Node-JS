// Module nécessaire
const colors = require('colors/safe')

class Option {
    
    getOptions(){
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
}

module.exports = Option