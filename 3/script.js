const btn = document.getElementById("btn"),
      tryAgain = document.getElementById("try-again"),
      displayArea = document.getElementById("area"),
      first = document.getElementById("a"),
      second = document.getElementById("b"),
      third = document.getElementById("c");

function calculateArea(a, b ,c) {
    
    btn.style.display = "none";
    
    a = Number(window.prompt("Enter First Side"));
    b = Number(window.prompt("Enter Second Side"));
    c = Number(window.prompt("Enter Third Side"));
    
    //calculate side using heron formula
    let sides = a + b + c;
    sides /= 2;

    let area = Math.sqrt(sides*(sides-a)*(sides-b)*(sides-c));
    let fixedArea = Number(area.toFixed(3));

    first.innerText = `First Side: ${a}`;
    second.innerText = `Second Side: ${b}`;
    third.innerText = `Third Side: ${c}`;
    displayArea.innerText = `Area is: ${fixedArea}`;
    first.style.display = "inline";
    second.style.display = "inline";
    third.style.display = "inline";
    displayArea.style.display = "inline";
    tryAgain.style.display = "inline";

    console.log(fixedArea);
}