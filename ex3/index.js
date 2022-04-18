const data = {
    "results": [
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which driver has been the Formula 1 world champion for a record 7 times?",
            "correct_answer": "Michael Schumacher",
            "incorrect_answers": [
                "Ayrton Senna",
                "Fernando Alonso",
                "Jim Clark"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which team won 2014 FIFA World Cup in Brazil?",
            "correct_answer": "Germany",
            "incorrect_answers": [
                "Argentina",
                "Brazil",
                "Netherlands"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
            "correct_answer": "4",
            "incorrect_answers": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
            "correct_answer": "Nico Rosberg",
            "incorrect_answers": [
                "Lewis Hamilton",
                "Max Verstappen",
                "Kimi Raikkonen"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was the FC Schalke 04 founded?",
            "correct_answer": "1904",
            "incorrect_answers": [
                "1909",
                "2008",
                "1999"
            ]
        }
    ]
}

let text = data.results[1].question;

// let text = "";
// for (const x in data.results) {
//   text += data.results[x] + ", ";
// }

// let text = "";
// for (let i = 0; i < data.results.length; i++) {
//     text += data.results[i] + ", ";
//   }
document.querySelector(".app").innerHTML = text;

//document.querySelector(".app").innerHTML = data.results[0].category;

//console.log(data.results[1].question);