// this: uma forma de referenciar um objeto atual daquela execução
//this normalmente vc vai chamar ele na função.

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //se tirar o this. da erro


    }
}
pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e 00 //esse vai resultar undefined
const falarDePessoa = pessoa.falar.blind(pessoa)   //o bind é o método responsável por amarrar um determinado objeto, para ele ser o dono da execução daquele do método, sempre que aquele método for chamado.
//o this sempre será objeto que você passou para a função bind.
falarDePessoa()

