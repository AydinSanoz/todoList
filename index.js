const todoList = [];

const todoListElement = document.querySelector('#myUL')

document.querySelector('#todo_button').addEventListener('click',addTodo)

function addTodo (){
    const todotext = document.querySelector('#myInput').value
    
    
    
    
    const todoObject = {
        id: todoList.length,
        todoText: todotext,
        isDone: false,
    };
    
    todoList.push(todoObject)
}
