console.log('01)', '1' == 1) //o resultado vai ser true pq ele está comparando o valor
console.log('02)', '1' === 1) //o resultado será false, pq ele irá comparar o === do 1 string e do 1 number. Aqui ele compara o tipo
console.log('03)', '3' != 3) // aqui vai dar falso, pq eles são iguais. Ele não está comparando o tipo e sim o numero.
console.log('04)', '3' !== 3) // true

console.log('05)', 3 < 2) //false
console.log('06)', 3 > 2) //true
console.log('07)', 3 <= 2) //false
console.log('08)', 3 >= 2) //true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //false
console.log('10)', d1 == d2) //false
console.log('11)', d1.getTime() == d2.getTime()) //true ---> nesse caso ele vai compara o numero
console.log('11)', d1.getTime() === d2.getTime()) //true ---> nesse caso ele vai compara o numero
console.log('12)', undefined == null) //true
console.log('13)', undefined === null) //false ---> aqui ele vai comparar se ele(undefined) é extremamente igual a null