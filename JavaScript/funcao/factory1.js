// const prod1 = {
//     nome: '...',
//     preco: 45
// }
// const prod2 = {
//     nome: '...',
//     preco: 56454
// }


//Uma forma simples de fazer a mesma coisa 

//Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())