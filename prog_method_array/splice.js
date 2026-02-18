let num = [5, 7, 3, 2, 8, 9, 1]
console.log(num)
console.log('-----------------')

// metodo splice mostrar o método com dois parâmetros
console.log(num.splice(2,3))
console.log(num)
console.log('-----------------')

// recomeçando para mostrar o método com três parâmetros
num = [5, 7, 3, 2, 8, 9, 1]
console.log(num)
console.log('-----------------')
console.log(num.splice(2,4,15,14))
console.log('-----------------')
console.log(num)
console.log('-----------------')

// splice com mês
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");

console.log(months);

months.splice(4, 1, "May");

console.log(months);