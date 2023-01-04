const oneOrMoreNumbers = /\d+/;

console.log(oneOrMoreNumbers.test(""))// nothing -> false
console.log(oneOrMoreNumbers.test("123"))
console.log(oneOrMoreNumbers.test("abc")) // letters -> false
console.log(oneOrMoreNumbers.test("123456789"))