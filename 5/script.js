const check = document.getElementById("check"),
      msg = document.getElementById("msgContainer");

function checkYear() {
    const year = document.getElementById("year").value;
    yearStorage = year;

    if (!isNaN(yearStorage)) {
        if ((Number(yearStorage) % 4) === 0) {
            msg.innerText = `${yearStorage} is a leap year.`;
        } else {
            msg.innerText = `${yearStorage} is not a leap year.`;
        }
    } else {
        msg.innerText = "You need help!";
    }
}

