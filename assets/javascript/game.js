$(document).ready(function () {

    var triviaQuizArray = [];
    var score = 0;
    var timer = {

        // Set timer to 90 seconds
        time: 1000 * 90,

        // Write function to countdown
        countDown: function () {

            // Decrement time by 1, remember we cant use "this" here.
            timer.time--;
            var converted = timer.timeConverter(timer.time);
        },

        // Converts time into a displayable countdown
        timeConverter: function (t) {

            // Declaring local variable
            var seconds = Math.floor(t);
        }, /* End of timeConverter */
        timeUp: function () {

            // Empties the quizBody div and replaces it with a Game over alert
            $("#quizBody").empty();
            $("#quizBody").append(<div class="alert-danger" > Game over!</div>)

            // Resets timer
            timer.time = 0
        }
    };/* End of timer object */

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


    $("#quizBody").append(<div><button type="button" class="btn btn-primary">Restart Game</button></div>);
    timer.time = 0

    // Game over function


    $("#startButton").click(function () {
        $("#quizBody").html();
        for (i = 0; i < triviaQuizArray.length; i++) {

            // Clears out the space where the start game was.
            $("#quizBody").empty();

            // Generates question
            $("#quizBody").append(<h2></h2>)
            $(<h2></h2>).append(triviaQuizArray[i].question)


            // Generates answer bay [Buggy, in progress]
            for (j = 0; j < triviaQuizArray[i].answers.length; j++) {

                // Appending the answers sequentially to the questions.
                $(<form></form>).append(
                    <div class="form-check"><input class="form-check-input" type="radio" value="true"></input><label class="form-check-label" for="answer"></label></div>
                )
                $(<div></div>).append(triviaQuizArray[i].answers[j])
            };
            $(<form></form>).append(<button type="submit" class="btn btn-primary">Submit</button>);
        };
    });

    // Calculating quiz result
    $(":submit").click(function myFunction() {

        // Gathering the responses
        responses = $(document).filter(checked === true);

        // Gathering the correct answers
        score = $(responses).filter(triviaQuizArray.answers.value === true);
    });
});