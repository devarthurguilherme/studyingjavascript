let arr1 = ["a", "b", "c", "d", "e", "f"];
let arr2 = ["w", "k", "y", "z"];

function veryfyElements(arr) {
    if(arr.length < 5) {
        console.log("It has less of 5 elements!");
    } else {
        console.log("It has more of 5 elements!")
    }
};

veryfyElements(arr1);
veryfyElements(arr2);