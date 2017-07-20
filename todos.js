//Version 6

var todoList = {
    todos: [], 
    
    displayTodos: function ( ){     //displays todoText within each Object added in the array todos         
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
        if (completedTodos === totalTodos) {        //if everything is true make everything false
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }
        else {                                      //otherwise make everything true
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    },
};

// todoList.addTodo('item 1') 
// todoList.addTodo('item 2')
// todoList.addTodo('item 3')

// todoList.toggleCompleted(0)
// todoList.toggleCompleted(1)
// todoList.toggleCompleted(2)

// todoList.toggleAll()
// todoList.displayTodos()

todoList.addTodo('item 1')
todoList.addTodo('item 2')
todoList.addTodo('item 3')

todoList.toggleCompleted(0)



todoList.toggleAll()








