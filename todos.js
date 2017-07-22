//Version 8

var todoList = {
    todos: [], 
    
    displayTodos: function ( ){              
        if (this.todos.length === 0) {
            console.log('your todo list is empty!')
        }
        else {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
            console.log ('(x)', this.todos[i].todoText);
            }
        else {
            console.log ('( )', this.todos[i].todoText);
            }
        }
        }
    },
    addTodo: function (todoText) {       
    this.todos.push({
        todoText: todoText,
        completed: false 
    });
    this.displayTodos( );
    },
    changeTodo: function (position, todoText){    
    this.todos[position].todoText = todoText;
    
    this.displayTodos( );
    },
    deleteTodo: function (position, numItems){    
    this.todos.splice(position, numItems);
    this.displayTodos( );
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
        
    },
    toggleAll: function( ){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        for (var i = 0; i < this.todos.length; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {        
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }
        else {                                      
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    },
};


//1.) We want to get access to the button.
// var displayTodosButton = document.getElementById('displayTodosButton'); 

// var toggleAllButton = document.getElementById('toggleAllButton');

//2.) We want to run the  method when someone clicks the button.

// todoList.addTodo("first item")

// displayTodosButton.addEventListener('click', function( ){
    // todoList.displayTodos( );
// })

// toggleAllButton.addEventListener('click', function( ){
    // todoList.toggleAll( );
// })

// ^ All of this code is no longer needed becuase of refactoring


var handlers = {
    displayTodos: function( ){
        todoList.displayTodos( );
    },
    toggleAll: function( ){
        todoList.toggleAll( );
    }
    
};



