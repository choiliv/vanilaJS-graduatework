const clock = document.getElementById("clock");

function getClock() {
const today = new Date();

const hours = String(today.getHours()).padStart(2, "0");
const minute = String(today.getMinutes()).padStart(2, "0");
const seconds = String(today.getSeconds()).padStart(2, "0");

clock.innerText = `${hours}:${minute}:${seconds}`;

}

getClock();
setInterval(getClock, 1000);