'use strict'

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

console.log(oneEuroIs)


const fromEuroToDollar = (valueInEuro)=>{
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromEuroToYen = (valueInEuro)=>{
    let valueInDollar = valueInEuro * 127.9;
    return valueInDollar;
}

const fromEuroToPound = (valueInEuro)=>{
    let valueInDollar = valueInEuro * 0.8;
    
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar ,fromEuroToYen,fromEuroToPound}
