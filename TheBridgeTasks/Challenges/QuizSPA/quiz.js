const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
const quizButton = document.getElementById("buttonQuiz");
quizButton.addEventListener("click", getQuiz);
const nextQ = document.getElementById("buttonNext");
nextQ.addEventListener("click", () => nextQuestion());
const showResults = document.getElementById("buttonResults");
showResults.addEventListener("click", () => checkResults(quiz, finalAnswers));

let quiz;
function getQuiz(){


    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {        
        quiz = data.results;
        console.log(quiz);
        showQuestion(quiz);
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

const showQ = document.getElementById("boxQuestions");

let numQuestion = 0;

async function showQuestion(quiz){
    const arrayAnswers = [];
    arrayAnswers.push(quiz[numQuestion].correct_answer);
    quiz[numQuestion].incorrect_answers.forEach(incorrectAns => {
        arrayAnswers.push(incorrectAns);
    });

    await shuffleAnswers(arrayAnswers);

    let boxAnswers = "";
    arrayAnswers.forEach(answer => {
        boxAnswers += `
        <section class="singleAnswer">
            <input type="radio" name="question${numQuestion}" id="${answer}" onclick="saveAnswer(event, numQuestion)"/>
            <label for="questionChoice${arrayAnswers.indexOf(answer)}">${answer}</label>
        </section>
        `
    });

    showQ.innerHTML = 
    `<article class="singleQuestion" id="${numQuestion}">
        <h2>Pregunta ${numQuestion+1}</h2>
        <section class="quizAnswersSection">
            <form>
                <fieldset>
                <legend>${quiz[numQuestion].question}</legend>
                <section class="selectAnswers">
                   ${boxAnswers}
                </section>
                </fieldset>
            </form>
        </section>
    </article>
    `;
}

function shuffleAnswers(arrayAnswers){
    //* Algoritmo de FIsher-Yates.

    for (let i = arrayAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayAnswers[i], arrayAnswers[j]] = [arrayAnswers[j], arrayAnswers[i]];
    }

    return arrayAnswers;
}

let finalAnswers = [];
function saveAnswer(event, idAnswer) {
    const answerQuestion = event.target.id;

    if (numQuestion == quiz.length - 1){
        nextQ.style.display = "none";
        showResults.style.display = "inline";
    }

    if (finalAnswers.length == 0){
        finalAnswers.push(answerQuestion);
    }
    else{
        finalAnswers[idAnswer] = answerQuestion;
    }

    console.log(finalAnswers);
}


function nextQuestion(){
    numQuestion++;

    console.log(numQuestion, quiz.length - 1);
    
    showQuestion (quiz);
}

function checkResults(quiz, finalAnswers){
    console.log("QUIZ FINALIZADO");
}


