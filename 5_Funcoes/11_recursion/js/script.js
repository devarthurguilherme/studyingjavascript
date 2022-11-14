function recursion(n) {

    if( n - 1 < 2) {
        console.log("Recursão não necessária " + n);
    } else if(n % 2 != 0) {
        console.log("Número impar " + n);
            recursion(n - 1);
    } else {
        console.log("Número par " + n)
        recursion(n - 2);
    }

}

recursion(3)