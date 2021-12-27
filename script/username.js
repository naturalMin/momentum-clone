const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const welcome = document.querySelector("#welcome");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 후 login form 숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    welcome.innerHTML = `Hi. ${username}. Have a nice today:)`;
    welcome.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //유저정보가 없다면,
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //login form 숨김처리 해제
    loginForm.addEventListener("submit", loginSubmit);
} else {
    //show the greeting
    welcome.innerHTML = `Hi. ${savedUsername}. Have a nice today:)`;
    welcome.classList.remove(HIDDEN_CLASSNAME);
}