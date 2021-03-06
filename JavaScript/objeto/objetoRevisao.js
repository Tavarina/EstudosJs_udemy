// objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
        nome: ' Raul',
        idade: 56,
        endereco: {
            longadouro:'Rua Abc',
            numero: 123
        }
    },
    condutores: [{
    nome: ' Junior',
    idade: 19
    }, {
        nome: ' Liu',
        idade: 45
    }],
    calcularValorSeguro: function() {
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['longadouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //foi deletado, porém o resultado será underfined
console.log(carro.condutores.length)