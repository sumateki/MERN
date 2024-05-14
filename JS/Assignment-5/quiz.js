
var main_div = document.getElementById('main_div');
var title = document.createElement('h1');
title.id = 'quiz_ttl';
title.innerHTML = 'The Quiz App';

var content_div = document.createElement('div');
content_div.id = 'content_div';

var data = document.createElement('div');
data.id = 'quiz_ques';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log('Status ok')
    var quizData = JSON.parse(xhr.responseText);
    displayQuiz(quizData);
  } else {
    console.log('Failed to fetch quiz data');
  }
};

xhr.onerror = function() {
  console.log('Error in making the request');
};

xhr.send();

function displayQuiz(quizData) {
  for (var i = 0; i < quizData.length; i++) {
    data.innerHTML += 'Q' + (i + 1) + ". " + quizData[i].question + "<br><br>";

    for (var j = 0; j < quizData[i].options.length; j++) {
      var option = quizData[i].options[j];

      var radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'question_' + quizData[i].id;
      radio.value = j;

      var label = document.createElement('label');
      label.innerHTML = option + "<br>";

      data.appendChild(radio);
      data.appendChild(label);
      data.appendChild(document.createElement('br'));
    }
    data.appendChild(document.createElement('hr'));
    data.appendChild(document.createElement('br'));
  }

  // Create a separate div for the "Submit" button
  var button = document.createElement('button');
  button.id = 'btn_id';
  button.type = 'button';
  button.innerHTML = 'Submit';

  // Create an event listener for the button click
  button.addEventListener('click', function() {
    calculateScore(quizData);
  });

  // Append the "Submit" button at the end of the data div
  data.appendChild(document.createElement('br')); // Add some spacing
  data.appendChild(button);

  // Create a separate div for the score
  var score = document.createElement('div');
  score.id = 'score_id';
  score.innerHTML = "Score" + "<br>" + "0/" + quizData.length;

  // Append data, button, and score to content_div
  content_div.appendChild(data);
  content_div.appendChild(score);

  main_div.append(title, content_div);
}

function calculateScore(quizData) {
  var selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
  var userScore = 0;

  selectedAnswers.forEach(function(answer) {
    var questionId = answer.name.split('_')[1];
    //basiclly radio btn val strts from 0..  so it didn't match with crctansr thats y I added +1
    var selectedOption = parseInt(answer.value)+1;  
    var correctAnswer = quizData.find(function(q) {
      return q.id == questionId;
    }).answer;

    console.log("Question ID: " + questionId);
    console.log("Selected Option: " + selectedOption);
    console.log("Correct Answer: " + correctAnswer);
    

    if (selectedOption === correctAnswer) {
      userScore++;
    }
  });

  var score = document.getElementById('score_id');
  score.innerHTML = "Score" + "<br>" + userScore + "/" + quizData.length;
}
















// var quiz_data =[
//     {
//     "id": 1,
//     "answer": 3,
//     "question": "Which was not one of Voldemort's Horcruxes?",
//     "options": [
//     "Harry",
//     "Nagini",
//     "Helga's Diadem",
//     "Tom Riddle's Diary"
//     ]
//     },
//     {
//     "id": 2,
//     "answer": 1,
//     "question": "Which of these are not one of Hagrid's many pets?",
//     "options": [
//     "Grawp",
//     "Fluffy",
//     "Aragog",
//     "Noberta"
//     ]
//     },
//     {
//     "id": 3,
//     "answer": 3,
//     "question": "Which class did Severus Snape always want to teach?",
//     "options": [
//     "Potions",
//     "Charms",
//     "Defense Against Dark Arts",
//     "Transfiguration"
//     ]
//     },
//     {
//     "id": 4,
//     "answer": 3,
//     "question": "Which Hogwarts house did Moaning Myrtle belong in?",
//     "options": [
//     "Gryffindor",
//     "Slytherin",
//     "Ravenclaw",
//     "Hufflepuff"
//     ]
//     },
//     {
//     "id": 5,
//     "answer": 2,
//     "question": "What class did Neville end up teaching at Hogwarts?",
//     "options": [
//     "Astronomy",
//     "Herbology",
//     "Charms",
//     "Muggle Studies"
//     ]
//     }
//     ]



// var main_div= document.getElementById('main_div')

// var title = document.createElement('h1')
// title.id = 'quiz_ttl'
// title.innerHTML = 'The Quiz App'

// var content_div = document.createElement('content_div')

// var data = document.createElement('div')
// data.id = 'quiz_ques'

// for(var i=0; i<quiz_data.length; i++){
//     data.innerHTML += 'Q' + (i + 1) + ". " + quiz_data[i].question + "<br><br>"

//     for(var j=0; j<quiz_data[i].options.length; j++){
//         var option = quiz_data[i].options[j]

//         var radio = document.createElement('input')
//         radio.type =  'radio'
//         radio.name = 'question_' + quiz_data[i].id
//         radio.value = j

//         var label = document.createElement('label')
//         label.innerHTML = option +"<br>"

//         data.appendChild(radio)
//         data.appendChild(label)
//         data.appendChild( document.createElement('br'))
        
//     }
//     data.appendChild(document.createElement('hr'))
//     data.appendChild(document.createElement('br'))   
// }

// var button = document.createElement('button')
// button.id = 'btn_id'
// button.type = 'submit'
// // button.classList.add('btn_cls')
// button.innerHTML = 'Submit'
// data.appendChild(button)

// var score = document.createElement('div')
// score.id = 'score_id'
// score.innerHTML = "Score" + "<br>" + "0/5"


// content_div.append(data, score)
// main_div.append(title, content_div)




// for(var i=0; i<quiz_data.length; i++){
//     for(var j in quiz_data[i]){
//         if(quiz_data[i].id == 1){
//             data.innerHTML = "Q1. "+ quiz_data[i].question + "<br><br>"
//             data.innerHTML += quiz_data[0].options + "<br><br>"
//             break 
//         }
//         else if(quiz_data[i].id == 2){
//             data.innerHTML += "Q2. "+ quiz_data[i].question + "<br>"
//             break
//         }
//         else if(quiz_data[i].id == 3){
//             data.innerHTML += "Q3. "+ quiz_data[i].question + "<br>"
//             break
//         }
//         else if(quiz_data[i].id == 4){
//             data.innerHTML += "Q4. "+ quiz_data[i].question + "<br>"
//             break
//         }
//         else if(quiz_data[i].id == 5){
//             data.innerHTML += "Q5. "+ quiz_data[i].question + "<br>"
//             break
//         }
//     }
// }




// var quiz_data = [
//     {
//         "id": 1,
//         "answer": 3,
//         "question": "Which was not one of Voldemort's Horcruxes?",
//         "options": [
//             "Harry",
//             "Nagini",
//             "Helga's Diadem",
//             "Tom Riddle's Diary"
//         ]
//     },
//     {
//         "id": 2,
//         "answer": 1,
//         "question": "Which of these are not one of Hagrid's many pets?",
//         "options": [
//             "Grawp",
//             "Fluffy",
//             "Aragog",
//             "Norberta"
//         ]
//     },
//     {
//         "id": 3,
//         "answer": 3,
//         "question": "Which class did Severus Snape always want to teach?",
//         "options": [
//             "Potions",
//             "Charms",
//             "Defense Against Dark Arts",
//             "Transfiguration"
//         ]
//     },
//     {
//         "id": 4,
//         "answer": 3,
//         "question": "Which Hogwarts house did Moaning Myrtle belong in?",
//         "options": [
//             "Gryffindor",
//             "Slytherin",
//             "Ravenclaw",
//             "Hufflepuff"
//         ]
//     },
//     {
//         "id": 5,
//         "answer": 2,
//         "question": "What class did Neville end up teaching at Hogwarts?",
//         "options": [
//             "Astronomy",
//             "Herbology",
//             "Charms",
//             "Muggle Studies"
//         ]
//     }
// ];

// var main_div = document.getElementById('main_div');

// var title = document.createElement('h1');
// title.id = 'quiz_ttl';
// title.innerHTML = 'The Quiz App';

// var content_div = document.createElement('div');
// content_div.id = 'content_div';

// var data = document.createElement('div');
// data.id = 'quiz_ques';

// for (var i = 0; i < quiz_data.length; i++) {
//     data.innerHTML += 'Q' + (i + 1) + ". " + quiz_data[i].question + "<br><br>";

//     for (var j = 0; j < quiz_data[i].options.length; j++) {
//         var option = quiz_data[i].options[j];

//         var radio = document.createElement('input');
//         radio.type = 'radio';
//         radio.name = 'question_' + quiz_data[i].id;
//         radio.value = j;

//         var label = document.createElement('label');
//         label.innerHTML = option + "<br>";

//         data.appendChild(radio);
//         data.appendChild(label);
//         data.appendChild(document.createElement('br'));

//     }
//     data.appendChild(document.createElement('hr'));
//     data.appendChild(document.createElement('br'));
// }

// //create seperatae div for submit button
// var button = document.createElement('button');
// button.id = 'btn_id';
// button.type = 'button';
// button.innerHTML = 'Submit';

// // Create an event listener for the button click
// button.addEventListener('click', function () {
//     calculateScore();
// });
// // Append the "Submit" button at the end of the data div
// data.appendChild(document.createElement('br')); // Add some spacing
// data.appendChild(button);


// //create seperate div for the score
// var score = document.createElement('div');
// score.id = 'score_id';
// score.innerHTML = "Score" + "<br>" + "0/5";


// // Append data, button, and score to content_div
// content_div.appendChild(data);
// content_div.appendChild(score);

// main_div.append(title, content_div);



// function calculateScore() {
//     console.log("Calculating score")
//     var selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
//     var userScore = 0;

//     selectedAnswers.forEach(function (answer) {
//         var questionId = answer.name.split('_')[1];
//         var selectedOption = parseInt(answer.value) + 1;
//         var correctAnswer = quiz_data.find(function (q) {
//             return q.id == questionId;
//         }).answer;

//         console.log("Question ID: " + questionId);
//         console.log("Selected Option: " + selectedOption);
//         console.log("Correct Answer: " + correctAnswer);

//         if (selectedOption === correctAnswer) {
//             userScore++;
//         }
//     });

//     score.innerHTML = "Score" + "<br>" + userScore + "/5";
//     console.log("Score updated: "+userScore)
// }























































