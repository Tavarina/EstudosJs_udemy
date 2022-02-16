//Esse metodo transforma uma lista de ñomes em uma lista de saudações

module.exports = function(...nomes) {
return nomes.map(nome => `Boa semana ${nome}!`)
}