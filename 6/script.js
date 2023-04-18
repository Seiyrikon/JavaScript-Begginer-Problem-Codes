const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      check = document.getElementById("check"),
      list = document.getElementById("list"),
      reloadPage = document.getElementById("reload"),
      year = document.getElementById("year");

function yearLoop() {
    const yearInput = document.getElementById("year").value;
    if (!isNaN(yearInput)) {
        if (yearInput.length !== 4) {
            document.getElementById("msgContainer").innerText = "Enter a 4-digit year";
        } else {
            let date = new Date(Number(yearInput), 0, 1)
            for (x = date.getFullYear(); x <= 2050; x++) {
                date.setFullYear(x);
                if (date.getDay() !== 0) {
                } else {
                    const createElement = document.createElement("h2");
                    let content = document.createTextNode(`${monthArr[date.getMonth()]} ${date.getDate()}st of ${x} is a sunday`);
                    createElement.appendChild(content);
                    const msgContainer = document.getElementById("msgContainer");
                    document.body.insertBefore(createElement, msgContainer);
                    document.getElementById("title").innerText = `List of years from ${yearInput} to 2050 with January 1st as sunday.`
                }
            }
        }
    } else {
        document.getElementById("msgContainer").innerText = "Please get help!";
    }
    check.style.display = "none";
    list.style.display = "none";
    reloadPage.style.display = "inline";
    year.style.display = "none";
}

function dayChecker() {
    const yearInput = document.getElementById("year").value;
    if (!isNaN(yearInput)) {
        if (yearInput.length !== 4) {
            document.getElementById("msgContainer").innerText = "Enter a 4-digit year";
        } else {
            let date = new Date(Number(yearInput), 0, 1)
            if (date.getDay() !== 0) {
                document.getElementById("msgContainer").innerText = `${monthArr[date.getMonth()]} ${date.getDate()}st of ${date.getFullYear()} is not a sunday`
            } else {
                document.getElementById("msgContainer").innerText = `${monthArr[date.getMonth()]} ${date.getDate()}st of ${date.getFullYear()} is a sunday`
            }
        }
    } else {
        document.getElementById("msgContainer").innerText = "Please get help!";
    }
    check.style.display = "none";
    list.style.display = "none";
    reloadPage.style.display = "inline";
    year.style.display = "none";
}

function reload() {
    location.reload();
}
