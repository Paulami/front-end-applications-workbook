window.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById("change-button");
  // rather than find the <p> tag every time the function
  // is called, why not store a reference to it?
  const description = document.getElementById("description");
  const positiveWords = ["fun", "joyful", "exciting"];
  button.onclick = function (event) {
    const word = positiveWords[Math.floor(Math.random()*positiveWords.length)];
    // Template strings allow you to easily use variables in strings
    description.textContent = `Writing JavaScript is so ${word}!`;

    // remind you of p5.js?
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    // use <element>.style to access its CSS attributes
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
});