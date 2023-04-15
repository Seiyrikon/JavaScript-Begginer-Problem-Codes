const startButton = document.getElementById("start"),
      tryAgain = document.getElementById("try-again"),
      numberInput = document.getElementById("number"),
      guessInput = document.getElementById("answer");

function getRandomInt(max, guess) {

    max = window.prompt("Enter a number");
    number = Math.floor(Math.random() * max);
    console.log(number);
    guess = Number(window.prompt("Guess the number"));
    answer = guess;

    checkAnswer();
    startButton.style.display = "none";
    tryAgain.style.display = "inline";
}

function checkAnswer() {
    if (answer === number) {
        document.getElementById("h2").innerText = `Good work! The number to guess is ${number} and your answer is ${answer}. We can conclude that your intuition is strong.`;
    } else {
        document.getElementById("h2").innerText = `Not matched. The number to guess is ${number} and your answer is ${answer}. Nice try though.`;
    }
}
