const reg = new RegExp("Art");
const reg2 = /Guilherme/;


let text = "Arthur";
let text2 = "Guilherme";

console.log(reg.test(text));
console.log(reg.test(text2));

console.log(reg2.test(text));
console.log(reg2.test(text2));

console.log("withou variable -> ",/joker/.test("joker"))