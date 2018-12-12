var Letter = function (char) {
    this.underlyingChar = char;
    this.guessed = false;

    this.display = function () {
        if (this.underlyingChar === " ") {
            return ""
        } else {
            if (this.guessed) {
                return this.underlyingChar;
            } else {
                return "_";
            }
        };
    };

    this.guess = function (newChar) {
        if (newChar === this.underlyingChar) this.guessed = true;
    };
};

// var newLetter = new Letter("a");
// console.log(newLetter);

module.exports = Letter;