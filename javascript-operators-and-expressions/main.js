const width = 5;
const height = 10;
const area = width * height;
console.log('value of area is:', area);
console.log('typeof area is:', typeof area);

const bill = 50;
const payment = 75;
const change = payment - bill;
console.log('value of change is:', change);
console.log('typeof change is:', typeof change);

const quizzes = 7;
const midterm = 15;
const final = 30;
const grade = (quizzes + midterm + final) / 3;
console.log('value of grade is:', grade);
console.log('typeof grade is:', typeof grade);

const firstName = 'Bryan';
const lastName = 'Brown';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName is:', fullName);
console.log('typeof fullName is:', typeof fullName);

const ph = 33;
const isAcidic = (ph < 7);
console.log('value of isAcidic is:', isAcidic);
console.log('typeof isAcidic is:', typeof isAcidic);

const headCount = 45;
const isSparta = (headCount === 300);
console.log('value of isSparta is:', isSparta);
console.log('typeof isSparta is:', typeof isSparta);

let motto = fullName;
motto = fullName + ' ' + 'is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
