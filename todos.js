function sayHiTo(person) {
    console.log('Hi', person);
}

sayHiTo('Israel')

var todos =["item 1", "item 2", "item 3",]  //function to display todos
    function displayTodos( ){
    console.log('My Todos:', todos);
 }
 
 displayTodos( )
 
function addTodo (todo) {   //function to add todos    
    todos.push(todo);
    displayTodos( );
 }
 
addTodo("hey Israel")

function changeTodo(position, newValue){    //function to change todos
    todos[position] = newValue;
    displayTodos( );
}

changeTodo(0, "just do it")

function deleteTodo(position, numItems){    //function to delete todos
    todos.splice(position, numItems);
    displayTodos( );
    
}

deleteTodo(3, 1)





