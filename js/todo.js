const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos"

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    todoList.appendChild(li);
    li.appendChild(button);
}

function handleTodoForm(event) {
    event.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo);

    paintToDo(newTodo);
    saveToDos();
}

function handleDoneForm(event) {
    //TODO::완료리스트 추가
    event.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo);

    paintToDo(newTodo);
    saveToDos();
}



todoForm.addEventListener('submit', handleTodoForm)


function sayHello(item) {
    console.log("this is turn of", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);


if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}