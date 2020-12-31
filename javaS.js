(function(){
  function buildQuiz(){
    // variable to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        var answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

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
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
console.log("thisdfosdfadfa")

//A recipe card 
// create an object to hold information on your favorite recipe. it should have 4
// properties including (a string), (number), an array of strings, and 1 more
//on separate lines console.log for each the recipe

      
//       var books = [
//          {title: "steps to Academic Writing",
//  author: "Jean Zukowski",
// alreadyRead: false

//         }, 

       
//        {title: "A promise Land ",
//  author: "Barack Obama",
// alreadyRead: false
//           },

        
//            {title: "Night",
//  author: "Elie Wisel",
// alreadyRead: true
//            }

//       ]
      
//    for (i=0; i<books.length; i++){
// var book= books[i];
// var bookInfo = book.title + " by " + book.author;
// if (book.alreadyRead) {
//     document.write("You Read " + bookInfo + "<br>");
// }else{
//   document.write("You still need to read " + bookInfo + "<br>");

// };
// }

 


// var myRecipe = {
// recipe: "Tamales", 
// CanEat: 6, 
// Types: ["Red sauce", "sweet", "Green sauce"],
// Size: 45

//  };

//  console.log("This is a Mexican recipe known as " + myRecipe.recipe);
//  console.log("I can eat " + myRecipe.CanEat);
//  console.log("There is different types of recipes " + myRecipe.Types);
//  console.log("The tamales size are " + myRecipe.Size + " Cm");



// var sibling = { name: "Santy", age: 9, isSingle: false };

// var sibling = new Object();
// sibling.name = "Santy";
// sibling.age = 9;
// sibling.isSingle = false;
// sibling.email = 'abc@gmail.com'

// function meetSibling(){
//     console.log(" My name is " + sibling.name);
// }

// meetSibling();
// // dot way
// // document.write("My name is " + sibling.name + " I am " + sibling.age + " Years Old. ")
// // //string obj
// // document.write("My name is " + sibling["name"] + " My email is " + sibling["email"]);

// //all values for the following var code
// for (value in sibling){
//     document.write(value);
// }

// document.write(Object.values(sibling));