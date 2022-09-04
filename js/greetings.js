const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_GREETING = 'hidden';
const USERNAME_KEY = 'username';



function handleLinkClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem('username', username);
    loginForm.classList.add(HIDDEN_GREETING);
    console.log(username);
    paintGreeting(username);
   
}
 
function paintGreeting(username) {
    greeting.innerText = `hello  ${username}`;
    greeting.classList.remove(HIDDEN_GREETING);
}



const savedlocalname = localStorage.getItem(USERNAME_KEY);


if(savedlocalname === null) {
    // form을 보여주세요 
    loginForm.classList.remove(HIDDEN_GREETING);
    loginForm.addEventListener('submit', handleLinkClick);
} else {
    //form을 없애주세요
    paintGreeting(username);

}
 