console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome //vai receber esse atributo nome por paramentro e vc vai atribuir o this.nome e esse 'nome' ficara visivel pra quem criar/ / ele se torna público
    this.exec = function() {  //A partir do this. vc pode criar atributos e funções.
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

