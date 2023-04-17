const start = document.getElementById("start"),
    rotate = document.getElementById("rotate"),
    other = document.getElementById("other"),
    loop = document.getElementById("loop"),
    matched = document.getElementById("matched");

let arrayStorage = [];
let wordStorage = '';

function startRotate(word) {
    word = window.prompt("Enter a word to rotate");
    convertToArray = Object.assign([], word);
    arrayStorage = convertToArray;
    wordStorage = word;
    document.getElementById("word").innerText = convertToArray.join('');
    start.style.display = 'none';
    rotate.style.display = 'inline';
    loop.style.display = 'inline';
}

function rotateWord() {
    lastCharacter = arrayStorage.pop()
    arrayStorage.unshift(lastCharacter);
    displayedWord = document.getElementById("word").innerText = arrayStorage.join('');

    if (wordStorage === displayedWord) {
        matched.style.display = 'inline';
        rotate.style.display = 'none';
        other.style.display = 'inline';
        loop.style.display = 'none';
    }
}

function tryOtherWord() {
    matched.style.display = 'none';
    other.style.display = 'none';
    startRotate();
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

const loopWord = async () => {
    for (x = 0; x < arrayStorage.length; x++) {
        lastCharacter = arrayStorage.pop()
        arrayStorage.unshift(lastCharacter);
        await sleep(1000);
        displayedWord = document.getElementById("word").innerText = arrayStorage.join('');

        console.log(arrayStorage);
        if (wordStorage === displayedWord) {
            matched.style.display = 'inline';
            rotate.style.display = 'none';
            other.style.display = 'inline';
            loop.style.display = 'none';
        }
    }
}
