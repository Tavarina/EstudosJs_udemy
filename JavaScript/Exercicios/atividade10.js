/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais(quant) {
    return Array(quant).fill('+').join('') //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
    //fill() O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
}

console.log(simboloMais(2))
console.log(simboloMais(4))

/* Resolução 1
function simboloMais(quantidade) {
let resultado = ''
for(let i = 0; i < quantidade; i++)
resultado += '+'
return resultado
}
Resolução 2
function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
}
Resolução 3
function simboloMais(quantidade) {
return "+".repeat(quantidade)
}
*/