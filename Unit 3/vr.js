// Wait for the DOM content to be loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to clickable elements
    document.querySelectorAll('[clickable]').forEach(function(element) {
        element.addEventListener('click', function() {
            // Perform actions when element is clicked
            console.log('Clicked:', element.tagName);
            // Change the color of the clicked element
            changeColor(element);
        });
    });
});

// Function to change the color of an element
function changeColor(element) {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Set the new color to the element
    element.setAttribute('material', 'color', randomColor);
}
