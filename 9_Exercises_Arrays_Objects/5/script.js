let arr = ["Alex", "Arthur", "Pedro", "Nathan", "Reginaldo"];
let yes = 0;
let arr2 = ["Pedro", "Beto", "Edmundo", "Arthur"]

for(let i = 0; i < arr.length; i++) {
    if(arr2.includes(arr[i])) {
        console.log(`Here is ${arr[i]}`);
        yes++;
    }
}

console.log(yes);