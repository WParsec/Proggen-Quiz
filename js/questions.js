
export const questionArray = [

    {
        selectRandom: [
            {
                question: href = "url('/static/oppgave1/1/iq_oppgave_1.jpg')",
                options: [
                    { img: href = "url('/static/oppgave1/1/iq_oppgave_1_a.jpg')"},
			        { img: href = "url('/static/oppgave1/1/iq_oppgave_1_b.jpg')"},
			        { img: href = "url('/static/oppgave1/1/iq_oppgave_1_c.jpg')"},
			        { img: href = "url('/static/oppgave1/1/iq_oppgave_1_d.jpg')"},
			        { img: href = "url('/static/oppgave1/1/iq_oppgave_1_e.jpg')"},
			        { img: href = "url('/static/oppgave1/1/iq_oppgave_1_f.jpg')"}
                ],
                index: 1
            },
            {
                question: href = "url('/static/oppgave1/2/iq_oppgave_1.jpg')",
                options: [
                    { img: href = "url('/static/oppgave1/2/iq_oppgave_1_a.jpg')"},
			        { img: href = "url('/static/oppgave1/2/iq_oppgave_1_b.jpg')"},
			        { img: href = "url('/static/oppgave1/2/iq_oppgave_1_c.jpg')"},
			        { img: href = "url('/static/oppgave1/2/iq_oppgave_1_d.jpg')"},
			        { img: href = "url('/static/oppgave1/2/iq_oppgave_1_e.jpg')"},
			        { img: href = "url('/static/oppgave1/2/iq_oppgave_1_f.jpg')"}
                ],
                index: 2
            },
            {
                question: href = "url('/static/oppgave1/3/iq_oppgave_1.jpg')",
                options: [
                    { img: href = "url('/static/oppgave1/3/iq_oppgave_1_a.jpg')"},
			        { img: href = "url('/static/oppgave1/3/iq_oppgave_1_b.jpg')"},
			        { img: href = "url('/static/oppgave1/3/iq_oppgave_1_c.jpg')"},
			        { img: href = "url('/static/oppgave1/3/iq_oppgave_1_d.jpg')"},
			        { img: href = "url('/static/oppgave1/3/iq_oppgave_1_e.jpg')"},
			        { img: href = "url('/static/oppgave1/3/iq_oppgave_1_f.jpg')"}
                ],
                index: 3
            },
            {
                question: href = "url('/static/oppgave1/3/iq_oppgave_1.jpg')",
                options: [
                    { img: href = "url('/static/oppgave1/4/iq_oppgave_1_a.jpg')"},
			        { img: href = "url('/static/oppgave1/4/iq_oppgave_1_b.jpg')"},
			        { img: href = "url('/static/oppgave1/4/iq_oppgave_1_c.jpg')"},
			        { img: href = "url('/static/oppgave1/4/iq_oppgave_1_d.jpg')"},
			        { img: href = "url('/static/oppgave1/4/iq_oppgave_1_e.jpg')"},
			        { img: href = "url('/static/oppgave1/4/iq_oppgave_1_f.jpg')"}
                ],
                index: 4
            },
            {
                question: href = "url('/static/oppgave1/5/iq_oppgave_1.jpg')",
                options: [
                    { img: href = "url('/static/oppgave1/5/iq_oppgave_1_a.jpg')"},
			        { img: href = "url('/static/oppgave1/5/iq_oppgave_1_b.jpg')"},
			        { img: href = "url('/static/oppgave1/5/iq_oppgave_1_c.jpg')"},
			        { img: href = "url('/static/oppgave1/5/iq_oppgave_1_d.jpg')"},
			        { img: href = "url('/static/oppgave1/5/iq_oppgave_1_e.jpg')"},
			        { img: href = "url('/static/oppgave1/5/iq_oppgave_1_f.jpg')"}
                ],
                index: 5
            },
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
        generatedArray.push({questionArray[i].selectRandom[random],random})
    }
    return generatedArray;
}




