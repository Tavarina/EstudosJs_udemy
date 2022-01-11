var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)

// nesse caso, quando usamos o Let ele traz o resultado apenas do escopo dele, não sbstitui e nem pega o valor do var.
//O let não pega o valor de outro escopo mesmo se ele for outro let / ele só pega um valor de outro escopo se caso ele não encontrar dentro do escopo dele
