document.addEventListener("DOMContentLoaded", function() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var plusButtons = document.querySelectorAll(".plusBtn");
    var minusButtons = document.querySelectorAll(".minusBtn");
    var resultDiv = document.getElementById("result");

    plusButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
        });
    });

    minusButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var input = this.previousElementSibling.previousElementSibling;
            input.value = parseInt(input.value) - 1;
        });
    });

    var form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var sum = parseInt(input1.value) + parseInt(input2.value);
        resultDiv.textContent = "Sum of Input 1 and Input 2: " + sum;
    });
});
