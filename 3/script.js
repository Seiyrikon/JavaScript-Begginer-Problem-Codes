const btn = document.getElementById("btn"),
      tryAgain = document.getElementById("try-again"),
      displayArea = document.getElementById("area");

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

    displayArea.innerText = `The area of triangle with the sides of ${a}, ${b}, and ${c} is ${fixedArea}`;
    displayArea.style.display = "inline";
    tryAgain.style.display = "inline";

    console.log(fixedArea);
}