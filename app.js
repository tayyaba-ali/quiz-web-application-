const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "script",
        option2: "javascript",
        option3: "js",
        correctOption: "script",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        option1: "The head section",
        option2: "The body section",
        option3: "Both the head and body section are correct",
        correctOption: "Both the head and body section are correct",
    },
    {
        question:
            'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: "script href=xxx.js",
        option2: "script name=xxx.js",
        option3: "script src=xxx.js",
        correctOption: "script src=xxx.js",
    },
];
// array of objects 



let quizBox = document.querySelector("#quizBox")
let nextBtn = document.querySelector("#nextBtn")
let questionNo = 0
let score = 0


const showQuestion = () => {
    if (questionNo != questions.length) {
        quizBox.innerHTML = ` <h1> ${questionNo + 1} : ${questions[questionNo].question}  </h1>

<label> 
    <input type="radio" name="options" value="${questions[questionNo].option1}">
    ${questions[questionNo].option1}
</label>
<br />
<br />
<label>
    <input type="radio" name="options" value="${questions[questionNo].option2}">
    ${questions[questionNo].option2}
</label>
<br />
<br />
<label>
    <input type="radio" name="options" value="${questions[questionNo].option3}">
    ${questions[questionNo].option3}
</label>
<br />
<br />

`
        nextBtn.disabled = true
        const options = document.querySelectorAll("input")

        options.forEach((option) => {
            option.addEventListener("click", () => {
                nextBtn.disabled = false
                if (option.value == questions[questionNo].correctOption) {
                    score++
                }

            }
            )
        })
    }
    else {
        quizBox.innerHTML = `Quiz ended Right questions :${score} Total  Questions  : ${questions.length}`
        nextBtn.innerHTML = "Try again"
    }




}

showQuestion()


nextBtn.addEventListener("click", () => {
    questionNo++
    showQuestion()
})