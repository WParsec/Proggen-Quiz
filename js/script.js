// importing the function createQuestionArray, containing objects with questions from questions.js
import { createQuestionArray } from "/js/questions.js";


// opening page variables
const startButton = document.querySelector('#start-button');
const checkbox = document.querySelector('#compliance');
const innerContainer = document.querySelector('.inner-container');
const openingForm = document.querySelector('#openingForm');
const contentContainer = document.querySelector('.content-container');


// values to declare
let questionCounter = 0;
let currentQuestion;
let answer;
let answersArray = [];
let questionIndex;


// collecting and building the full randomly generated array, turning the function into an array
let questionArray = [];
questionArray.push(createQuestionArray())

let completeQuestionArray = questionArray[0];
console.log(completeQuestionArray);

// ----------------- TEST START ------------------- //

// disables start button once window is loaded until checkbox is checked
window.addEventListener('load', () => {
    startButton.disabled = true;
});

// checkbox enables button
checkbox.addEventListener("click", () => {
    if (!checkbox.checked) {
        startButton.disabled = true;
    }
    else { startButton.disabled = false };
})

// function when starting the test
openingForm.addEventListener("submit", (event) => {
    // prevent window from reloading
    event.preventDefault();
    // hide first screen content
    innerContainer.classList.add('hide');
    // bring counter to Question 1
    questionCounter++;
    // run function for random selecting a question from pool and inserts a question to currentQuestion variable
    getQuestion();
    // run function for building the page with the correct content
    buildPage();
})


// function for loading questions
const getQuestion = () => {

    // get random question by assigning random index to test[index]
    currentQuestion = completeQuestionArray[questionCounter - 1];
}

// function for building the page after opening form is submitted
const buildPage = () => {
    contentContainer.innerHTML = `  <div class="question-number"><p>Question ${questionCounter} of ${3}</p></div>
                                    <div class="question-wrap"><h4>${currentQuestion.question}</h4></div>
                                    <div class="answer-option-container"></div>
                                    <div class="buttons-wrap">
                                        <button id="back-button">Back</button>
                                        <button id="next-button">Next</button>
                                        <button class="hide" id="complete">Complete test</button
                                    </div>`;

    // hide back button on first question                                
    if (questionCounter <= 1) {
        document.querySelector('#back-button').style.display = "none";
    };

    const answersContainer = document.querySelector('.answer-option-container');
    for (let i = 0; i < currentQuestion.options.length; i++) {
        answersContainer.innerHTML += `
                                        <input type="radio" class="radio-options" id="option${i}" name="option">
                                        <label for="option${i}" id="${i}" class="options-label">${currentQuestion.options[i]}</label>
                                        `
    }

    // remove next button if question counter equals length of test
    const nextButton = document.querySelector('#next-button');
    const backButton = document.querySelector('#back-button');
    const completeButton = document.querySelector('#complete');
    // changing layout on the final question
    if (questionCounter === 3) {
        nextButton.classList.add('hide');
        completeButton.classList.remove('hide');
    }

    // declaring options as all elements with class of radio-option
    let options = document.querySelectorAll('.radio-options');

    // adding eventlistener to all options that if clicked logs the chosen response in answer variable
    options.forEach(option => {
        option.addEventListener('change', () => {
            answer = "";
            if (option.checked === true) {
                answer = (option.id);
                console.log(answer);
            }
        })
    })

    // function when clicking next button
    nextButton.addEventListener('click', () => {
        // push answer variable into answerArray
        answersArray.push(answer);
        console.log(answersArray);
        questionCounter++;

        // run functions to build page with new question
        getQuestion();
        buildPage();
    })

    // function when clicking back button
    backButton.addEventListener('click', () => {
        questionCounter--;
        // removes the question from the answers array
        const indexOfQuestion = completeQuestionArray.indexOf(questionCounter);
        answersArray.splice(indexOfQuestion, 1);
        getQuestion();
        buildPage();
        console.log(answersArray);
    })

}


