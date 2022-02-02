const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array,x) { // traz três parametro
    console.log(`${indice + 1} ${nome}`)/*nomeia com um indice ex:
    * 1) Agatha
    * 2) Aldo
    * 3) Daniel
    * 4) Raquel */
    
    console.log(array, x) //array traz a lista e o x traz o resultado undefined
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)