// Array Methods
let num = [1, 2, 3, 4, 5, 6];

// To convert an array to a string
console.log("[", num.toString(), "]", typeof (num.toString()));

// Join in javaScript
console.log(num.join("_|_"), typeof (num.join("_|_")));

// pop in javaScript: pop returns the pop element
console.log(num.pop())

// push in javaScript: push returns the new array length
let r = num.push(56);
console.log(num, r);

// shift in javaScript: Removes an element from the start of the array
let s = num.shift();
console.log(s, num);

// unshift in javaScript: 
let t = num.unshift(78);
console.log(t, num)