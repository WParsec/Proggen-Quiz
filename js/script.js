// importing variable test, containing objects with questions from questions.js
import { test } from "/js/questions.js";


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
    event.preventDefault();
    innerContainer.classList.add('hide');
    questionCounter++;
    getQuestion();
    buildPage();
})


// function for loading questions
const getQuestion = () => {

    // get random question by assigning random index to test[index]
    questionIndex = test[Math.floor(Math.random() * test.length)];
    currentQuestion = questionIndex;
    console.log(currentQuestion);
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
    const completeButton = document.querySelector('#complete');
    if (questionCounter === 3) {
        nextButton.classList.add('hide');
        completeButton.classList.remove('hide');
    }

    // declaring options as all elements with class of radio-option
    let options = document.querySelectorAll('.radio-options');

    // function to log the clicked option
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
        answersArray.push(answer);
        console.log(answersArray);
        questionCounter++;
        const indexOfQuestion = test.indexOf(questionIndex);
        test.splice(indexOfQuestion, 1);
        getQuestion();
        buildPage();
    })

}






