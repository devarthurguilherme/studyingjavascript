const reg = /[123456789]/; // This mode doesn't is recomended! 
let text = "Here has the number 6";

const reg2 = /[1-9]/


console.log(reg.test(text))
console.log(reg2.test(text))