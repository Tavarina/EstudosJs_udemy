class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

//aqui o pai vai extender do avo então se o avô tem sobrenome o pai também tem. e vice e versa. Uma forma de usar herança no Js

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)