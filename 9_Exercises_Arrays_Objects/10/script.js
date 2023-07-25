let calculator = {
    plus(a, b) {
        return a + b;
    },
    less(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.plus(10, 4));
console.log(calculator.less(10, 4));
console.log(calculator.multiply(10, 4));
console.log(calculator.divide(10, 4));