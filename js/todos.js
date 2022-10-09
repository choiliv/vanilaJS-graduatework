
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODO_KEY= "todos";

function savedToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedToDos();
 }

function inputToDos(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";     /*input칸 비워둠*/
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    inputToDoList(newToDoObj);
    savedToDos();

}


function inputToDoList(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const button = document.createElement("button");
    button.innerText =  "❄️";
    button.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", inputToDos);


const savedList = localStorage.getItem(TODO_KEY);

if(savedList !== null) {
    const parsedToDos = JSON.parse(savedList);
    toDos = parsedToDos;
    parsedToDos.forEach(inputToDoList);
}