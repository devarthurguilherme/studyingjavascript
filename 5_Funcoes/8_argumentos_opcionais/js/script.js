function soma(a, b) {

    if(a === undefined || b === undefined) {
        console.log(`Esta função precisa ter os dois argumentos!`);
    } else {
        return a + b
    }
};

soma(2);
soma(3);
soma(2, 3)