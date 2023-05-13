// Chapter 5 practice set
// practice problem 1
let arr = [1, 2, 3, 4, 5, 6, 7];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// practice problem 2
let num = 1;
while (num != '0') {
    num = Number.parseInt(prompt("Enter a number"));
    arr.push(num);
}
console.log(arr);

// Practice problem 3
let arr2 = [1, 2, 4, 19, 10, 20, 30];
arr2.forEach(element => {
    if (element % 10 == 0) {
        console.log(element);
    }
});

// practice problem 4
let arr3;
arr2.forEach(element => {
    arr3.push(1);
});

// Practice problem 5
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr4.reduce((a, b) => {
    return a * b;
})
console.log(n);