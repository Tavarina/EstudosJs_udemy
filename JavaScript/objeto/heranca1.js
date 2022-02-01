const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.__proto__)
//__ significa que vc pode acessar quem é o protótipo do objeto
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null
console.log(Object.prototype.__proto__ === null) //true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)