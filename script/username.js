const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const welcome = document.querySelector("#welcome");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    welcome.innerHTML = `Hi, ${username}. Have a nice today:)`;
    welcome.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {     
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", loginSubmit);
} else {    
    welcome.innerHTML = `Hi, ${savedUsername}. Have a nice today:)`;
    welcome.classList.remove(HIDDEN_CLASSNAME);
}