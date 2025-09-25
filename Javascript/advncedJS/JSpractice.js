// Javascript Practical Exam 

// Assignment 1
// Write a function that reverses each word in a sentence while maintaining the original word order. For instance, given the sentence:

// Example
// Input
// "Hello World From Wisdom Sprouts IT Training Hub"

// Output
// “olleH dlroW morF modsiW stuorpS TI gniniarT buH”
str = "Hello World From Wisdom Sprouts IT Training Hub"
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");
    // Reverse each word and store in a new array
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    // Join the reversed words back into a sentence
    return reversedWords.join(" ");
}
console.log(reverseWordsInSentence(str));

// Assignment 2
// Write a function that takes a paragraph of text, normalizes it to lowercase, strips out all punctuation, splits it into words, and returns an object where each distinct word maps to the number of times it appears.

// For instance, given the sentence:

// Example
// Input:
// "Learning JavaScript is fun! Fun and easy to learn JavaScript."

// Output:
// {
//   learning: 1,
//   javascript: 2,
//   is: 1,
//   fun: 2,
//   and: 1,
//   easy: 1,
//   to: 1,
//   learn: 1
// }
str1 = "Learning JavaScript is fun! Fun and easy to learn JavaScript."
function wordCount(paragraph) {
    // Normalize to lowercase and remove punctuation
    const normalizedText = paragraph.toLowerCase().replace(/[.,!?;:]/g, '');
    // Split into words
    const words = normalizedText.split(/\s+/);
    // Count occurrences of each word
    const wordCountMap = {};
    words.forEach(word => {
        if (word) {                              // Check for non-empty strings
            wordCountMap[word] = (wordCountMap[word] || 0) + 1;
        }
    });
    return wordCountMap;
}   
console.log(wordCount(str1));



// Assignment 3
// Create a function that receives an array of user objects, each having a name and age property. The function should return only those users whose age is strictly greater than 18.

// Example 
// Input:
// [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 }
// ]

// Output:
// [
//   { name: "Alice", age: 22 },
//   { name: "Charlie", age: 19 }
// ]
users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
]
function filterAdultUsers(userArray) {
    return userArray.filter(user => user.age > 18);
}
console.log(filterAdultUsers(users));


// Assignment 4
// Create a function that takes an array of product objects where each product has a name and price. Sort the products in ascending order based on price.

// Example
// Input:
// [
//   { name: "Keyboard", price: 499 },
//   { name: "Monitor", price: 8999 },
//   { name: "Mouse", price: 299 }
// ]

// Output:
// [
//   { name: "Mouse", price: 299 },
//   { name: "Keyboard", price: 499 },
//   { name: "Monitor", price: 8999 }
// ]

products = [
    { name: "Keyboard", price: 499 },
    { name: "Monitor", price: 8999 },
    { name: "Mouse", price: 299 }
]
function sortProductsByPrice(productArray) {
    return productArray.sort((a, b) => a.price - b.price);
}
console.log(sortProductsByPrice(products));

// Assignment 5
// Create a function that takes a string (e.g., a blog title) and converts it into a URL-friendly slug by:
// Lowercasing the text
// Removing special characters
// Replacing spaces with hyphens
// Example
// Input:
// "Learn JavaScript in 30 Days!"

// Output:
// "Learn-javascript-in-30-days"
blogTitle = "Learn JavaScript in 30 Days!"
function generateSlug(title) {
    return title
        .toLowerCase() // Lowercase the text
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .trim() // Trim leading/trailing spaces
        .replace(/\s+/g, '-') // Replace spaces with hyphens
}
console.log(generateSlug(blogTitle));

// Assignment 6
// Given an array of words, return an object that groups them by their length. The keys should be numbers (word lengths), and the values should be arrays of words that have that length.
// Example

// Input
// ["dog", "apple", "sun", "table", "cat", "pie"]

// Output
// 	{
//  		 3: ["dog", "sun", "cat", "pie"],
//  		 5: ["apple", "table"]
// }
wordArray = ["dog", "apple", "sun", "table", "cat", "pie"]
function groupWordsByLength(words) {
    return words.reduce((acc, word) => {
        const length = word.length;
        if (!acc[length]) {
            acc[length] = [];
        }
        acc[length].push(word);
        return acc;
    }, {});
}
console.log(groupWordsByLength(wordArray));

// Assignment 7
// Create a debounce utility function that takes another function and a delay time (in ms). It should delay the execution until the function stops being called for a specified amount of time. Common use case: waiting for the user to stop typing before searching.
// const searchInput = document.getElementById("search");
// searchInput.addEventListener("input", debounce(() => {
//   console.log("Search triggered!");
// }, 300));

// Behavior:
//  If a user types "hello" quickly, console.log will only be called once after the last keypress, waiting 300ms.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}   
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(() => {
  console.log("Search triggered!");
}, 300));

// Assignment 8
// Write a function that takes a JavaScript object and returns a deep copy, meaning all nested objects or arrays are also cloned, not just copied by reference.
// Example

// Input
// 		const obj = {
//  			 name: "John",
//  			 address: {
//    			 city: "New York",
//     			coordinates: {
//      					 lat: 40.7128,
//       					lng: -74.006
//     					}
//   				     }
// }


// Output
// A new object with the exact structure and values, but changes to the copy do not affect the original.


const obj = {    name: "John",
    address: {
        city: "New York",
        coordinates: {
            lat: 40.7128,
            lng: -74.006
        }
    }
}
function deepCopy(original) {
    if (original === null || typeof original !== 'object') {
        return original; // Return the value if not an object
    }
    if (Array.isArray(original)) {
        return original.map(item => deepCopy(item)); // Recursively copy array items
    }
    const copy = {};
    for (const key in original) {
        if (original.hasOwnProperty(key)) {
            copy[key] = deepCopy(original[key]); // Recursively copy object properties
        }
    }
    return copy;
}
const copiedObj = deepCopy(obj);
console.log(copiedObj);
console.log(copiedObj.address === obj.address); // Should be false, indicating a deep copy



// Assignment 9
// Simulate three asynchronous tasks (A, B, C), each with a random delay between 0.5 to 2 seconds. Use async/await to ensure they run one after another, not in parallel. After all tasks complete, log "All tasks completed".

// Output
// Console Output (after random delays):

// Task A completed
// Task B completed
// Task C completed
// All tasks completed

function randomDelay() {
    return Math.floor(Math.random() * 1500) + 500; // Random delay between 500ms to 2000ms
}
function task(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Task ${name} completed`);
            resolve();
        }, randomDelay());
    });
}
async function runTasksSequentially() {
    await task('A');
    await task('B');
    await task('C');
    console.log("All tasks completed");
}
runTasksSequentially();


// Assignment 10
// Create a simple calculator function that evaluates basic math expressions given as strings. It should support +, -, *, and /, and handle operator precedence correctly (i.e., * and / before + and -).
// Example

// Input
// "3 + 5 * 2 - 4 / 2"
// Explanation 
// 		5 * 2 = 10, 4 / 2 = 2 → 3 + 10 - 2 = 11
// Output
// 		11

expression = "3 + 5 * 2 - 4 / 2"
function evaluateExpression(expr) {
    try {
        // Use Function constructor to evaluate the expression safely
        const func = new Function(`return ${expr}`);
        return func();
    } catch (error) {
        console.error("Invalid expression:", error);
        return null;
    } 
}
console.log(evaluateExpression(expression)); // Output: 11