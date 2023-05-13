// let a = prompt("Hey, What's your age?");     //Whatever is entered in this prompt box it is read as the string

// alert("Hey");

let a = prompt("Hey what's your age?");
a = Number.parseInt(a);      // Converting a string to a number


// IF ELSE STATEMETNS
/*
if(a>0){
    alert("This is a valid age");
}
else{
    alert("This is an invalid age");
}
*/

// IF ELSE LADDER
if(a<9){
    alert("You are a kid and you cannot even think of driving");
}
else if(a>9 && a>18){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You are an adult so you are allowed drive");
}
console.log("Done");



switch (a) {
    case 1:
        console.log("The value of a is", a);
        break;

    default:
        break;
}

// TERNARY OPERATOR
console.log("You can ", (a<18 ? "Not Drive" : "Drive"))

