// Object data types:
// An object in javascript is a data type that stores data in form of key-value pairs.
let person = {
    Name : "Ryan Kagina",
    Age : 19,
    isRegistered : true
};
console.log("The details of the person are:", person)

// First method is by use of square brackets
console.log(person["Age"])
// Second method is by use of the dot notation.
console.log(person.Name)

// Array data 
// This refers to a collection of items that are on indexes
fruits = ["Mango", "Apple", "Banana", "Melon", "Lemon", "Grapes"]
console.log("The enetire array of fruits is:", fruits)
// To access the items of an array, we use indexes
console.log(fruits[3])

// You can slice items of an array
console.log(fruits.slice(2, 5))