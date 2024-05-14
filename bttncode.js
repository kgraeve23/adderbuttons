document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementById("display");
    var value = 5; // Starting value

    // Update the display with the initial value
    display.textContent = "Value: " + value;

    // Button 1 functionality
    document.getElementById("button1").addEventListener("click", function() {
        value++;
        display.textContent = "Value: " + value;
    });

    // Button 2 functionality
    document.getElementById("button2").addEventListener("click", function() {
        value--;
        display.textContent = "Value: " + value;
    });


    document.getElementById("button2").addEventListener("mouseover", function() {
        value--;
        display.textContent = "Value: " + value;
    });

    
});
