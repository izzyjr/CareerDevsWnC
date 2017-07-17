//Version 4

var todoList = {
    todos: [], // todos array ( which contains an object) is a property in an object
    
    displayTodos: function ( ){             //Method to display todos
        console.log('My Todos:', this.todos);
    },
    addTodo: function (todoText) {   //Method to add todos    
    this.todos.push({
        todoText: todoText,
        completed: false // Boolean true or false
    });
    this.displayTodos( );
    },
    changeTodo: function (position, todoText){    //Method to change todos
    this.todos[position].todoText = todoText;
    // this.todos[position] = newValue;
    this.displayTodos( );
    },
    deleteTodo: function (position, numItems){    //Method to delete todos
    this.todos.splice(position, numItems);
    this.displayTodos( );
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
        
    }
};

//todoList.displayTodos( )

//todoList.addTodo('this is an Object')

//todoList.changeTodo(0, 'second try')

todoList.addTodo('boolean testing')

todoList.toggleCompleted(0)









 



