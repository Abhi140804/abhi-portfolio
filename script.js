document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out, " + document.getElementById("name").value + "!");
    document.getElementById("contactForm").reset();
});

const quizForm = document.getElementById("quizForm");
const resetQuizButton = document.getElementById("resetQuiz");
const quizResult = document.getElementById("quizResult");

const answers = {
    q1: "b",
    q2: "c",
    q3: "a"
};

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(quizForm);
    let score = 0;

    Object.keys(answers).forEach(function (question) {
        if (formData.get(question) === answers[question]) {
            score += 1;
        }
    });

    quizResult.textContent = "You scored " + score + " out of " + Object.keys(answers).length + ".";
});

resetQuizButton.addEventListener("click", function () {
    quizForm.reset();
    quizResult.textContent = "";
});
