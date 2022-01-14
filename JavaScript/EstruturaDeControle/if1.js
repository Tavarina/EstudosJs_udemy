function soBoaNoticia(nota) {
    if (nota >= 7) {
      console.log('Aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

//Criada a função, colocamos dentro da função o if(se) e bloco associado a ele. Nesse caso: se a nota for maior que 7, aparecerá no terminal a mensagem: Aprovado com e o valor da nota

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() 
seForVerdadeEuFalo(null) 
seForVerdadeEuFalo(undefined) 
seForVerdadeEuFalo(NaN) 
seForVerdadeEuFalo('') 
seForVerdadeEuFalo(0) 
seForVerdadeEuFalo(-1) 
seForVerdadeEuFalo(' ') 
seForVerdadeEuFalo('?') 
seForVerdadeEuFalo([]) 
seForVerdadeEuFalo([1, 2]) 
seForVerdadeEuFalo({}) 
