const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const todoList = document.getElementById('todo-list');



let todoArray = [];



function saveTodo(newTodo) {
    localStorage.setItem("todo", JSON.stringify(todoArray));
}




function handleCloseBtn(event) {
   const li =  event.target.parentElement;
    todoArray = todoArray.filter((toDo) => toDo.id != parseInt(li.id));
   li.remove();
   saveTodo();
   
}


 


function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    todoList.appendChild(li);
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodoObj.name;
    const button = document.createElement('button');
    li.appendChild(button);
    button.innerText = 'X';
    button.addEventListener('click', handleCloseBtn)
}


function handleInputValue(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        name: newTodo
    }
    todoArray.push(newTodoObj);
    saveTodo(newTodoObj);
    paintToDo(newTodoObj);
}




toDoForm.addEventListener('submit', handleInputValue);


const parseSaved = JSON.parse(localStorage.getItem("todo"));


if(parseSaved !== null) {
    todoArray = parseSaved;
   parseSaved.forEach(paintToDo);
}
