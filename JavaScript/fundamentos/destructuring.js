// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longradouro: ' Rua ABC',
        numero: 1000
    }
}

const {  nome, idade} = pessoa //tire dentro do objeto (pessoa) o atributo nome e idade, de que objeto? pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

// const { sobrenome, bemHumorada}  //aqui ele vai retornar undefined, pq não está sendo declarada

const { sobrenome, bemHumorada = true}
console.log(sobrenome, bemHumorada) // aqui o sobrenome dar undefined pq não foi declarado, mas o bemHumorada vai sair true

const { endereco: { longradouro, numero, cep}} = pessoa
console.log(longradouro,numero, cep) //o cep vai sair como undefined pq não foi declarado

const { conta: { ag, num}} = pessoa
console.log(ag, num) //vai dar erro sendo undefined ou null