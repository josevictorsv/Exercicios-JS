//Funçao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //soma os primeiros e ignora o resto

//funçao com retorno
function soma(a , b = 1){ //b é 1 padrao caso nao seja atribuido
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))