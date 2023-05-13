// let var const
// Before ES6 var was used
// Today var is not used because it might throw an error
// const -> describing constant
// let -> block scoped variables


console.log("JavaScript tutorial 3: var, let and const");
// var a = 45; 
// var a = "p";
const author = "Harry";
// let author = 5           // this will throw an error because constant cannot be changed
// const harry;         // throw an error
let b = "harry";
let c = null;
let d = undefined;
{
    let b = 'this';
    console.log(b);
}



// var was used before ES6 was used and var is globally scoped
// var can be redefined but not let so let is better
// var variables are initialized with undefind whereas let and const variable are not initialized
// const must be initailized during declaration unlike let and var