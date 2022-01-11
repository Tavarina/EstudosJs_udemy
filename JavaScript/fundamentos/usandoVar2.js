var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// O resultado vai ser 2, pois o segundo escopo vai substituir o 1
//Conselho: fuja do escopo global

