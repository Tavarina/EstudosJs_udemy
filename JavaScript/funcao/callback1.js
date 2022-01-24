const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
/* Callback = passar uma função para outra função e quando determinado evento acontecer, essa função que foi passada vai ser disparada vai ser chamada de volta.
* Essa função callback pode ser chamada várias vezes ou pode ser chamada uma única vez*/
fabricantes.forEach(imprimir)
//forEach é uma função 
// fabricantes.forEach(function(a){
//     console.log(a)
// })
fabricantes.forEach(fabricantes =>
    console.log(fabricantes)
)