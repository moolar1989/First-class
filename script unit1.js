// Control/Loops
for (let i = 0; i < 3; i++) {
    console.log('Loop iteration:', i);
}

// DOM Elements
let myButton = document.getElementById('myButton');
myButton.innerHTML = 'Click me to see an alert!';

// Events
myButton.addEventListener('click', () => {
    alert('Button clicked!');
});

// Input/Output
let userInput = prompt('Enter something:');
console.log('User input:', userInput);
