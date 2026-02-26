// String Data Type
// A string is a series/sequence of characters that are enclosed in quotation marks.
let name = "Ryan"
console.log("My name is:", name)

// Floating point. This is a number with a decimal.
let quantity = 35.5
console.log("The quantity of sugar bought is:",quantity)

// Boolean: It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an adult?", isAdult)
console.log("Is he registered as a voter?", isRegistered)

// Undefined: This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is", county )

// null data type: it is a data type that contains null values.
let username = null
console.log("What is the username?", username)








// Assignment: Research and come up with Object and Array data types. Show how to access items of the same.
// Array: Data stracture that stores multiple values in order. e.g,
let fruits = ["Apple", "Banana", "Mango", "Strawberry"]
// How to access Array items
// Using index
console.log(fruits[0]);  // Apple
console.log(fruits[2]);  // Mango

// Change an item
fruits[1] = "Pineapple";
console.log(fruits);




// Object data types: Store data in key-value pairs
// e.g., name is the key while Ryan is the value.

let student = {
    name: "Ryan",
    age: 20,
    course: "Computer Science"
};

// How to access object items
// Dot notation
console.log(student.name);   // Ryan
console.log(student.age);    // 20
// Bracket notation
console.log(student["course"]);  // Computer Science



//Arrays inside objects
let user = {
    name: "Ryan",
    hobbies: ["Football", "Coding", "Music"]
};

console.log(user.hobbies[0]);  // Football
//Objects inside arrays
let students = [
    { name: "Ryan", age: 20 },
    { name: "Tina", age: 19 }
];

console.log(students[0].name);  // Ryan
console.log(students[1].age);   // 19
