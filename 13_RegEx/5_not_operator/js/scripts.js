const notab = /[^abAB]/; //Isolated Mode
console.log(notab.test("Arthur"))
console.log(notab.test("a"))
console.log(notab.test("b"))
console.log(notab.test("A"))
console.log(notab.test("B"))