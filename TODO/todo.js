const list = document.getElementById("todo-list");
const addTask = document.querySelector(".addTask");
const input = document.getElementById("input");

class TodoList{
    constructor(list) {
        this.todoList = list;
    }

    addTodo(text) {           
        const html = `
        <li class="li">
            ${text}
            <button class="checked">V</button>
            <button class="close">X</button>
        </li>
        `
        list.innerHTML += html;
    } 
    
    removeTodo(e) {
        if(e.target.classList.contains("close")){
            e.target.parentElement.remove();
        }

        if(e.target.classList.contains("checked")){
            e.target.parentElement.classList.toggle("check");
        }    
    }
}

const todo = new TodoList(list);

addTask.addEventListener("click", function(){
    if(input.value == ""){
        alert("type data");
    }
    else{
        todo.addTodo(input.value);
        input.value = "";
    }
    
})

list.addEventListener("click", function(e){
    todo.removeTodo(e);
})
