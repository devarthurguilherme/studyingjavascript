let p = Promise.resolve(new Error("Doesn't Work!"));
console.log("...");

p.then((value) => {console.log(value)}).catch(reason => console.log(`Fail: ${reason}`));
