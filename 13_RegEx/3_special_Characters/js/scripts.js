const reg = /./; //anyone character
let nome = "Arthur Guilherme de Souza Silva";
let nothing = "";

console.log(reg.test(nome));
console.log(reg.test(nothing));


const reg1 = /\d/; // [0-9]; //anyone number
let numbers = "1234561000";

console.log(reg1.test(numbers));
console.log(!reg1.test(numbers));

const reg2 = /\D/;
console.log(reg2.test("123")); //anyone !number
console.log(reg2.test("123a"));

const reg3 = /\s/ //anyone white space, break line and tabs;
console.log(reg3.test(""));
console.log(reg3.test(" "));

const reg4 = /\w/
console.log(reg4.test("..."))
console.log(reg4.test("arthur"))
console.log(reg4.test(""))