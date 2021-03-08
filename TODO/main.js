let list = document.getElementById("todo-list");

let listElement = new TodoList(list);

function addTodoToList(){
    let input = document.getElementById("input").value;
    if(input == "")
    alert("Please write somethings");
    else
    listElement.addTodo(input);
    document.getElementById("input").value = "";
}

function removeTodoFromList(){
    let listUpdated = document.getElementById("todo-list");
    listElement.removeTodo();
}