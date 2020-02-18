// sum of even fibonacci numbers below four million.
let num1 = 0;
let num2 = 1;
let current = 0;
let sum = 0;
while (current < 4000000) {
    current = num1 + num2;
    num1 = num2;
    num2 = current;
    if (current % 2 === 0) {
        sum += current;
    }
}
console.log(sum);