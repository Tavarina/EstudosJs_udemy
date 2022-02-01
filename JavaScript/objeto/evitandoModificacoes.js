// Object.preventExtensions --> Ele previni/não vai permitir que seu objeto seja extendido ou seja você não vai conseguir aumentar o número de atributos.
//Obs: você pode até excluir atributos, mas não vai poder adicionar novos

const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal ---> quando vc sela um objeto vc não pode adicionar, excluir, mas vc pode modificar os valores dos atributos do objeto.
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva' //não irá modificar
delete pessoa.nome  //não irá excluir
pessoa.idade = 29 //alterou a idade
console.log(pessoa)


//Object.freeze = selado + valores constantes ---> não consegue excluir, modificar as chaves do objeto
//ele é completamente constante

