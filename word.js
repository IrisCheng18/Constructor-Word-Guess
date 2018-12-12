var Letter = require("./letter.js");

var Word = function (newWord) {
    this.letters = [];
    for (var i = 0; i < newWord.length; i++) {
        this.letters.push(new Letter(newWord.charAt(i)));
    };

    this.display = function () {
        var wordGuessed = "\n";

        this.letters.forEach(element => {
            wordGuessed += element.display() + " ";
        });

        return wordGuessed + "\n";
    };

    this.guess = function (newChar) {
        var guessed = false;

        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].guessed) {
                this.letters[i].guess(newChar);

                if (this.letters[i].guessed) {
                    guessed = true;
                };
            }
        }
        return guessed;
    };
};

// var newWord = new Word("tubt");
// console.log(newWord.display());
// newWord.guess("t");
// console.log(newWord.display());
// newWord.guess("n");
// console.log(newWord.display());
// newWord.guess("b");
// console.log(newWord.display());

module.exports = Word;