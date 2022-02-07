//concat - a ideia é que você consiga concatenar vários arrays em um único array ou vários elementos que pode passar como parâmetro para o método concat ou vários arrays.

const filhas = ['Valeskah', 'Cibalena']
const filhos = [ 'Voxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))