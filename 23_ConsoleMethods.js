console.log(console);
console.error("Hey this is an error");
console.assert(55 > 53);
console.assert(444 < 4);    //This will print an error message
// console.clear();


obj = { a: 1, b: 2, c: 3 };
console.table(obj);
console.warn("Hey please don't bring soda");
console.info("Hey this is an important info");
console.table(console);

console.time("forLoop");
for (let i = 0; i < 5; i++) {
    console.log(233);
}
console.timeEnd("forLoop");