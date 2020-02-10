window.addEventListener('DOMContentLoaded', function () {
  bindButton();
});

function bindButton() {
  const button = document.getElementById("random-dog");
  const img = document.getElementById("dog-img");
  const URL = "https://dog.ceo/api/breeds/image/random";
  button.onclick = function () {
    // remember https://p5js.org/reference/#/p5/loadJSON ?
    // the function in .then is called when the API
    // request is completed
    // this is called a Promise
    // the () => {} is special shorthand for function
    fetch(URL).then((response) => {
      // response.JSON also creates a Promise
      return response.json();
      // you can chain Promises together like this
    }).then((dog) => {
      const dogURL = dog.message;
      img.src = dogURL;
    })
  };
}