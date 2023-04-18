const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
                    console.log(`${monthArr[date.getMonth()]} ${date.getDate()}st of ${x} is not a sunday`)
                } else {
                    console.log(`${monthArr[date.getMonth()]} ${date.getDate()}st of ${x} is a sunday`)
                }
            }
        }
    } else {
        document.getElementById("msgContainer").innerText = "Please get help!";
    }
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
}

