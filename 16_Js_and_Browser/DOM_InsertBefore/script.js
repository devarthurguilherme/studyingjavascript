let newElement = document.createElement("p");
let newElement2 = document.createElement("h2");
let text2 = document.createTextNode("H2 here!")
let textExample = document.createTextNode("Texto Node Here!");
let lastElement = document.createElement("h3");
let text3 = document.createTextNode("H3 last here!");

let newSon = document.createElement("h1");
let textNewSon = document.createTextNode("New Son here!");
newSon.appendChild(textNewSon);


newElement.appendChild(textExample);
newElement2.appendChild(text2);
lastElement.appendChild(text3);

let reference = document.querySelector("h1");
let fatherElement = document.querySelector(".container");

fatherElement.insertBefore(newElement, reference);
fatherElement.insertBefore(newElement2, newElement);
fatherElement.appendChild(lastElement);
fatherElement.replaceChild(newSon, reference);

console.log("___Creating Nodes____");
let myName = document.createTextNode("Arthur Guilherme");
let p = document.querySelector("#pHere");
p.appendChild(myName);

console.log("___Creating Elements____");
let container2 = document.querySelector(".container2");
let btn = document.querySelector("#btn");
let list = document.createElement("ul");


container2.appendChild(list);
btn.addEventListener("click", () => {
    for(i = 0; i < 5; i++) {
        console.log(i);
        let itemList = document.createElement("li");
        let textList = document.createTextNode("Text List" + i);
        list.appendChild(itemList);
        itemList.appendChild(textList);
    };
});

console.log("___Setting and Getting Attributes____");