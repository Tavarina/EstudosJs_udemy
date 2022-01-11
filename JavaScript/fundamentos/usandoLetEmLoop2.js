const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]() //nesse caso ele vai imprimir os valores reais, 2, 6 e 8. Ele vai respeitar o escopo de bloco do let (como se o let tivesse memoria)