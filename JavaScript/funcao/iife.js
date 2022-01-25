//Função auto invocada - uma função que você declara ela(mesmo anônima/sem nome) e que na hora da declaração você já chama essa função, já invoca a execução dessa função.
//Uma das funções de uma função auto invocada / principalmente quando está utilizando o Browser e você quer fugir do escopo global/ quer realmente fugir de manipular// com  a função auto invocada faz com que não seja do escopo global

//IIFE -> Inmediately Invoked Function Expression (Imediatamente invocada)

(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abragente!')
})()