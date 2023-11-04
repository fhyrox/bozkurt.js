class Chatbot {
    constructor({ answers, randomAnswers }) {
        this.answers = answers;
        this.randomAnswers = randomAnswers;
    }

    question(input) {
        if(this.answers.hasOwnProperty(input)) {
            return this.answers[input]} else {
            let randomIndex = Math.floor(Math.random() * this.randomAnswers.length);
            return this.randomAnswers[randomIndex]        }
    }
}

module.exports = Chatbot;