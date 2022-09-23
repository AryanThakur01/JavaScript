// Programme to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for(let i = 1; i<n+1; i++){
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is " + sum);