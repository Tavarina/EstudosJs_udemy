/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/


function repetir(item, quant) {
    return Array(quant).fill(item)  //fill() O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

}
console.log(repetir("código", 2))
console.log(repetir(7, 3))

/*Resolução 1
function repetir(item, quantidade) {
let resultado = []
for (let i = 0; i < quantidade; i++)
resultado.push(item)
return resultado
}
Resolução 2
function repetir(item, quantidade) {
return Array(quantidade).fill(item)
}
*/