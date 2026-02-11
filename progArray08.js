function somarValores(valores){
    let soma = 0

    for(let i = 0; i < 5; i++){
        soma += valores[i]
    }
        return soma
}

function principal(){
    let listaNum = [1, 2, 3, 4, 5]
    let resultado = 0

    resultado = somarValores(listaNum)

    console.log(`A soma dos valores do array é: ${resultado}`)
}
principal()
