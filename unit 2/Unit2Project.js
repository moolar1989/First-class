// Event Listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded!');
});

// Event Listener for Click
document.addEventListener('click', function() {
    console.log('Click event triggered!');
});

// Class Definition
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    // Method for Accelerating
    accelerate() {
        this.speed += 10;
        console.log(`The ${this.make} ${this.model} is now traveling at ${this.speed} mph.`);
    }

    // Method for Braking
    brake() {
        this.speed -= 5;
        console.log(`The ${this.make} ${this.model} slowed down to ${this.speed} mph.`);
    }
}

// Object Creation and Method Call
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.accelerate(); // Output: The Toyota Camry is now traveling at 10 mph.

// Changing the speed of the car
myCar.accelerate(); // Speed increased by 10 mph
myCar.accelerate(); // Speed increased by another 10 mph
myCar.brake();      // Speed decreased by 5 mph

