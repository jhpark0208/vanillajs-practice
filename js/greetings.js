const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNMAE_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); // Stop Default Behavior

    const { value } = loginInput
    loginForm.classList.add(HIDDEN_CLASSNAME)

    paintGreetings(value)

    localStorage.setItem(USERNMAE_KEY, value)
}

function paintGreetings(username) {
    // show h1
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`
}

const savedusername = localStorage.getItem(USERNMAE_KEY)
if (savedusername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else {
    paintGreetings(savedusername)
}