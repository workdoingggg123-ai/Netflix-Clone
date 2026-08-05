let buttons = document.querySelectorAll(".button");
let inputs = document.querySelectorAll(".Email");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let empty = false;

        inputs.forEach(function(input) {
            if (input.value === "") {
                empty = true;
            }
        });

        if (empty) {
            alert("Enter Mail First");
        } else {
            alert("You Have Successfully Login");
        }

    });

});