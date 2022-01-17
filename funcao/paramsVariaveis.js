function soma() {
    let soma = 0
    for ( i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(1)) //1
console.log(soma(1.1, 2.2, 3.3)) //6.6
console.log(soma(1.1, 2.2, "Teste")) //ele soma os numeros e depois concatena a palavra teste
console.log(soma('a', 'b', 'c')) //ele traz um resultado 0 e concatena as palavras