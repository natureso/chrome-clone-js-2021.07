const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify : array에 들어있는 것을 string 으로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement; //event.target == :"X"button --> parentElement == li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "❌";    
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span); //Li아래 Span을 넣어준 것
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사하는 것.
    toDoInput.value =""; //input칸을 빈 칸으로 비워주는 것.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //각 todo에 랜덤한 id를 배정해주는 것.
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //비어있던  toDos array가 채워짐.
    parsedToDos.forEach(paintToDo); //forEach함수는 paintTodo를 parsedToDos 배열의 요소마다 실행함.
}