const sentence = "O rato roeu a roupa do rei de roma.";

const arrSentence = sentence.split(" ");

let counter = 0;

console.log(sentence);
console.log(arrSentence);


for(let i = 0; i < arrSentence.length; i++) {
    console.log(arrSentence[i]);
    counter++;
}

console.log(`This word has ${counter} words!`);