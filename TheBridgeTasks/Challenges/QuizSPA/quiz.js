const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
const quizButton = document.getElementById("buttonQuiz");
quizButton.addEventListener("click", getQuiz);

let quiz;
function getQuiz(){
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {        
        quiz = data.results;
        showQuestion(quiz);
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

const showQ = document.getElementById("boxQuestions");

let numQuestion = 0;
function showQuestion(quiz){
    console.log(numQuestion);
    showQ.innerHTML = 
    `<article class="singleQuestion" id="${numQuestion}">
        <h2>Pregunta ${numQuestion+1}</h2>
        <p>${quiz[numQuestion].question}</p>
        
        
    </article>
    `;

    numQuestion++;
}

const nextQuestion = document.getElementById("buttonNext");
nextQuestion.addEventListener("click", showQuestion(quiz));
