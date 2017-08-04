//Version 10
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
    deleteTodo: function (position){    
    this.todos.splice(position);
    
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
    deleteTodo: function(position){
        todoList.deleteTodo(position);
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
            todoLi.id = i;
            // ^ Each li should have an id that has the todos position
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton( )); 
            // ^ There should be a delete button for each todos
            todosUl.appendChild(todoLi);
        }
        //  ^ There should be an element for each todos
    //  ^ Each li element should containe .todotext
    //  ^ Each li element should show .completion
    },
    createDeleteButton: function( ){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    // There should be a way to create delete buttons
    setUpEventListeners: function( ) {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event) {
            // Get element that was clicked on
            var elementClicked = event.target;
            
            // Check if elementClicked is a deleteButton
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};


view.setUpEventListeners();
























