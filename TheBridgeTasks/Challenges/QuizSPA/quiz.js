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
async function showQuestion(quiz){

    const arrayAnswers = [];
    arrayAnswers.push(quiz[numQuestion].correct_answer);
    quiz[numQuestion].incorrect_answers.forEach(incorrectAns => {
        arrayAnswers.push(incorrectAns);
    });

    await shuffleAnswers(arrayAnswers);

    showQ.innerHTML = 
    `<article class="singleQuestion" id="${numQuestion}">
        <h2>Pregunta ${numQuestion+1}</h2>
        <section class="quizAnswersSection">
            <form>
                <fieldset>
                <legend>${quiz[numQuestion].question}</legend>
                <section class="selectAnswers">
                   <section class="singleAnswer">
                        <input type="radio" id="contactChoice1" name="contact" value="email" />
                        <label for="contactChoice1">Correo electrónico</label>
                   </section>
                </section>
                </fieldset>
            </form>
        </section>
    </article>
    `;

    numQuestion++;
}

function shuffleAnswers(arrayAnswers){

}

const nextQuestion = document.getElementById("buttonNext");
nextQuestion.addEventListener("click", () => showQuestion(quiz));
