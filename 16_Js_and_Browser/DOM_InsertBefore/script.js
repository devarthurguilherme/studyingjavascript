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