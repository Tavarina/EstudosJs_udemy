let dobro = function(a) {
 return 2 = a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return inplícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () =>' Olá' //forma padrão
ola = _ =>' Olá' //Possui um param
console.log(ola())


//arrow é uma função anônima / para chamar ela depois é preciso armazenar em uma variavel ou constante