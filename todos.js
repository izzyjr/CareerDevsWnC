//Version 9
var todoList = {
    todos: [], 
    
    addTodo: function (todoText) {       
    this.todos.push({
        todoText: todoText,
        completed: false 
    });
   
    },
    changeTodo: function (position, todoText){    
    this.todos[position].todoText = todoText;
    
    
    },
    deleteTodo: function (position, numItems){    
    this.todos.splice(position, numItems);
    
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        
        
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
        
    },
};

var handlers = {
    toggleAll: function( ){
        todoList.toggleAll( );
        view.displayTodos( );
    },
    addTodo: function( ){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos( );
        // ^ There should be a button for adding todos
    },
    changeTodo: function( ){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.valueAsNumber = '';
        changeTodoTextInput.value = '';
        view.displayTodos( );
    },
        // ^ There should be a button for changing todos
    deleteTodo: function( ){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        var deleteTodoNumItemsInput = document.getElementById('deleteTodoNumItemsInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber, deleteTodoNumItemsInput.valueAsNumber);
        deleteTodoPositionInput.valueAsNumber = '';
        deleteTodoNumItemsInput.valueAsNumber = '';
        view.displayTodos( );
    },
        // ^ There should be a buttton for deleting todos
    toggleCompleted: function ( ){
        var toggleCompletedTodoPositionInput = document.getElementById('toggleCompletedTodoPositionInput');
        todoList.toggleCompleted(toggleCompletedTodoPositionInput.valueAsNumber);
        toggleCompletedTodoPositionInput.value = '';
        view.displayTodos( );
    }
    //  ^ There should be a button for toggling completed todos
    
};

var view = {
    displayTodos:  function ( ){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';
            
            if (todo.completed === true ){
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        };
        
    }
    //  ^ There should be an element for each todos
    //  ^ Each li element should containe .todotext
    //  ^ Each li element should show .completion
};



