/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/



function converterIdadeEmAnosParaDias(idadeEmAnos = 25) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
} //verificar
console.log (converterIdadeEmAnosParaDias())

function converterIdadeEmAnosParaDias(idadeEmAnos = 70) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
} 
console.log (converterIdadeEmAnosParaDias())


/* Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550


Resolução:
function converterIdadeEmAnosParaDias(idadeEmAnos) {
const diasDoAno = 365
return diasDoAno * idadeEmAnos
}*/