var quiz_data = [
    {
        "id": 1,
        "answer": 3,
        "question": "Which was not one of Voldemort's Horcruxes?",
        "options": [
            "Harry",
            "Nagini",
            "Helga's Diadem",
            "Tom Riddle's Diary"
        ]
    },
    {
        "id": 2,
        "answer": 1,
        "question": "Which of these are not one of Hagrid's many pets?",
        "options": [
            "Grawp",
            "Fluffy",
            "Aragog",
            "Norberta"
        ]
    },
    {
        "id": 3,
        "answer": 3,
        "question": "Which class did Severus Snape always want to teach?",
        "options": [
            "Potions",
            "Charms",
            "Defense Against Dark Arts",
            "Transfiguration"
        ]
    },
    {
        "id": 4,
        "answer": 3,
        "question": "Which Hogwarts house did Moaning Myrtle belong in?",
        "options": [
            "Gryffindor",
            "Slytherin",
            "Ravenclaw",
            "Hufflepuff"
        ]
    },
    {
        "id": 5,
        "answer": 2,
        "question": "What class did Neville end up teaching at Hogwarts?",
        "options": [
            "Astronomy",
            "Herbology",
            "Charms",
            "Muggle Studies"
        ]
    }
];


var main_div = document.getElementById('main_div');
var title = document.createElement('h1');
title.id = 'quiz_ttl';
title.innerHTML = 'The Quiz App';

var data = document.createElement('div');
data.id = 'quiz_ques';

for (var i = 0; i < quiz_data.length; i++) {
    data.innerHTML += 'Q' + (i + 1) + ". " + quiz_data[i].question + "<br><br>";

    for (var j = 0; j < quiz_data[i].options.length; j++) {
        var option = quiz_data[i].options[j];

        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question_' + quiz_data[i].id;
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

var button = document.createElement('button');
button.id = 'btn_id';
button.type = 'button'; // Change to 'button' type
button.innerHTML = 'Submit';

button.addEventListener('click', function () {
    calculateScore();
});

var score = document.createElement('div');
score.id = 'score_id';
score.innerHTML = "Score" + "<br>" + "0/5";

main_div.append(title, data, button, score);

function calculateScore() {
    var selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
    var userScore = 0;

    selectedAnswers.forEach(function (answer) {
        var questionId = answer.name.split('_')[1];
        var selectedOption = parseInt(answer.value);
        var question = quiz_data.find(function (q) {
            return q.id == questionId;
        });

        if (selectedOption === question.answer) {
            userScore++;
        }
    });

    score.innerHTML = "Score" + "<br>" + userScore + "/5";
}
