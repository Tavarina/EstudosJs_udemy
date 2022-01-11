const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //o resultado tando no 2 e no 8 vai aparecer um resultado 10/ ele não vai respeitar o escopo do var nesse caso