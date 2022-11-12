let x = 10;

if(x > 5) {
    let x = 20;
    x++;
    console.log(`Escopo do bloco IF ${x}`);
}

console.log(`Escopo Global X = ${x}`)