function MeuObejto() {}
console.log(MeuObejto.prototype)

const obj1 = new MeuObejto
const obj2 = new MeuObejto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObejto.prototype === obj1.__proto__)

MeuObejto.prototype.nome = 'Anônimo'
MeuObejto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome ='Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObejto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo 

console.log(new MeuObejto).__proto__ === MeuObejto.prototype
console.log(MeuObejto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__ === null)