const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const userName = document.getElementById("user-name");
const today = document.getElementById("today");

const HIDDEN = "hidden";
const USER_KEY = "user";

function onSubmitUserName(event) {

    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USER_KEY, username);
    loginForm.classList.add(HIDDEN);
    sayHello(username);
}

function sayHello (username) {

    userName.classList.remove(HIDDEN);
    today.classList.remove(HIDDEN);
    userName.innerText = `Hello, ${username}`;
    date();
}

const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName == null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onSubmitUserName);

} else {
    
    loginForm.classList.add(HIDDEN);
    sayHello(savedUserName);
}


function date () {
    const todayDay = new Date();
    const year = todayDay.getFullYear();
    const month = String(todayDay.getMonth()+1).padStart(2, "0");
    const day = String(todayDay.getDate()).padStart(2,"0");
    
    today.innerText = `Today is ${year}/ ${month}/ ${day}`;

}








