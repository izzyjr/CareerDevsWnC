//Version 3

var myComputer = {          // Object
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

console.log(myComputer.purchaseYear)

var gordon = {              // Method = a function on an object. property = function
    name: 'Gordon',
    sayName: function ( ){
        console.log(this.name);
    }
};

gordon.sayName( )

var todos = ['item 1', 'item 2', 'item 3']; 

// Functions as properties in objects are known as methods

 var todoList = {
    todos: ['item 1', 'item 2', 'item 3'], // todos array as a property in an object
    
    displayTodos: function ( ){             //Method to display todos
        console.log('My Todos:', this.todos);
    },
    addTodo: function (todo) {   //Method to add todos    
    this.todos.push(todo);
    this.displayTodos( );
    },
    changeTodo: function (position, newValue){    //Method to change todos
    this.todos[position] = newValue;
    this.displayTodos( );
    },
    deleteTodo: function (position, numItems){    //Method to delete todos
    this.todos.splice(position, numItems);
    this.displayTodos( );
    },
};

todoList.displayTodos( )

todoList.addTodo('c9')

todoList.changeTodo(0, 'number one')

todoList.deleteTodo(3, 1)






 



