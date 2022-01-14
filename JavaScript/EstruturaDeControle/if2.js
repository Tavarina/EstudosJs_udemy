function teste1(num) {
    if(num > 7) 
    console.log(num)
    console.log('Final')
}


teste1(6)
teste1(8)


//Forma incorreta
function teste2(num) {
    if(num > 7); {  //cuidado com o ';', não usar com as estruturas de controle. Pois ele não vai validar da  forma correta a sua função
        console.log(num)
    }
}

teste2(6)
teste2(8)  //nesse caso vai aparecer os dois 