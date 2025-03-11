const loginFrom = document.getElementById("login-form");
const loginInput = loginFrom.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    // e.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username)
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `HELLO ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginFrom.classList.remove(HIDDEN_CLASSNAME);
    loginFrom.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}
/**
 * form 태그로 대체
const loginInput = loginFrom.querySelector("input");
const loginButton = loginFrom.querySelector("button");
function onLoginBtnClick() {
    const yourName = loginInput.value;
    if (yourName === "") {
        alert("Please write your name!");
    } else if (yourName.length > 15) {
        alert("Your name is too long.");
    }
}
loginButton.addEventListener("click", onLoginBtnClick);
 */