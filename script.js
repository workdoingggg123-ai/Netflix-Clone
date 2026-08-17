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

let questions = document.querySelectorAll(".que-ans");

questions.forEach(function (question) {

    let plus = question.querySelector(".plus");
    let answer = question.querySelector(".answer");

    question.addEventListener("click", function () {

        answer.classList.toggle("show");

        if (answer.classList.contains("show")) {
            plus.textContent = "×";
        } else {
            plus.textContent = "+";
        }

    });

});