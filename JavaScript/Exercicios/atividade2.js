/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/

const idadeEmAnos = 25

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}

/* Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550


Resolução:
function converterIdadeEmAnosParaDias(idadeEmAnos) {
const diasDoAno = 365
return diasDoAno * idadeEmAnos
}*/