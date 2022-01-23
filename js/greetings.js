const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //submit할 때 자동으로 새로고침 되는 것을 막아줌.
    loginForm.classList.add(HIDDEN_CLASSNAME); //login-form에 class="hidden"을 추가해줌.
    const username = loginInput.value; //user가 입력한 값을 username으로 저장해줌.
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); //user가 입력한 값을 불러옴
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; // = "Hello " + username; 변수를 string 안에 포함시키는 방법
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername); //localStorage에 저장된 값을 불러옴
}