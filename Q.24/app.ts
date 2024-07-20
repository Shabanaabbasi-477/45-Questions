

//                                  QUESTION # 24


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings

//Tests using the lower case function

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Tests using "and" and "or" operatorso

//Test whether an item is in a array

//Test whether an item is not in a array

//Eequality test with strings

console.log("Equality test with Strigs :", "Apple" === "Apple");


//Inequality test with strings

console.log("Inequality test with Strigs :", "Apple" != "Apple")

// test using the lower case function

console.log("Lower Case Function test :", "HELLO".toLowerCase() === "hello");

// test using the lower case function

console.log("Lower Case Function test :", "hello".toUpperCase() === "hello");

// Numerical tests involving equality and inequality

console.log("Equality test with numbers :", 10 === 10 );

// Numerical tests involving  inequality

console.log("Inequality test with numbers :", 10 != 10 );

// greater than and less than,
console.log("greater than test :", 10 > 5);
console .log(" Less than test :", 4 < 9);

// greater than or equal to less than or equal to

console.log("Greater than and equal to test :", 10 >= 10);

//less than or equal to

console.log("Less Than equal to :", 10 <= 8);

//Tests using "and" operator

console.log("And Operator test :", 5===5 && 10 > 5);

console.log("And Operator test :", 5===5 && 4 > 5);

//Tests using "OR" operator

console.log("OR Operator test :", 5===5 || 10 !=10);

console.log("OR Operator test :", 5 !== 5  || 10 !=10);

//Test whether an item is in a array

let fruits : string [] =["Apple", "Mango", "Pear", "Grapes"];

console.log("Test Mango in the array :", fruits.includes("Mango"));


//Test whether an item is not in a array

console.log("Test an item  is not array :", fruits.includes("Gava"));
