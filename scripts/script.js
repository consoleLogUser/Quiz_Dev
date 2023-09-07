const optionsId = document.getElementById("options");
const btnRecommencer = document.getElementById("btnRecommencer");
const scoreId = document.getElementById("score");
const messageId = document.getElementById("message");
const questionId = document.getElementById("question");
const optionSourceId = document.querySelector(".optionSource");

let score = 0;
let questionIndex = 0;
let questionnaire = listeGit;

optionSourceId.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "1") {
        questionnaire = listeGit;
    } else if (selectedCategory === "2") {
        questionnaire = listeJS;
    }
    score = 0;
    questionIndex = 0;
    afficherMessage("Clique sur la bonne réponse ")
    voirQuestion(questionnaire[questionIndex]);
});
function voirQuestion(question) {
    questionId.textContent = question.question;
    optionsId.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => verifReponse(option, question.reponse));
        optionsId.appendChild(button);
    });
}
function verifReponse(optionSelectionnee, reponse) {
    if (optionSelectionnee === reponse) {
        afficherMessage("Bien joué !");
        score++;
    } else {
        afficherMessage("T'es nul bouuuh !");
    }

    questionIndex++;

    if (questionIndex < questionnaire.length) {
        voirQuestion(questionnaire[questionIndex]);
    } else {
        const scoreFinal = "Quiz terminé ! Vous avez un score de " + score + " sur " + questionnaire.length;
        messageId.textContent = scoreFinal;
    }
}
function afficherMessage(message) {
    messageId.textContent = message;
}
btnRecommencer.addEventListener("click", (event) => {
    score = 0;
    questionIndex = 0;
    afficherMessage("Clique sur la bonne réponse ")

    voirQuestion(questionnaire[questionIndex]);
});

