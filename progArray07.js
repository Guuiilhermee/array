function somarValores(valores){
    let i = 0, soma = 0
    do{
        soma += valores[i]
        i += 1
    }while(i < 5)
        return soma
}

function principal(){
    let listaNum = [1, 2, 3, 4, 5]
    let resultado = 0

    resultado = somarValores(listaNum)

    console.log(`A soma dos valores do array é: ${resultado}`)
}
principal()
