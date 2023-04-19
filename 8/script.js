const firstNum = document.getElementById("firstNum"),
    secondNum = document.getElementById("secondNum"),
    multiply = document.getElementById("multiply"),
    divide = document.getElementById("divide"),
    msgContainer = document.getElementById("msgContainer");

function addNumbers() {
    first = Number(firstNum.value);
    second = Number(secondNum.value);
    addition = first + second;
    if (isNaN(first) || isNaN(second) || isNaN(addition)) {
        msgContainer.innerText = "Invalid Number."
    } else {
        msgContainer.innerText = `${first} + ${second} = ${addition}`
        console.log(addition);
    }
}

function subtractNumbers() {
    first = Number(firstNum.value);
    second = Number(secondNum.value);
    subtraction = first - second;
    if (isNaN(first) || isNaN(second) || isNaN(subtraction)) {
        msgContainer.innerText = "Invalid Number."
    } else {
        msgContainer.innerText = `${first} - ${second} = ${subtraction}`
        console.log(subtraction);
    }
}

function multiplyNumbers() {
    first = Number(firstNum.value);
    second = Number(secondNum.value);
    multiplication = first * second;
    if (isNaN(first) || isNaN(second) || isNaN(multiplication)) {
        msgContainer.innerText = "Invalid Number."
    } else {
        msgContainer.innerText = `${first} x ${second} = ${multiplication}`
        console.log(multiplication);
    }
}

function divideNumbers() {
    first = Number(firstNum.value);
    second = Number(secondNum.value);
    division = first / second;

    if (isNaN(first) || isNaN(second) || isNaN(division)) {
        msgContainer.innerText = "Invalid Number."
    } else {
        if ((first % second) === 0) {
            msgContainer.innerText = `${first} ÷ ${second} = ${division}`
            console.log(division);
        } else {
            divisionFixed = Number(division.toFixed(2));
            msgContainer.innerText = `${first} ÷ ${second} = ${divisionFixed}`
            console.log(divisionFixed);
        }
    }
}