
let buttons = document.querySelectorAll(".button");
let inputs = document.querySelectorAll(".Email");

buttons.forEach(function(button) {

    button.addEventListener("click", () => {

        let empty = false;

        inputs.forEach(function(input) {
            if (input.value === "") {
                empty = true;
            }
            else{
                input.value
            }
        });

        if (empty) {
            alert("Enter The Email To Login ..");
        } 
        else {
            alert("You Have Login..");
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