window.addEventListener('DOMContentLoaded', function () {
  // Create the element
  const paragraph = document.createElement("p");
  // Add text content so we can see it
  paragraph.textContent = "Hello from JavaScript!";
  // Add the element to the DOM
  document.body.appendChild(paragraph);
});