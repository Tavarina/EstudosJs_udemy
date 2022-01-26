// pessoa -> 123 -> {...}
const pessoa = { nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} //isso vai gerar um erro
//não pode atribuir mais de uma vez

Object.freeze(pessoa) //isso congela o objeto.

pessoa.nome = 'Maria' //por causa do freeze ele fica congelado e não pode adicionar, mudar ou excluir nenhum deles
pessoa.end = 'Rua Abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: 'João'})

pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)