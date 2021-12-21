const todoForm=document.querySelector('#todo_form');
const todoInput=document.querySelector('#todo_form input');
const todoLi=document.querySelector('#todo_li');

const SAVETODOS_KEY="todos";
let todos=[];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    todos=todos.filter((todo)=>todo.id !==parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    const btn=document.createElement("button");
    btn.innerHTML="❎";
    btn.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerHTML=newTodo.text;
    todoLi.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos=localStorage.getItem(SAVETODOS_KEY);

if(savedTodos!==null){
    const parsedTodos=JSON.parse(savedTodos);
    todos=parsedTodos;
    parsedTodos.forEach(paintTodo);
}