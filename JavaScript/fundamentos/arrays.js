const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3]) //vai pegar o primeiro valor e o último contando a partir do zero.
console.log(valores[4]) //ele retorna que não existe - undefined
valores[4] = 10 //ele adiciona um novo elemento no array
console.log(valores)
console.log(valores.length) //quantidades de elementos em um array usando o length

valores.push({id:3}, false, null, 'teste') //Acrescenta dentro da lista
console.log(valores)

console.log(valores.pop()) //ele pega o último valor do array 
delete valores [0]
console.log(valores)

console.log(typeof valores) // o arry é um objeto

