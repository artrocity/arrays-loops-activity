/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

const hobbies = ["Travel", "Flying", "Eating", "Cooking", "Fitness"];

// Loop 1
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}
console.log(hobbies.length);


// Loop 2
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.length);



/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

const colors = ["Blie", "Red", "Teal", "Green"];
let tealCount = 0;

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "Teal") {
        tealCount++;
    }
}
console.log(colors);
console.log(`Teal was found ${tealCount} times`);

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

const numbers = [5,2,7,9,10];
const oddNumbers = [];
const evenNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }else {
        oddNumbers.push(number);
    }
}
console.log(`Original Array: ${numbers}`);
console.log(`Even Array: ${evenNumbers}`);
console.log(`Odd Array: ${oddNumbers}`);





/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false

const values = [true, false, true, false, false];
const toggled = [];

for (let opposite of values) {
    toggled.push(!opposite);
}

console.log('Original array:', values);
console.log('Toggled array:', toggled);

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

const numbers2 = [3, 0, 2, 8, 0, 0, 0];
console.log("Before Loop: ", numbers2);

while (numbers2[numbers2.length - 1] === 0) {
    numbers2.pop();
}

console.log("After Loop: ", numbers2);

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3

const numbers3 = [2, 2, 7, 4, 1, 7, 12, 8];
let low = numbers3[0];
let high = numbers3[0];

for (let index of numbers3) {
    
    if (index > high) {
        high = index;
    } else if (index < low){
        low = index;
    }
}
console.log("Lowest Number Found: ", low);
console.log("Highest Number Found: ", high);
