let carro = {
    portas: 2,
    portaMalas: "200L",
    motor: 2.0
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true
}


Object.assign(carro, adicionais);
console.log(carro)
