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

var handlers = {
    displayTodos: function( ){
        todoList.displayTodos( );
    },
    toggleAll: function( ){
        todoList.toggleAll( );
    },
    addTodo: function( ){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        // ^ There should be a button for adding todos
    },
    changeTodo: function( ){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.valueAsNumber = '';
        changeTodoTextInput.value = '';
    },
        // ^ There should be a button for changing todos
    deleteTodo: function( ){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        var deleteTodoNumItemsInput = document.getElementById('deleteTodoNumItemsInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber, deleteTodoNumItemsInput.valueAsNumber);
        deleteTodoPositionInput.valueAsNumber = '';
        deleteTodoNumItemsInput.valueAsNumber = '';
    },
        // ^ There should be a buttton for deleting todos
    toggleCompleted: function ( ){
        var toggleCompletedTodoPositionInput = document.getElementById('toggleCompletedTodoPositionInput');
        todoList.toggleCompleted(toggleCompletedTodoPositionInput.valueAsNumber);
        toggleCompletedTodoPositionInput.value = '';
    }
    //  ^ There should be a button for toggling completed todos
    
};



