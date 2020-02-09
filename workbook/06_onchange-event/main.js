window.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById("remove-button");
  button.onclick = function (event) {
    // event.target is the button
    console.log(event.target);
    // move up to the parent element to select the div
    event.target.parentElement.remove();
  }
});