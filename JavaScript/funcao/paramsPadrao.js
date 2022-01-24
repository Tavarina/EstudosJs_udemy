// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3),  soma1(0, 0, 0)) /* Soma1() = 3 / soma1(3) = 5 **a letra a começa a valer 3 e o restante 1, por isso o resultado é 5. / soma(1, 2, 3)= 6 / soma1(0, 0, 0) = 3 **o zero valer 1 novamente
resultado: 3 5 6 3*/


// estrategia 2, 3 e 4 para gerar valor padrão

function som2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3),  soma2(0, 0, 0))
/*resultado: 
             3 5 6 0
*/

//Valor padrão do es2015

//obs: essa é forma mais resumida e melhor de ser feita

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3),  soma3(0, 0, 0))
/*resultado: 
             3 5 6 0
*/