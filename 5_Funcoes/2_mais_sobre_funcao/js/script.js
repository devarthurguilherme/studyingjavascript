/*const multiplicarTresNumeros = function(a, b, c) {
    return a * b * c;
}

const multi = multiplicarTresNumeros(2, 3, 4)

console.log(`O valor de multi é: ${multi}`);
*/

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log(`Com ${idade} anos e cnh, pode dirigir!`)
    } else {
        console.log(`Com ${idade} anos, não pode dirigir!`)
    }
}

podeDirigir(18, true);