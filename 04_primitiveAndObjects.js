/*
PRIMITIVE IN JS
N: Null
N: Number
S: Symbol
S: String
B: Boolean
B: Bigint
U: Undefined
*/


let a = null;
let b = 354;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);




// NON PRIMITIVE DATATYPE - OBJECT IN JS
const item ={
    "Harry": true,
    "Shubh": false,
    "Lovish": false,
    "Rohan": undefined
}
console.log(item["Lovish"])

