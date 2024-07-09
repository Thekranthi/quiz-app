const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['London', 'Paris', 'Rome', 'Berlin'],
        correct: 1
    },
    {
        question: 'Who wrote Hamlet?',
        answers: ['Shakespeare', 'Milton', 'Chaucer', 'Swift'],
        correct: 0
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
        correct: 1
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next-btn');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        ${currentQuizData.answers.map((answer, index) => `
            <label>
                <input type="radio" name="question${currentQuestion}" value="${index}">
                ${answer}
            </label><br>
        `).join('')}
    `;
}

function checkAnswer() {
    const answerInputs = document.querySelectorAll(`input[name="question${currentQuestion}"]:checked`);
    if (answerInputs.length > 0) {
        const userAnswer = parseInt(answerInputs[0].value);
        if (userAnswer === quizData[currentQuestion].correct) {
            score++;
        }
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length} questions.`;
    resultsContainer.style.display = 'block';
}

displayQuestion();

nextButton.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
});
