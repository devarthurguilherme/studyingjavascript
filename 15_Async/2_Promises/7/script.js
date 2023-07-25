function* creatorID() {
    let id = 0;
    while(true) {
        yield id++;
    };
};

let creatingID = creatorID();

console.log(creatingID.next().value);
console.log(creatingID.next().value);
console.log(creatingID.next().value);
console.log(creatingID.next().value);
console.log(creatingID.next().value);
console.log(creatingID.next());