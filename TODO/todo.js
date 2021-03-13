const list = document.querySelector(".task")
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
        const child = this.todoList.children;
        for (let i = 0; i < child.length; i++) {
                child[i].style.display = "block";
        }
    } 
    
    removeTodo(e) {
        if(e.target.classList.contains("close")){
            e.target.parentElement.remove();
        }

        if(e.target.classList.contains("checked")){
            e.target.parentElement.classList.toggle("check");
        }    
    }
    searchTodo(value) {
        const child = this.todoList.children;
        for (let i = 0; i < child.length; i++) {
            const textCt = child[i].textContent;
            if(textCt.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                child[i].style.display = "block";
            }else{
                child[i].style.display = "none";
            }
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
input.value ="";
    }
    
})

list.addEventListener("click", function(e){
    todo.removeTodo(e);
})

input.addEventListener("input", function(){
    todo.searchTodo(input.value);
})