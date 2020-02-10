window.addEventListener('DOMContentLoaded', function () {
  // best practice is to make separate functions for each
  // component, in case you have a lot of event handlers
  getTodos();
  bindButton();
});

function renderTodos(todos) {
  const container = document.getElementById("todo-container");
  container.innerHTML = TodoList(todos);
}

async function getTodos() {
  const URL = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(URL);
  const todos = await response.json();
  // just take the first 10 todos
  renderTodos(todos.slice(0, 10));
}

function TodoList(todos) {
  return `<ul>${todos.map(todo => TodoItem(todo)).join('')}</ul>`;
}

function TodoItem(todo) {
  return `<li>${todo.title}</li>`
}

function bindButton() {
  const button = document.getElementById("add-todo");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  button.onclick = function () {
    const item = document.createElement("li");
    // .value contains what's in the text box
    item.innerText = input.value;
    list.appendChild(item);
    // set value to empty string to clear it
    input.value = "";
  };
}