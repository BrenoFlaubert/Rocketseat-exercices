/*
### Sistema de gastos familiares

crie um objeto que possuirá 2 propriedades, ambas do tipo array
* receitas: []
* despesas: []

agora crie uma função que ira calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia está com o saldo
positivo ou negativo, seguindo do valor do saldo.
*/

const family = {
    receitas: [2500, 4000, 500],
    despesas: [2000, 1000, 500]
}
// somar valores no array
function sum(array){
    let total = 0;
    for(let value in array){
        total += value
    }
    return total
}
// calcular e mostrar situação da familia
function calculator(object){
    let calculatorDespesas = sum(object.despesas)
    let calculatorReceitas = sum(object.receitas)
    let total;
    total = calculatorReceitas - calculatorDespesas;
    if(total >= 0){
        console.log('Saldo Positivo: R$ ', total.toFixed(2))
    } else {
        console.log('Saldo Negativo: R$ ', total.toFixed(2))
    }
}
calculator(family)
