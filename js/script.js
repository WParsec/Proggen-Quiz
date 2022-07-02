import { test } from "/js/questions.js";


// opening page variables
const startButton = document.querySelector('#start-button');
const checkbox = document.querySelector('#compliance');
const innerContainer = document.querySelector('.inner-container');
const openingForm = document.querySelector('#openingForm');
const contentContainer = document.querySelector('.content-container');

// starting test variables



// values to declare
let questionCounter = 0;
let currentQuestion;



// disables start button until checkbox is checked
window.addEventListener('load', () => {
    startButton.disabled = true;
});

// checkbox 
checkbox.addEventListener("click", () => {
    if (!checkbox.checked) {
        startButton.disabled = true;
    }
    else { startButton.disabled = false };
})

// function when starting the test
openingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    innerContainer.classList.add('hide');
    questionCounter++;
    getQuestion();
    buildPage();
})


// function for loading questions
const getQuestion = () => {
    console.log(test.length);

    // get random question by assigning random index to test[index]
    const questionIndex = test[Math.floor(Math.random() * test.length)];
    currentQuestion = questionIndex;
    console.log(currentQuestion);
}

// function for building the page after opening form is submitted
const buildPage = () => {
    contentContainer.innerHTML = `  <div class="question-number"><p>Question ${questionCounter} of ${test.length}</p></div>
                                    <div class="question-wrap"><h4>${currentQuestion.question}</h4></div>
                                    <div class="answer-option-container"></div>
                                    <div class="buttons-wrap">
                                        <button id="back-button">Back</button>
                                        <button id="next-button">Next</button>
                                    </div>`;
    const answersContainer = document.querySelector('.answer-option-container');
    for (let i = 0; i < currentQuestion.options.length; i++) {
        answersContainer.innerHTML += `
                                        <input type="radio" class="radio-options" id="option${i}" name="option">
                                        <label for="option${i}" class="options-label">${currentQuestion.options[i]}</label>
                                        `
    }
}

// mark the selected option 
const optionLabel = document.querySelector('.options-label');


window.addEventListener("click", () => {
    console.dir(optionLabel);
})