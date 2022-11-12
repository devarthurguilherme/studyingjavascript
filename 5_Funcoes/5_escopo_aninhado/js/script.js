let a = 10;

function multiplicar(x, y) {
    let a = x * y;

    if(a > 10) {
        let a = 0;
        a++;
        console.log(`Escopo do If dentro da função Multiplicar ${a}`);
    }

    console.log(`Escopo da função ${a}`)
}

multiplicar(4, 4)

console.log(`Escopo global -> a = ${a}`)