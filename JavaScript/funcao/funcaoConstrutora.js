function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado 
    let velocidadeAtual = 0 

    //metodo público
    this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    } else {
        velocidadeAtual = velocidadeMaxima
      }
    }
    //método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
} 