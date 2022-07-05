
export const test = [
    {
        question: 'How many times did you jerk off today?',
        options: ['None', 'One', 'I only fuck', 'I dont have cialis', 'Yes', 'Morgan Freeman']
    },
    {
        question: 'What is your favorite?',
        options: ['Lasagna', 'Techno', 'Morgan Freeman', 'Cialis', 'Balls', 'Blue']
    },
    {
        question: 'What is your name?',
        options: ['Ey', 'Jone', 'Fitfinn', 'Morgan Freeman', 'Tom', 'Nei']
    }
]


export const questionArray = [

    {
        selectRandom: [
            {
                question: 'This is level 1 question index 1',
                options: ['None', 'One', 'I only fuck', 'I dont have cialis', 'Yes', 'Morgan Freeman']
            },
            {
                question: 'This is level 1 question index 2',
                options: ['Lasagna', 'Techno', 'Morgan Freeman', 'Cialis', 'Balls', 'Blue']
            },
            {
                question: 'This is level 1 question index 3',
                options: ['Ey', 'Jone', 'Fitfinn', 'Morgan Freeman', 'Tom', 'Nei']
            }
        ]
    },

    {
        selectRandom: [
            {
                question: 'This is level 2 question index 1',
                options: ['None', 'One', 'I only fuck', 'I dont have cialis', 'Yes', 'Morgan Freeman']
            },
            {
                question: 'This is level 2 question index 2',
                options: ['Lasagna', 'Techno', 'Morgan Freeman', 'Cialis', 'Balls', 'Blue']
            },
            {
                question: 'This is level 2 question index 3',
                options: ['Ey', 'Jone', 'Fitfinn', 'Morgan Freeman', 'Tom', 'Nei']
            }
        ]
    },

    {
        selectRandom: [
            {
                question: 'This is level 3 question index 1',
                options: ['None', 'One', 'I only fuck', 'I dont have cialis', 'Yes', 'Morgan Freeman']
            },
            {
                question: 'This is level 3 question index 2',
                options: ['Lasagna', 'Techno', 'Morgan Freeman', 'Cialis', 'Balls', 'Blue']
            },
            {
                question: 'This is level 3 question index 3',
                options: ['Ey', 'Jone', 'Fitfinn', 'Morgan Freeman', 'Tom', 'Nei']
            }
        ]
    }

]



// The finished array
let generatedArray = [];

// declaring the random variable
let random;

// needed to turn it into a function to be able to export it. 
// Using "return" to make the function itself into the variable generatedArray

export function createQuestionArray() {
    for (let i = 0; i < questionArray.length; i++) {
        random = Math.floor(Math.random() * 3);
        generatedArray.push(questionArray[i].selectRandom[random])
    }
    return generatedArray;
}


window.addEventListener('click', () => {
    createQuestionArray();
})

