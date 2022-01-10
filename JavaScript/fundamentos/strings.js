const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna a letra que está no número que é pedido
console.log(escola.charAt(6)) //Ele retorna vázio. Pois não encontra um caracter na palavra
console.log(escola.charCodeAt(3)) //Ele pega o valor na tabela Unicode que nesse caso será 51
console.log(escola.indexOf('3'))//ele retorna o resultado do índice associado ao digito 3
console.log(escola.substring(1))//ele retorna a palavra  da parte 1 em diante exemplo: od3r
console.log(escola.substring(0, 3))//ele retorna a palavra do zero até o 3 digito no caso é Cod
console.log('Escola'.concat(escola).concat("!"))// Ele retorna a palavra junto com a variavel (Cod3r) resultado: Escola Cod3r !
console.log('Escola' + (escola) + "!")
console.log(escola.replace(3, 'e'))//ele substitui a letra que está (nesse caso no 3)pela letra e.
console.log(escola.replace(/\d/, 'e')) //  /\d/ expressão regular - ele substitui todos os digots
console.log(escola.replace(/\w/g, 'e')) //  /\w/g expressão regular - ele substitui todas as letras e digitos pela letra é 
console.log('Ana,Maria,Pedro'.split(',')) //Ele vai separar os elementos utilizando nesse caso a vírgula