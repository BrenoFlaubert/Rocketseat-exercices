/* #### Celcius em Fahrenheit

    Crie uma função que receba uma string em celcius ou Fahrenheit
    e faça a trasnformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

let temperatura = '38°C'


function CelciusToFahrenheit(degree){
    const celciusExists = degree.toUpper().includes('°C')
    const FahrenheitExists = degree.toUpper().includes('F')

    if(!celciusExists && !FahrenheitExists){
        throw new Error("Valor incorreto")
    }

    let updatedDegree = Number(degree.toUpperCase().replace('F', ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let newSign = '°C'


    return formula(updatedDegree) + newSign
}

try{
    console.log(CelciusToFahrenheit())

} catch(error){
    console.log(error.message)
}
CelciusToFahrenheit()