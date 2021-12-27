const todoForm = document.querySelector('#todo_form');
const todoInput = document.querySelector('#todo_form input');
const todoLi = document.querySelector('#todo_li');

const SAVETODOS_KEY = "todos";
let todos = []; //ui에 구현된 new To Do 저장할 빈 배열 세팅

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));//지우고 싶은 id를 제외한다.
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerHTML = "❌";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerHTML = newTodo.text;
    todoLi.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""; //submit 후 input창 비워짐
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }; // localstorage에 들어갈 데이터 세팅
    todos.push(newTodoObj); // todos배열에 추가 
    paintTodo(newTodoObj); // ui 구현
    saveTodos(); // localstorage 저장
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(SAVETODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);//json string을 배열화시킴
    todos = parsedTodos; //이전 데이터 호출, 새로 추가하면서 기존것 덮어씌우는 것 방지.
    parsedTodos.forEach(paintTodo); //배열 item 각각 function 실행
}