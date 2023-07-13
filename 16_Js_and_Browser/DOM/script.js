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
let link = document.querySelector("#link");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://arthurguilherme.com/");
console.log(link.getAttribute("href"));

console.log("___Setting Height and Width of the Elements with DOM____");
let container3 = document.querySelector(".container3");
let btnSetContainer= document.querySelector("#btnSetContainer");

console.log(container3.offsetWidth);
console.log(container3.offsetHeight);
console.log(container3.clientWidth);
console.log(container3.clientHeight);


console.log("___Positions of the Elements____");
console.log(container3.getBoundingClientRect());

console.log("___Setting CSS with Javascript____");
btnSetContainer.addEventListener("click", () => {
    container3.style.backgroundColor = "red";
    container3.style.transition = ".8s";
    container3.style.width = "200px";
    container3.style.height = "200px";
});

console.log("___Query Selectos All____");
let greenItems = document.querySelectorAll(".green-items");
console.log(greenItems);
greenItems[2].style.backgroundColor = "orange";
greenItems[3].style.backgroundColor = "pink";
greenItems[3].style.fontSize = "20px";
