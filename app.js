function buildQuiz() {
  const output = [];
  myObj.forEach((currentQuestion, questionNum) => {
    const ans = [];
    for (var letter in currentQuestion.answers) {
      ans.push(
        `<div class="container"><ul><li><label><input type="radio" name="question${questionNum}" onclick="showAns(${questionNum});" value="${[
          letter
        ]}">${
          currentQuestion.answers[letter]
        }</input></label></li></ul><div class="check"></div></div>`
      );
    }
    output.push(
      `<div class="slide">
              <div class="question">${currentQuestion.question}</div>
              <div class="answer">${ans.join("")}</div>
              </div>`
    );
  });
  quiz.innerHTML = output.join("");
}
let numCorrect = 0;
function showResult() {
  const answerContainers = quiz.querySelectorAll(".answer");
  myObj.forEach((currentQuestion, questionNum) => {
    const answerContainer = answerContainers[questionNum];
    const selector = `input[name=question${questionNum}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === currentQuestion.correct_answer) {
      numCorrect++;
    }
  });
  if (numCorrect == myObj.length) {
    result.innerHTML = `Congratulations! Your Score is ${numCorrect}/${myObj.length}`;
    alert(` You hit the bull's eye ${numCorrect}/${myObj.length}`);
  } else {
    result.innerHTML = `Your Score is ${numCorrect}/${myObj.length}`;
    alert(`You score is ${numCorrect}/${myObj.length}`);
  }
  showAnswer.style.display = "none";
}
function showAns(question) {
  showAnswer.innerHTML = myObj[question].explanation;
  if ('input[type="radio"].checked') {
    showAnswer.style.display = "inline-block";
  }
}
function showSlide(num) {
  slides[currentSlide].classList.remove("active-slide");
  slides[num].classList.add("active-slide");
  currentSlide = num;
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
  showAnswer.style.display = "none";
}

const quiz = document.getElementById("quiz");
const showAnswer = document.getElementById("showAnswer");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");

var myObj = [
  {
    question: "In which year did Maradona score a goal with his hand?",
    answers: {
      a: "1986",
      b: "1985",
      c: "1988",
      d: "1987"
    },
    correct_answer: "a",
    explanation:
      "Answer is 1986 <br>The first goal, after 51 minutes,was to become known as the Hand of God goal,<br>which Maradona scored by using his hand."
  },
  {
    question: "What is the national sport in Japan?",
    answers: {
      a: "Cricket",
      b: "Ping Pong",
      c: "Sumo Wrestling",
      d: "Badminton"
    },
    correct_answer: "c",
    explanation:
      "Answer is Sumo Wrestling. <br>Sumo is national sports of Japan,it is a mix of sumo and martial arts."
  },
  {
    question: "How many minutes is a rugby match?",
    answers: {
      a: "90 minutes",
      b: "80 minutes",
      c: "60 minutes",
      d: "120 minutes"
    },
    correct_answer: "b",
    explanation:
      "Answer is 80 minutes.<br>Game of rugby union has two periods of 40 minutes each, in total 80 minutes"
  },
  {
    question: "In which country were the first Olympic Games held?",
    answers: {
      a: "Greece",
      b: "Japan",
      c: "U.S.A",
      d: "Australia"
    },
    correct_answer: "a",
    explanation:
      "Answer is Greece. <br>On April 6, 1896, the first modern Olympic Games are held in Athens, Greece,<br>with athletes from 14 countries participating."
  },
  {
    question:
      "How many players are on each side of the net in beach volleyball?",
    answers: {
      a: "3",
      b: "1",
      c: "2",
      d: "4"
    },
    correct_answer: "c",
    explanation:
      "Answer is 2.<br>Beach volleyball is a team sport played by two teams of two players on each side<br>on a sand court divided by a net."
  },
  {
    question: "How matches did Mohammed Ali lose in his career?",
    answers: {
      a: "ten",
      b: "only one",
      c: "five",
      d: "zero"
    },
    correct_answer: "c",
    explanation:
      "Answer is Five. <br>Muhammad Ali, one of the greatest boxers ever, lost 5 fights during his professional career."
  },
  {
    question: "How long is an Olympic swimming pool?",
    answers: {
      a: "50 meters",
      b: "60 meters",
      c: "100 meters",
      d: "80 meters"
    },
    correct_answer: "a",
    explanation:
      "Answer is 50 meters. <br>An Olympic-size swimming pool is the type of swimming pool used in the Olympic<br>Games,where the race course is 50 metres (164.0 ft) in length."
  },
  {
    question:
      "Which car won Fernando Alonso his first title in Formula 1 with?",
    answers: {
      a: "McLaren",
      b: "B M W",
      c: "Mercedes",
      d: "Ferrari"
    },
    correct_answer: "d",
    explanation:
      "Answer is Ferrari.<br>Alonso won on his debut with Ferrari at the 2010 Bahrain Grand Prix."
  },
  {
    question: "How many times Pakistan have won the ODI cricket World cup?",
    answers: {
      a: "3",
      b: "2",
      c: "5",
      d: "1"
    },
    correct_answer: "d",
    explanation:
      "Answer is 1. <br>Pakistan won only 1 world cup on 1992 in Australia."
  },
  {
    question: "When was the first T20 cricket World cup played?",
    answers: {
      a: "2005",
      b: "2009",
      c: "2007",
      d: "2008"
    },
    correct_answer: "c",
    explanation:
      "Answer is 2007<br>The first T20 World cup was played in 2007 in South Africa."
  }
];

buildQuiz();

const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener("click", showResult);
nextButton.addEventListener("click", showNextSlide);
