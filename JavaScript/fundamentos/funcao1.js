//Função é como se fosse a execução de uma receita de bolos. Ela é um bloco de código nomeado. Ela recebe paramentro de código. 

//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
} //colocou o nome das variaveis

imprimirSoma(2, 3)
imprimirSoma(2) //vai dar NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //vai calcular os dois primeiros numeros, pq é o a e o b
imprimirSoma() //Vai dar NaN

//função com retorno

function soma (a, b = 1) {
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //NaN
