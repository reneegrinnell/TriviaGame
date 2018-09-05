// Global Variables

var questionAnswers = [{
    question: "Let's start with a softball. Who is the most unequivocally awesome Starfleet captain?",
    choices: ["Jean-Luc Picard", "William Kirk", "Kathryn Janeway", "Benjamin Sisko"],
    rightAnswer: "Kathryn Janeway"
}, {
    question: "Captain Kathryn Janeway was born on Earth, in which of the United States?",
    choices: ["Iowa", "Indiana", "Illinois", "Idaho"],
    rightAnswer: "Indiana"
}, {
    question: "What is Janeway's favorite beverage?",
    choices: ["Black Coffee", "Tea, Earl Gray, Hot", "Pinot Grigio", "Klingon Bloodwine"],
    rightAnswer: "Black Coffee"
}, {
    question: "Janeway had a dog on Earth when she was assigned to Voyager. What was its name and breed?",
    choices: ["Sam, a Golden Retriever", "Charlie, a Labrador Retriver", "Lucy, a Greyhound", "Molly, an Irish Setter"],
    rightAnswer: "Molly, an Irish Setter"
}, {
    question: "With which enemy group did Janeway form an alliance against Species 8472?",
    choices: ["Vidiians", "Romulans", "The Borg", "Talaxians"],
    rightAnswer: "The Borg"
}, {
    question: "Janeway once advised Naomi Wildman that there are three things to remember about being a starship captain. Which of the four options below is NOT one of them?",
    choices: ["Keep your shirt tucked in", "Go down with the ship", "Keep your nose clean", "Never abandon a member of your crew"],
    rightAnswer: "Keep your nose clean"
}, {
    question: "When Janeway was stranded on New Earth with Commander Chakotay, what did he build for her?",
    choices: ["A dining table", "A bathtub", "A canoe", "A laboratory space"],
    rightAnswer: "A bathtub"
}, {
    question: "On the Voyager holodeck, which historical figure allows Janeway to become his apprentice?",
    choices: ["Leonardo da Vinci", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
    rightAnswer: "Leonardo da Vinci"
}, {
    question: "In one episode of Star Trek: Voyager, Janeway gets to meet one of her twentieth-century heroes, who has (oddly and conveniently) been abducted and kept  alive by aliens. Who is the hero?",
    choices: ["Isaac Asmiov", "Alan Turing", "Charles Lindbergh", "Amelia Earhart"],
    rightAnswer: "Amelia Earhart"
}];

var panel = $('#quiz-area');

// Event Listeners

$(document).on('click', '#play', function () {
    game.start();
});


$(document).on('click', '#done', function () {
    game.done();
});

// =================================================

// variable game holding the count of correct and incorrect, and the countdown function
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function () {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    // start function removes the start button and adds the countdown and questions and answers
    start: function () {
        // delays the counter by one second
        document.getElementById('play').style.display = 'none';

        timer = setInterval(game.countdown, 1000);

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < questionAnswers.length; i++) {
            panel.append('<h2>' + questionAnswers[i].question + '</h2>');
            for (var j = 0; j < questionAnswers[i].choices.length; j++) {
                panel.append('<p><input type="radio" name="question' + '-' + i + '" value="' + questionAnswers[i].choices[j] + '">' + "     " + questionAnswers[i].choices[j] + "</p>");
            }
        }

        panel.append('<button class="btn-primary" id="done">Done</button>');
    },

    // done function checks if the checked input is equal to the correct answer. 
    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questionAnswers[0].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questionAnswers[1].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questionAnswers[2].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questionAnswers[3].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questionAnswers[4].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questionAnswers[4].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questionAnswers[4].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questionAnswers[4].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questionAnswers[4].rightAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // runs result function inside the done function
        this.result();
    },
    // result function stops timer, removes the timer from htm, and prints to the html results!
    result: function () {

        clearInterval(timer);
        document.getElementById('play').style.display = 'block';

        $('#subwrapper h2').remove();
        panel.html('<h2>Time is Up!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questionAnswers.length - (this.incorrect + this.correct)) + '</h3>');
    }

};