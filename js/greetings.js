const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  alert("이름을 입력해주세요!!!");
  location.href = "index.html";
} else {
  paintGreeting(savedUsername);
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
