let correct = Math.floor(Math.random() * 100 + 1);
let chances = 0, num = 0;
while (num != correct) {
    chances++;
    num = prompt("Enter your number");
    num = Number.parseInt(num);
    console.log((correct > num) ? "The entered number is smaller " : "The entered number is greater");
}
console.log("Congrats you did it \nYour score is :", chances);