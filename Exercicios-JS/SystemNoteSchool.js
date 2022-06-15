/*
Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numerico
para sistema de notas em caracteres tipo ABC

* De 90 para cima - A
* Entre 80 - 89 - B
* Entre 70 - 79 - C
* Entre 60 - 69 - D
* menor do que 60 - F

*/

function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;
    if(scoreA){
        scoreFinal = 'A'
    } else if (scoreB){
        scoreFinal = 'B'
    } else if (scoreC){
        scoreFinal = 'C'
    } else if(scoreD){
        scoreFinal = 'D'
    } else if(scoreF){
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota invalida'
    }
    return scoreFinal
}
getScore()