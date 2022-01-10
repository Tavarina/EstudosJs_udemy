const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Ele pega o valor da média e "minimiza"
console.log(media.toString()) //Pega o valor da média original
console.log(media.toString(2)) //Transforma em valor binário
console.log(typeof media)
console.log(typeof Number ) //Number "n" maiúsculo é uma função e number com "n" minúsculo é tipo do dado