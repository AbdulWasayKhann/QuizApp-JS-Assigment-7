var  quizDB = [
    {
        question: "Q.1: HTML is what type of language ?",
        a: "Scripting Language",
        b: "Markup Language",
        c: "Programming Language",
        d: "Network Protocol",
        ans: "ans2"
    },{
        question: "Q.2: HTML uses",
        a: "User defined tags",
        b: "Pre-specified tags",
        c: "Fixed tags defined by the language",
        d: "Tags only for linking",
        ans: "ans3"
    },{
        question: "Q.3: The year in which HTML was first proposed _______.",
        a: "1990",
        b: "1980",
        c: "2000",
        d: "1995",
        ans: "ans1"
    },{
        question: "Q.4: Fundamental HTML Block is known as ___________.",
        a: "HTML Body",
        b: "HTML Tag",
        c: "HTML Attribute",
        d: "HTML Element",
        ans: "ans2"
    },{
        question: "Q.5: Apart from 'b' tag, what other tag makes text bold ?",
        a: "fat",
        b: "strong",
        c: "black",
        d: "emp",
        ans: "ans2"
    }
];

var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var submit = document.querySelector('#submit')

var answers = document.querySelectorAll('.answer');

var showScore = document.querySelector("#showScore")

let questionCount = 0;
let score = 0;

function loadQuestion() {
    var questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

function getCheckAnswer(){
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

submit.addEventListener('click', ()=>{
    var checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
        <buttun class="btn" onclick="location.reload()">Try Again</buttun>

        `;

        showScore.classList.remove("scoreArea");
    }


});