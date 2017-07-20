// Version 5 - For Loops

//i = 0 - Initialization
//Say "Hey" IF i < 3 - Condition
//Increase i by 1 - Final-Expression

//0 "Hey"
//1 "Hey"
//2 "Hey"
//3 i is no longer < 3

// for(Initialization, Condition, Final-Expression) {
// console.log("Hey");
//}

// for (var i = 0; i < 3; i++) {
    // console.log("Hey");
// }
 
// for (var i = 0; i < 3; i++) {
    // console.log(i);
// }

// var testArray = ['item 1', 'item 2', 'item 3'];

// for (var i = 0; i < testArray.length; i++) {
    // console.log(i);
    // console.log(testArray[i]);
// }

// testArray.push('extra item')

//for (var i = 0; i < testArray.length; i++) {
    // console.log(i);
    // console.log(testArray[i]);
// }

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
            console.log ('()', this.todos[i].todoText);
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
        
    }
};

todoList.addTodo('code!')

todoList.toggleCompleted(0)






 



