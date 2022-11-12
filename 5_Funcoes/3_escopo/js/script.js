let y = 10;



function imprimir() {
    let y = 8;
    console.log(`Escopo Local = ${y}`)
}


imprimir()
console.log(`Escopo Global = ${y}`)