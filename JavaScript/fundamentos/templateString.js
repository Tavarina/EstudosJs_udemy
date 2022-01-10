const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template) //Ele faz com que a apareça a frase 'Olá Rebeca!' Ele substitui o ${nome} pelo nome da váriavel


//Expressões...

console.log(`1+1 = ${1+1}`) //Aqui mostra que ele só vai dar o resultado de 1+1 que é 2 com a interpolção

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //o resultado vai ser: Ei... CUIDADO! A palavra cuidado vem com letra maíuscula

