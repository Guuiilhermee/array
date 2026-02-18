// geração de números aleatórios entre min e max
// equação: Math.random() * (max - min) + min
// arredondar para cima Math.floor

// programa para gerar 5 números aleatórios

function gerarNum(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function principal(){
    let num = [], min = 1, max = 10, val = 0

    for(let i = 0; i < 5; i++){
        val = gerarNum(min,max)
        num.push(val)
    }
    console.log(num)
}
principal()