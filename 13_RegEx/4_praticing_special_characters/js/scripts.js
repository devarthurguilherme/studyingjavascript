const verifyDigitDay = /\d\d/;

console.log(verifyDigitDay.test("2023") && "2023".length == 2);
console.log(verifyDigitDay.test("arthur"));
console.log(verifyDigitDay.test("04") && "04".length == 2);

console.log("-------------------")
const wordThreeLetters = /\w\w\w/;

console.log(wordThreeLetters.test("Arthur") && "Arthur".length == 3);
console.log(wordThreeLetters.test("ABC") && "ABC".length == 3);