window.addEventListener('DOMContentLoaded', function () {
  // Select the button from the DOM using its id
  const button = document.getElementById("add-button");
  // Assign a function to onclick that is executed when the button is clicked
  button.onclick = function () {
    const paragraph = document.createElement("p");
    const animalSounds = ["meow", "woof", "bah", "hiss"]
    paragraph.textContent = animalSounds[Math.floor(Math.random() * 4)];
    document.body.appendChild(paragraph);
  }
});