// Task 1: Assignment Operators
let a = 20;
let b = 10;
console.log(a += b);
a = 20;
console.log(a -= b);
a = 20;
console.log(a *= b);
a = 20;
console.log(a /= b);
a = 20;
console.log(a **= b);
a = 20;
console.log(a %= b);
// Task 2: Comparison Operator
console.log(25 > 15);
// Task 3: Loose Equality and Strict Equality
console.log(50 == "50");
console.log(50 === "50");
// Task 4: Not Equal and Strict Not Equal
console.log(100 != 200);
console.log(100 !== 200);
// Task 5: Greater than or Equal
let age = 20;
console.log(age >= 18);
// Task 6: AND Operator
console.log(20 > 10 && 30 < 50);
// Task 7: OR Operator
console.log(10 > 20 || 50 > 30);
// Task 8: NOT Operator
console.log(!(100 > 50));
// Task 9: Three AND Conditions
console.log(10 < 20 && 30 > 20 && 50 == 50);
// Task 10: AND, OR and NOT Operators
console.log((20 > 10 && 30 < 50) || !(100 < 50));
// Task 11: Ternary Operator
let number = 10;
console.log(number > 0 ? "Positive" : "Negative");
// Task 12: Login Condition
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please Login");
// Task 13: String Concatenation
let firstName = "Bharathraj";
let lastName = "G";
console.log(firstName + " " + lastName);
// Task 14: Template String
let name = "Bharathraj";
let myAge = 22;
let city = "Salem";
console.log(`My name is ${name}, my age is ${myAge}, and I am from ${city}.`);
// Task 15: typeof
console.log(typeof ("JavaScript" + 100));
// Task 16: typeof
console.log(typeof (100 + true));
// Task 17: Number Constructor
console.log(Number("250") + 50);
// Task 18: Number Conversion
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
// Task 19: Boolean Conversion
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(null));
// Task 20: Price Conversion
let price = "500";
price = Number(price);
console.log(price + 100);