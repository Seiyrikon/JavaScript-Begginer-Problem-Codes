const date = new Date();
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const halfPoint = 12;
let ampm = '';
function getDay() {
    document.getElementById("date").innerText = dayArr[date.getDay()];
}

let getHours = date.getHours();
let getMinutes = date.getMinutes();
let getSeconds = date.getSeconds();

function getTime() {
    if (getHours > halfPoint) {
        ampm = 'PM'
        getHours -= halfPoint;
        document.getElementById("time").innerText = `${getHours} ${ampm} : ${getMinutes} : ${getSeconds}`;
    } else {
        ampm = 'AM'
        document.getElementById("time").innerText = `${getHours} ${ampm} : ${getMinutes} : ${getSeconds}`;
    }
}

getTime();
getDay();