//array é um objeto

console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0])  //Bia
console.log(aprovados[1])  //carlos
console.log(aprovados[2]) //ana
console.log(aprovados[3]) //undefined


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) //5 (quantidade de algoritimo)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //10 quantidade de elemento dentro da lista 
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //poara deletar
console.log(aprovados[1]) //undefined
console.log(aprovados[2]) //Bia

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento1') //Splice ---> serve para algumas coisas. Adiconar elemento em um array, remover um elemnto de array e serve para fazer as duas funções, tanto adicionar como remover ao mesmo tempo.
console.log(aprovados)