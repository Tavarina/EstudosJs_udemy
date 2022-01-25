//Desafio

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.481))
console.log(criarProduto('Ipad', 10199.481))
console.log(criarProduto('MacBook', 20199.48))