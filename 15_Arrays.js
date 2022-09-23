let marks_class_12 = [61, 82, 93, 95, null, false, 'Not Present'];
marks_class_12[7] = 100 // Adding a new value to the array

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);
console.log(marks_class_12[8]); //This will print undefined because index 7 does not exist
marks_class_12

console.log("The length of marks_class_12 is: ", marks_class_12.length)

marks_class_12[7] = 89;
marks_class_12[0] = 96;
console.log(marks_class_12);

// Arrays are mutable, arrays can be changed
// Strings are immutable, strings can be changed