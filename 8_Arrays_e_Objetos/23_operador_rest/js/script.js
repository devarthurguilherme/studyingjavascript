let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function testRest(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

testRest(num1, num2, num3, num4);
console.log("pause")
testRest(2, 4);
console.log("pause")
testRest(8, 10, 3, num4);