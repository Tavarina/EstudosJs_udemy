function Pessoa() {
    this.idade = 0

//O setInterval dispara uma outra função, a partir de um determinado intervalo que você passou.

    setInterval(function() {  
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //o intervalo é passado em milesegundos
}  //o botão ctrl +n para incializar e o mesmo comando para parar

// const self = this
// setInterval(function() {  
//     self.idade++
//     console.log(self.idade)
// }, 1000)

new Pessoa