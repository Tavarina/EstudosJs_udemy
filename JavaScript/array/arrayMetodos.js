const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! (o pop remove o último elemento do array)
console.log(pilotos)

pilotos.push('Verstappen') //o push adiona um elemento no fim da lista
console.log(pilotos)

pilotos.shift() // o shift remove, mas da primeira(elemento) posição da lista. 
console.log(pilotos)

pilotos.unshift('Hamilton')//Unshift ---> esse adiciona o elemento na primeira posição de uma lista
console.log(pilotos)

//splice pode adicionar e remover elementos 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //no caso adiciona dois elementos, não remove nenhum
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa quebrou :(
    console.log(pilotos) //no caso o massa é removido da lista novamente

    const algunsPilotos1 = pilotos.slice(2) //novo array
    console.log(algunsPilotos1)

    const algunsPilotos2 = pilotos.slice(1, 4) //Slice pega uma parte de array
    console.log(algunsPilotos2)