window.addEventListener('DOMContentLoaded', function () {
  // best practice is to make separate functions for each
  // component, in case you have a lot of event handlers
  bindButton();
});

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