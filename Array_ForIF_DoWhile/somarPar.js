function somarPares(valores){
    let soma = 0
    for(let i = 0; i < 6; i++){
        if(valores[i] % 2 === 0){
            soma += valores[i]
        }
    }
    return soma
}

// programa para somar números pares em um array
function principal(){
    let listaNum = [11, 12, 13, 14, 15, 16, 17]
    let resultado = 0

    resultado = somarPares(listaNum)

    console.log(`A soma dos valores pares do array é: ${resultado}`)
}
principal()
