//Tratamento de erro (Try/Catch/Throw)

//try(tentar) é um bloco de código que dentro dele tem um código que você julga um possível erro na hora de gerar. Gerando o erro vc pode corrigir utilizando Catch. Dentro do catch vc pode tratar o erro
function tratarErroElancar(erro){
    // throw new Error('...')// eu posso usar o throw para mostrar uma mensagem de erro do catch. Essas são as diversas formas de mostrar o erro.
    // throw 10
    // throw true
    // throw true
     throw {
         nome: erro.name,
         msg: erro.message,
         date: new Date
     }
}
function imprimirNomeGritado(obj) {
    try {  
    console.log(obj.name.toUpperCase() + '!!!') 
} catch (e) {
    tratarErroElancar()
} finally { //finally é uma palavra reservada.  Sempre que ocorra erro ou não, ele vai chamar esse bloco.
    console.log('final')
}
}
const obj = { nome:'Felipe'}
imprimirNomeGritado(obj) 

//evitar mostrar essas mensagens para o usuário.