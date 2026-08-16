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

let faq = document.querySelectorAll(".fq");

let answers = [
    "Netflix is a streaming service that lets you watch movies, TV shows, documentaries, and Netflix Originals online.",

    "Netflix is one of the world's largest streaming entertainment companies. Its total value changes depending on its stock market price.",

    "Netflix has different subscription plans, and the price depends on the plan and country. Plans can be changed or cancelled according to the membership terms.",

    "You can watch Netflix on smart TVs, smartphones, tablets, laptops, game consoles, streaming devices, and other supported devices.",

    "You can cancel your Netflix membership from your account settings. After cancelling, you can normally continue watching until the end of your current billing period.",

    "Netflix has movies, TV shows, documentaries, anime, Netflix Originals, and many other types of entertainment.",

    "Yes. Netflix provides a Kids experience with age-appropriate content and parental-control features."
];

faq.forEach(function(element, index) {

    element.addEventListener("click", function() {

        let oldAnswer = element.querySelector(".answer");
        let plus = element.querySelector(".plus");

        if (oldAnswer) {

            oldAnswer.remove();
            plus.innerText = "+";

        } else {

            let answer = document.createElement("div");

            answer.classList.add("answer");

            answer.innerText = answers[index];

            element.appendChild(answer);

            plus.innerText = "×";
        }

    });

}); 