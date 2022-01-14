const imprimirResultado = function (nota) {
        switch (Math.floor(nota)) {
            case 10:  //caso se esse valor for 10, ele executa
            case 9:
                console.log('Quadro de Honra')
                break
                case 8:
                case 7:
                    console.log('Aprovado')
                break
                case 6:
                case 5:
                case 4:
                    console.log('Recuperação')
                break
                case 3:
                case 2:
                case 1:
                case 0:
             console.log('Reprovado')
                  break
                  default: console.log('Nota inválida')
        }
}

imprimirResultado(10) //se eu comentar todos os breaks, ele vai passar por todos trazendo todos os possíveis resultados no terminal
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//switch é uma seleção multipla, não é uma expressão relacional que retorna verdadeiro ou falso, vc pode passar os valores. 
//ultilizar o break para que ele olhe cada linha da função, ao contrário ele irá executar todas as linhas abaixo.

//o default pode ficar em qualquer posição, mas no caso dele ficar em uma posição no meio das funções, temos que colocar o break na hora de ser executado.
