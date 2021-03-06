(function () {
  function myQuiz() {
    // variable to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        var answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide"> 
          <div class= "question" > ${ currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
           </div >`
    
         
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function score() {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    results.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function Slides(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submit.style.display = 'inline-block';
    }
    else {
      nextButton.style.display = 'inline-block';
      submit.style.display = 'none';
    }
  }

  function showNextSlide() {
    Slides(currentSlide + 1);
  }

  function showPreviousSlide() {
    Slides(currentSlide - 1);
  }

  var quizContainer = document.getElementById('quiz');
  var results = document.getElementById('results');
  var submit = document.getElementById('submit');
  var myQuestions = [
    {
      question: "Who was the first creator of programming languages",
      answers: {
        a: "Ada Lovelance",
        b: "Albert Einsten",
        c: "John Backus"
      },
      correctAnswer: "a"
    },
    {
      question: "Is JavaScript the most popular programming language that people use",
      answers: {
        a: "Pfff, Naaaaaah I don't believe that",
        b: "Of course, You are crazy or what!",
        c: "It don't matter"
      },
      correctAnswer: "b"
    },
    {
      question: "Which App is more famous?",
      answers: {
        a: "Snapchat",
        b: "Facebook",
        c: "Instagram",
        d: "Don't care"
      },
      correctAnswer: "b"
    },
    {
      question: "Who invented the first apps?",
      answers: {
        a: "Douglas Crockford",
        b: "Andrew Lincoln",
        c: "Steve Jobs"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the first creator of videogames?",
      answers: {
        a: "Ralph Baer",
        b: "Joseph Kates",
        c: "Brendan Eich"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is the most famous person in programming?",
      answers: {
        a: "Ada Lovalace",
        b: "Bill Gates",
        c: "Jack Dorsey"
      },
      correctAnswer: "b"
    },
    {
      question: "Do you remember what is binary",
      answers: {
        a: "1s and 0s",
        b: "waves",
        c: "numbers and letters"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was the first hacker in the world?",
      answers: {
        a: "John Kennedy",
        b: "Kevin Mitnick",
        c: "Konrad Zuse",
      },
      correctAnswer: "c"
    },
   
    {
      question: "Who are the most know hacker's organization called?",
      answers: {
        a: "Anonymous",
        b: "Lizard",
        c: "fancy bear"
      },
      correctAnswer: "a"
    },
    
  ];

  // Kick things off
  myQuiz();

  // Pagination
  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  Slides(currentSlide);

  // Event listeners
  submit.addEventListener('click', score);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
