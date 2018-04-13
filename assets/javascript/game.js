var triviaQuizArray = [];

// Pushing the quiz into the triviaQuizArray
triviaQuizArray.push(
    {
        question: "Vizzini censoring his having-fun crew of Inigo and Fezzik: “No more rhymes now, I mean it!”",
        answers: [
            { name: "Fezzik: “Anybody want a peanut?”", value: true },
            { name: "Inigo: “I’ll rhyme whenever I want to rhyme!”", value: false },
            { name: "Fezzik: “Don’t say that, Vizzini. Please?”", value: false },
            { name: "<span class=\"font-italic\">Crew shuts up immediately.</span>", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "Inigo to Westley, as Westley climbs the cliff: “I have some rope up here. But, I do not think you would accept my help, since I am only willing to kill you.”",
        answers: [
            { name: "Westley: “That does put a damper on our relationship.”", value: true },
            { name: "Westley: “Well then, I guess you’ll just have to wait.”", value: false },
            { name: "Westley: “You’d better not, you warthog-faced buffoon.”", value: false },
            { name: "Westley: “Throw me the rope.”", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "Vizzini to Westley during Battle of Wits: “Never go in against a Sicilian, when death is on the line! Hahaha! Hahaha! Hahaha!”",
        answers: [
            { name: "<span class=\"font-italic\">Nothing. Vizzini simply falls over dead.</span>", value: true },
            { name: "Westley: “Truly you have a dizzying intellect.”", value: false },
            { name: "<span class=\"font-italic\">Nothing. Westley simply falls over dead.</span>", value: false },
            { name: "Westley: “Never go in against a farm boy who’s taken up piracy!”", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "During cliff-top duel. Inigo: “I’ll admit it: you are better than I am.” Westley: “Then why are you smiling?” Inigo: “Because I know something you don’t know!” Westley: “And what is that?”",
        answers: [
            { name: "Inigo: “<span class=\"font-italic\">I</span> am not left-handed!” <span class=\"font-italic\">Switches to holding sword in right hand and begins to dominate duel.</span>", value: true },
            { name: "Inigo: “I have studied cape ferro!” <span class=\"font-italic\">Switches to a more aggressive style of swordplay and begins to dominate duel.</span>", value: false },
            { name: "Inigo: “I am going easy on you!” <span class=\"font-italic\">Switches to a more aggressive style of swordplay and begins to dominate duel.</span>", value: false },
            { name: "Inigo: “I wanted to die in a sword duel at the top of a remote cliff anyway!”", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "Inigo to Westley, before cliff-top duel: “I do not mean to pry, but you don’t by any chance happen to have six fingers on your right hand?”",
        answers: [
            { name: "Westley: “Do you always begin conversations this way?”", value: true },
            { name: "<span class=\"font-italic\">Westley shows his five-fingered bare hand.</span>", value: false },
            { name: "<span class=\"font-italic\">Westley shows his five-fingered gloved hand.</span>", value: false },
            { name: "Westley: “When my lifeless body is before you, you can check.”", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "Westley threatening Humperdink: “To the pain means the first thing you lose will be your feet, below the ankles. Then your hands at the wrist. Next your nose.”",
        answers: [
            { name: "Humperdink: “And then my tongue, I suppose. I killed you too quickly last time, a mistake I don’t mean to duplicate tonight.”", value: true },
            { name: "Humperdink: “I think you’re bluffing.”", value: false },
            { name: "Buttercup: “Please don’t hurt him!”", value: false },
            { name: "Humperdink: “I think you’re bluffing.”", value: false }
        ]
    }
);
triviaQuizArray.push(
    {
        question: "Magic Max trying to get the heroes to go away. Magic Max: “Beat it or I’ll call the brute squad.” Fezzik: “I’m on the brute squad.”",
        answers: [
            { name: "Magic Max: “You <span class=\"font-italic\">are</span> the brute squad.”", value: true },
            { name: "Magic Max: “Okay fine. You can come in.”", value: false },
            { name: "Magic Max: “Yeah well, you and your friends still can’t come in.”", value: false },
            { name: "Magic Max: “Not anymore.”", value: false }
        ]
    }
);

var

function gameOver() {
    document.getElementById("quizBody").innerHTML = ""
}

$(startButton).on(click, function () {
    $("#quizBody").html();
    for (i = 0; i < triviaQuizArray.length; i++) {

        // Generates question
        function generateQuestion() {
            $("#quizBody").html("");
            $("#quizBody").appendText("<h2>" + triviaQuizArray[i].question + "</h2><form id=\"answerBay" + i + "\"></form>"

            // Generates answer bay [Buggy, in progress]
            for (j = 0; j < triviaQuizArray[i].answers.length; j++) {
                $("#answerBay"+ i)
                <div class=\"form-check\"><input class=\"form-check-input\" type=\"radio\" id=\"answer" + i + "-1\" value=\"true\"><label class=\"form-check-label\" for=\"answer" + i + "-" + j + "\">" + triviaQuizArray[i].answers[j] + "</label></div>");
            }
        }
    }
})
document.getElementById("quizBody")
// Start timer 