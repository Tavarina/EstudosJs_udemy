//usar o paranmetro  e varias altenativas diferentes para chamar a mesma função

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() = (max-min) + min
}



const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({})) //ele vai navegar entre numeros aleatórios
// console.log(rand()) //vai dar erro no terminal

