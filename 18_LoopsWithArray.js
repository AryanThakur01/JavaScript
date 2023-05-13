let num = [3, 54, 1, 2, 4];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }


// forEach loop of javaScript
// num.forEach((element) => {
//     console.log(element * element);
// })

/*
let a = document.getElementsByClassName("<nameOfClass>");
a.forEach() // a.forEach is not a function because a is not an array
Array.from(a);  // from is used to create an array from an object which can be made into an array
*/

// Array.from
let name = "Harry";
let arr  = Array.from(name);
console.log(arr);


//for.....of
for(let i of num){
    console.log(i);
}

for(let i in num){
    console.log(num[i]);
}