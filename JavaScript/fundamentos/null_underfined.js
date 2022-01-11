let valor // não inicializada
console.log(valor) // undefined 


valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) //vai dar erro 

const produto = {}
console.log(produto.preco) //vai dar undefined pq não tem um valor
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuit undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)