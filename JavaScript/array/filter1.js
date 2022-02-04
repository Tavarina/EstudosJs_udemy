const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]
console.log(produtos.filter(function(p){
    return false 
    // return p.preco > 2200 //aqui vai filtrar todos os valores acima desse colocado
}))
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

//aqui vc cria a variavel como no exemplo: caro, para filtrar os produtos que são caros da lista. Usando assim um nome do elemento que no caso é produto e junto com ele de onde vc irá tirar essa filtragem que no caso é o preco*( que faz parte da lista de produtos) ele vai filtrar quando vc colocar no console.log(produtos.filter(caro)). No caso o nome do que vc quer filtrar (a variavel/ constante que vc criou).