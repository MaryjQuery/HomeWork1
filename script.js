//Task1
console.log('>Task 1');
let user = prompt("Как тебя зовут?");
let age = prompt("Какого ты года рождения?");
let userAge = 2021 - age;

console.log(user, age, typeof user, typeof age);
console.log(userAge);

alert(user + userAge);

//Task2
console.log('>Task 2');
const a = +prompt("input number");
const b = +prompt("input number");
const c = +prompt("input number");

console.log(a, b, c);
console.log(typeof a, typeof b, typeof c);

const sum = (a + b + c);
console.log('SUM', sum);
const average = (sum / 3);
console.log('average', average);

const valueA = a % 2 === 0 ? "EVEN" : "ODD";
const valueB = b % 2 === 0 ? "EVEN" : "ODD";
const valueC = c % 2 === 0 ? "EVEN" : "ODD";

console.log('valueA=', valueA, 'valueB=', valueB, 'valueC=', valueC);

// Task 3
console.log('>Task 3');
const number = 12345;
console.log(number);

const numberA = number % 10;
const numberB = parseInt(number % 100 / 10);
const numberC = parseInt(number % 1000 / 100);
const numberD = parseInt(number % 10000 / 1000);
const numberE = parseInt(number % 100000 / 10000);
console.log(numberE, numberD, numberC, numberB, numberA);

