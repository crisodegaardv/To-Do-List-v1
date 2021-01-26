//Selectors
const inp = document.querySelector('.inp');
const btn = document.getElementById('form-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
/* Forma 1
btn.addEventListener('click', function(e) {
    e.preventDefault();
});
*/
//Forma 2
btn.addEventListener('click', addTodo);

//Functions
function addTodo(e) {
    e.preventDefault();
    console.log("btn works")
}


