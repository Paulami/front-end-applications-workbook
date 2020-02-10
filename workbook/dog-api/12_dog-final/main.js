// changing everything to arrow functions!
window.addEventListener('DOMContentLoaded', () => {
  bindButton();
});

// global scope functions should still be regular functions
function bindButton() {
  const button = document.getElementById("random-dog");
  const img = document.getElementById("dog-img");
  const URL = "https://dog.ceo/api/breeds/image/random";

  // to use await, the function must be marked as async
  button.onclick = async () => {
    const response = await fetch(URL);
    const dog = await response.json();
    const dogURL = dog.message;
    img.src = dogURL;
  };
}