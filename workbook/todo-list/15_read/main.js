window.addEventListener('DOMContentLoaded', function () {
  bindButton();
});

// create array to store todos
const todos = [];

function bindButton() {
  const button = document.getElementById("add-todo");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  button.onclick = function () {
    const todo = input.value;
    todos.push(todo);
    let todoHTML = "";

    // forEach is like a for loop but better
    // the function here is called an iterator function
    todos.forEach(function (todo) {
      todoHTML += `<li>${todo}</li>`;
    });
    
    list.innerHTML = todoHTML;
    input.value = "";
  };
}