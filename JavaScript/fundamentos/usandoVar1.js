{
    {
        {
            { 
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)
//escopo - é o local onde essa variavel é visivel. Até onde ela é visivel dentro do bloco
//A variavel var ela sempre ficará visivel mesmo fora do bloco

function teste(){
    var local = 123
    console.log(local())
}

teste()
console.log(local())