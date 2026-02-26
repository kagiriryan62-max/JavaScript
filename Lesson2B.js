// Comparision operators
// They usually evaluate to a Boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// Tripple equal sign
// It is called strict equal operator. It checks on the value and the data type. Both must be the same for it to return true.
//5 == "5"      // true  (because it converts the string to a number)
//5 === "5"     // false (different data types)
//5 === 5       // true


// Logical operators are used to evaluate two or more conditions and they also give a boolean answer.
// Logical AND (&&). It evaluates to true if and only if all of the conditions are true.
console.log(number1 < number2 ) && (number2 > number1) && (number3 > number2)

// The logical OR (|)- It evaluates to true if one of the conditions is true.
console.log((number1 > number2) || (number2 > number1))

// Logical NOT (!)- It is used to negate a condition/statement.
console.log(!(number1 < number2))

