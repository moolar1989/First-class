// arrays.js


const myArray = [1, 2, 3, 4];

const addOne = function (num) {
    num += 1;
    console.log(num);
};

const processNumber = function (func, number) {
    if (number % 2 === 0) {
        func(number);
    } else {
        console.log("The number is odd");
    }
};

for (const index in myArray) {
   
    processNumber(addOne, myArray[index]);
}
