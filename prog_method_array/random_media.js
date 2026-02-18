// geração de números aleatórios entre min e max
// equação: Math.random() * (max - min) + min
// arredondar para cima Math.floor

// programa para gerar 5 números aleatórios, somar todos eles e fazer a média

function gerarNum(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function principal(){
    let num = [], min = 1, max = 10, val = 0, soma = 0, media = 0

    for(let i = 0; i < 5; i++){
        val = gerarNum(min,max)
        num.push(val)
    }
    console.log(num)
    console.log(num.length)
    console.log('----------')
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    console.log(` A soma dos valores do array é: ${soma}`)
    media = soma / num.length
    console.log(` A media dos valores do array é: ${media.toFixed(3)}`)
}
principal()