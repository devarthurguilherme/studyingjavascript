const callBackTest = function(){
    console.log("3");
};

console.log("1");
console.log("2");

setTimeout(callBackTest, 3000);

console.log("4");
console.log("5");