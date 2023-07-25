let n1 = 4;
let n2 = 7;
let p = Promise.resolve(n1 + n2);
console.log(p);

console.log(". . .Other Codes . . .");

p.then((value) => {console.log(`The value is ${value}`)});

p.then((value) => {return (value + 8)})
.then((value) => {console.log(`Promise now has the value of ${value}`)});


console.log("______Fail Promises _______");
