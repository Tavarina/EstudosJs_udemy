const [a]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) //o resultado será n1= 10, n3= 9, n5= undefined e n6= 0

const [, [, nota]] = [[, 8, 8], [9,6,8]]//primeiro elemento eu ignoro (array), entro no array, ignoro o primeiro elemento desse segundo array e aceito só o segun do elemento(nota) do array

console.log(nota) // o resultado vai ser 6
