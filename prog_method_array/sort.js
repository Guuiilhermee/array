let num = [2, 23, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]
console.log(num)
console.log('-----------------')

// metodo de ordenação sorte baseado no codigo unicode do número
console.log(num.sort())
console.log(num)
console.log('-----------------')

// usando função de callback por causa do código unicode do número
num = [2, 23, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]
console.log(num)
console.log('-----------------')
console.log(num.sort(ordenar))

function ordenar(a,b){
    return a-b
}
