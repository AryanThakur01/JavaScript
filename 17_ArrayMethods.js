// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [211, 212, 213, 214, 215, 216,217, 218, 219];
// console.log(num);
// console.log(num.length);
// delete num[0];
// console.log(num);
// console.log(num.length);

// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray);
// console.log(num);



/* Sort Methods*/
// let compare = (a, b) => {
//     // return a - b;   //for ascending order sorting
//     return b - a;       // for descending order sorting
// }
// let num = [1, 2, 113, 234, 25, 16, 227];
// num.sort(compare);             // Alphabetic sorting of numbers
// console.log(num);
// // num.reverse();




// Splice and Slice
let num = [441, 2, 234, 65, 33, 55, 304, 5];
// let deletedValues = num.splice(2, 3, 1021, 1022, 1023);
// console.log(num)
// console.log(deletedValues);     //This returns an array

let newNum = num.slice(3);  // do not modify the main string
console.log(newNum);