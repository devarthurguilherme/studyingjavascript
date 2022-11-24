let carro = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: "2.0"
}

/*let {rodas, portas, tetoSolar, motor} = carro;
console.log(rodas)*/

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: Vmotor} = carro;

console.log(vRodas);
console.log(vPortas);