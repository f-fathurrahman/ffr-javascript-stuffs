// while loop
console.log("");
console.log("Example 1");
console.log("");
var number = 0;
while (number <= 10) {
    console.log("number = " + number);
    number = number + 2;
}
console.log("");
console.log("Example 2");
console.log("");
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log("result = ", result);
console.log("");
console.log("Example 3");
console.log("");
number = 0;
do {
    number = number + 2;
    console.log("number = " + number);
} while (number <= 10);
