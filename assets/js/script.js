const quizData = [
  {
      question: "Which language determines functionality/behavior of a webpage?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "javascript",
      correct: "d",
  },
  {
      question: "What is JavaScript??",
      a: "It's  a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies",
      b: "It's a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive",
      c: "Cascading Simple Sheets",
      d: "It is an interpreted, object-oriented, high-level programming language with dynamic semantics",
      correct: "b",
  },
  {
      question: "Which one of the following is not a javascript fundamental?",
      a: "Html",
      b: "String",
      c: "Object",
      d: "Boolean",
      correct: "a",
  },
  {
      question: "Who invented javascript ?",
      a: "Steve Jobs",
      b: "Brendan Eich",
      c: "Mikel Arteta",
      d: "Elon Musk",
      correct: "b",
  },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }

     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         if (((score/quizData.length)*100) > 80 && ((score/quizData.length)*100) <= 100) {
           quiz.innerHTML = `
              <h2>You answered ${(score/quizData.length)*100}% questions correctly therefore Excellently Passed</h2>

              <button onclick="location.reload()">Reload</button>
              `
         } else if (((score/quizData.length)*100) >= 50 && ((score/quizData.length)*100) <= 80){
              quiz.innerHTML = `
              <h2>You answered ${(score/quizData.length)*100}% questions correctly therefore fairly Passed</h2>

              <button onclick="location.reload()">Reload</button>
              `
         } else if (((score/quizData.length)*100) >= 0 && ((score/quizData.length)*100) < 50){
              quiz.innerHTML = `
              <h2>You answered ${(score/quizData.length)*100}% questions correctly therefore failed, therefore Retake the Test</h2>

              <button onclick="location.reload()">Reload</button>
              `
         }
         
     }
  }
})