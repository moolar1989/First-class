// Mu's JavaScript File - Date: 2024-01-13

// 4. Add a new variable and set it to an integer value
let myNumber = 5;

// 5. Perform a mathematical operation on the integer value and store it in that variable
myNumber = myNumber * 2;

// 6. Create a variable and prompt the user for a value
let userFavorite = prompt("What is your favorite thing?");

// 7. Use console.log() to print both variables to the console
console.log("myNumber:", myNumber);
console.log("userFavorite:", userFavorite);

// 8. Create a new variable starting at a number of your choice
let startingNumber = 3; // You can choose any starting number

// 9. Create a for loop that iterates 5 times
for (let i = 0; i < 5; i++) {
    // If the variable from step 8 is odd, print it
    if (startingNumber % 2 !== 0) {
        console.log("Odd Number:", startingNumber);
    }

    // Regardless of odd or even, increment the variable
    startingNumber++;
}