const loginFrom = document.getElementById("login-form");
const loginInput = loginFrom.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  // e.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginFrom.addEventListener("submit", onLoginSubmit);
} else {
  location.href = "myMemo.html";
}
