const startButton = document.getElementById("start"),
      tryAgain = document.getElementById("try-again"),
      numberInput = document.getElementById("number"),
      guessInput = document.getElementById("answer");

function getRandomInt(max, guess) {

    max = window.prompt("Enter a number to guess in between");
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
        document.getElementById("h3").innerText = 'Good Work!'
        document.getElementById("firsth2").innerText = `The number to guess is: ${number}`;
        document.getElementById("secondh2").innerText = `Your answer is: ${answer}`;
    } else {
        document.getElementById("h3").innerText = 'Not matched.'
        document.getElementById("firsth2").innerText = `The number to guess is: ${number}`;
        document.getElementById("secondh2").innerText = `Your answer is: ${answer}`;
    }
}
