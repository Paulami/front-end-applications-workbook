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

async function createTodo(todo) {
  const URL = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: todo,
      userId: 1,
      completed: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const savedTodo = await response.json();
  return savedTodo;
}

function TodoList(todos) {
  return `<ul id="todo-list">${todos.map(todo => TodoItem(todo)).join('')}</ul>`;
}

function TodoItem(todo) {
  return `<li>${todo.title}</li>`
}

function bindButton() {
  const button = document.getElementById("add-todo");
  const input = document.getElementById("todo-input");
  button.onclick = async function () {
    // make POST to API!
    const newTodo = await createTodo(input.value);

    input.value = "";
    const list = document.getElementById("todo-list");
    const item = document.createElement("li");

    // use value from api response
    item.innerText = newTodo.title;
    list.appendChild(item);
  };
}