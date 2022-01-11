//Hoisting significa insamento, jogar para cima.
//Isso é apenas um exemplo/não usar dessa forma

console.log('a =', a)
var a = 2
console.log('a =', a) //O resultado primeiro irá aparecer o a = undefined e depois ela vai fazer o insamento e trazer o resultado a = 2

console.log('b =', b)
let b = 2
console.log('b =', b) //vai aparecer erro pq o let não aceita esse insamento
