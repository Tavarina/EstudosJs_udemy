// Closure é o escopo criado quando uma função é declarado
// Escopo permite a função acessar e manipular váriaveis externas à funções

//Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)