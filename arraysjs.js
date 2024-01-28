// arrays.js

// 3. Create a new array
const myArray = [1, 2, 3, 4];

// 4. Create a new function expression
const addOne = function (num) {
    num += 1;
    console.log(num);
};

// 5. Create a new function with two parameters
const processNumber = function (func, number) {
    if (number % 2 === 0) {
        func(number);
    } else {
        console.log("The number is odd");
    }
};

// 6. Create a for-in loop
for (const index in myArray) {
    // 7. Call the function from step 5 in each iteration
    processNumber(addOne, myArray[index]);
}
