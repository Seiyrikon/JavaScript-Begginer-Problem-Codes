const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
    msgContainer = document.getElementById("msgContainer");

function checkRemainingDays() {
    const currentDate = new Date(),
        inputDate = document.getElementById("date").value,
        date = new Date(inputDate);

    if (inputDate === '') {
        msgContainer.innerText = `You must pick a date.`;
    } else {
        let timeDifference = date.getTime() - currentDate.getTime();
        let daysBefore = timeDifference / (1000 * 3600 * 24);
        let roundedDays = Math.round(daysBefore);

        if (roundedDays > 0) {
            msgContainer.innerText = `${roundedDays} day/s remaining before ${monthArr[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}.`;
        } else if (roundedDays < 0) {
            const convertToPositive = Math.abs(roundedDays);
            msgContainer.innerText = `${monthArr[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} already passed ${convertToPositive} day/s ago.`;
        } else {
            msgContainer.innerText = `${monthArr[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} is today.`
        }
    }
}