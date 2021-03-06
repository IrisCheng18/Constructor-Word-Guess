var inquirer = require("inquirer");
const chalk = require('chalk');
const log = console.log;
var Word = require("./word");

var randomWord = "";
var count = 0;
var newWord = {};

createNewWordRandomly();
guessWord();

function guessWord() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "newLetter"
        }
    ]).then(function (response) {
        count--;

        if (newWord.guess(response.newLetter)) {
            log(newWord.display());
            log(chalk.green("CORRECT!!!\n"));
        } else {
            log(newWord.display());
            log(chalk.red("INCORRECT!!!\n\n") + chalk.white(`${count} passes remaining!!!\n`));
        };

        if (newWord.display().split(" ").join("").trim() === randomWord.split(" ").join("").trim()) {
            log("You got it right! Next Word!\n");

            createNewWordRandomly();
            guessWord();
        } else {
            if (count > 0) {
                guessWord();
            } else {
                log(`No guesses left! Word was: \"${randomWord}\"\n`);

                inquirer.prompt([
                    {
                        type: "confirm",
                        message: "Play Again?",
                        name: "playAgain"
                    }
                ]).then(function (response) {
                    if (response.playAgain) {
                        createNewWordRandomly();
                        guessWord();
                    }
                });
            }
        };
    });
};

function createNewWordRandomly() {
    var wordArr = [
        "piano",
        "flute",
        "trumpet",
        "saxophone",
        "clarinet",
        "xylophone",
        "guitar",
        "violin",
        "mandolin",
        "tuba",
        "french horn",
        "harmonica",
        "drum",
        "harp",
        "tambourine"
    ];

    randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    count = randomWord.length * 2;
    newWord = new Word(randomWord);
    log("Music Instrument\n" + newWord.display());
};