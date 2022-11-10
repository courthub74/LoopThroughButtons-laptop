// JS for the crossbutton done as a form

// lets set up firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
var firebaseTodo = firebase.database().ref("firebasetodo");

// NOW lets set up the page

// whole page
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this
    const form = document.querySelector("#new-fill");
    // queryselect the input field
    const input = document.querySelector("#new-fill-input");
    // queryselect the output field
    const todo_list_element = document.querySelector("#todos-list");

    // NOW populate the list element upon the submit button
    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();

        // test print the submit button
        console.log("ToDo Submitted");

        // get the value of the 'input' variable above and store it in another variable
            // get the input by id
        const todo = input.value;

        // Error handling
            // if no value entered just alert
        if (!todo) {
            alert("Please fill out the Todo field");
            return;
        }

        // clear the input field
        input.value = '';

        // TO DATABASE
        // NOW this is where we push the todo variable to the firebaseTodo db reference
        firebaseTodo.push(todo);
        // test print the input
        console.log(todo);
    });

    // FROM DATABASE

    // test print the firebase object
    console.log(firebaseTodo);

    // utilize the on function on the db reference
    // based on value
    // pass getTodo and errTodo functions
        // getData locates fb db
        // errData test for errors
            // i.e. permissions, other blocks
    firebaseTodo.on('value', getTodo, errTodo);

    // create the getTodo function
        // pass the arg 'todoitem'
    function getTodo(todoitem){
        // test print the value of the arg
        console.log(todoitem.val());
        // store the value in a variable
        var todos = todoitem.val();
        // set variable to get the keys of each task
        var keys = Object.keys(todoitem);
        // test print the keys
        console.log(keys);
        // iterate through the todoitems entered
        for(let i in todos){
            // create a variable for the delivs iteration
            var todosall = todos[i];
            // test print
            console.log(todosall);

            // start building the list elements 
                // in the for lopp for each one
        }
    }

    // create the errTodo function
    function errTodo(err){
        console.log(err);
    }
});