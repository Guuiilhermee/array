function somarImpar(valores){
    let soma = 0
    for(let i = 0; i < 9; i++){
        if(valores[i] % 2 === 1){
            soma += valores[i]
        }
    }
    return soma
}

// programa para somar números ímpares em um array
function principal(){
    let listaNum = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let resultado = 0

    resultado = somarImpar(listaNum)

    console.log(`A soma dos valores ímpares do array é: ${resultado}`)
}
principal()
