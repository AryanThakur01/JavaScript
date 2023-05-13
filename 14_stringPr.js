// Chapter 4 - Practice set (study startsWith, endsWith and includes)
let str = "Har\""
console.log("har \"".length)


// Chapter 4 - Practice set
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// Chapter 5 - Practice set
String
let str2 = "HELLO WORLD I AM YOUR ASSISTANT";
console.log(str2.toLowerCase());


// Chapter 6 - Practice set
let str3 = "Please give Rs 1000";
let amount = Number.parseInt(str3.slice(15));
console.log(amount)

let friend = "Deepika";
// friend[1] = "R"      This will do nothing cuz string is immutable in JavaScript
console.log(friend)
