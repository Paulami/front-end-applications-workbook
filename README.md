# Front End Applications Workbook

This repo accompanies [Week 3 of the DWD class](https://github.com/itp-dwd/2020-spring/blob/master/weeks/03_front-end-applications.md), covering the main points of the [Week 3 slides](https://docs.google.com/presentation/d/100WtCNmj6iJA8loNarUAnuLM5LoS09k2WkWhmRGJU_g/edit).


## Overview

[00_create-boilerplate](workbook/00_create-boilerplate)
**Challenge**

* Create a JavaScript file and include it in the HTML
* Create a CSS file and include it in the HTML
* Add boilerplate CSS
  
[boilerplate](workbook/boilerplate)

### Basic DOM

[01_dom-loaded](workbook/01_dom-loaded/index.html)

**Challenge**

* Add an event handler to the JS that is called when the DOM is loaded, two options:

   **Option 1: Using an event handler**
   ```js
   window.onload = () => {

   }
   ```
   is the same as

   ```js
   window.onload = function() {

   }
   ```
   
   **Option 2: Using an event listener**

   ```js
   window.addEventListener('DOMContentLoaded', () => {

   })
   ```
   
   is the same as:
   
   ```js
   window.addEventListener('DOMContentLoaded', function() {

   })
   ```


[02_add-to-dom](workbook/02_add-to-dom/index.html)
**Challenge**

* Add a `<p>` tag to the `<body>`. Add some text inside.
* Give the `<p>` a meaningful class name.

[03_onclick-event](workbook/basic-dom/02_onclick-event/index.html)
**Challenge**

* Create a `<button>` in HTML - Give it a meaningful class name.
* Create an `onclick` handler by selecting the button by its class name.
* When this button is pressed, add a `<p>` to the body that has some text inside.

[04_remove-from-dom](workbook/basic-dom/03_remove-from-dom/index.html)
**Challenge**

* Create a `<div>` that contains a `<p>` and a `<button>` - Give them a meaningful class names.
* Select the button by its class name and add an `onclick` handler function
* When that `<button>` is pressed, remove the whole `<div>`

[05_update-dom-element](workbook/basic-dom/04_update-dom-element/index.html)
**Challenge**

* Create a `<div>` that contains a `<p>` and a `<button>` - Give them meaningful class names.
* Create an `onclick` handler by selecting the button
* When that `<button>` is pressed: 
  * change the text using template strings
  * change the background color to a random color


[06_inner-html](workbook/basic-dom/06_inner-html)
**Extra Challenge**
* Create a div that contains a `<input type="text">` and a button  - Give them a meaningful class names.
* Create another empty `<div>` and give it the class name "wisdom".
* Add placeholder text to the `<input>`
* Add a header that says "Daily Wisdom"
* Add an event listener to your `<button>` so that when you `click` it, the value from the `<input>` gets inserted into a `<p>` tag and append it to the `.wisdom` div. 
* Make sure that the `<input>` value is cleared when the button is clicked.

[07_dom-final](workbook/07_dom-final/index.html)
Final solution for DOM example

### Todo List
[boilerplate](workbook/boilerplate)

[08_input-value](workbook/08_input-value/index.html)
* Add a header that says `"Todo List"`
* Create a div that contains a `<input type="text">` and a button - Give it a meaningful class name.
* Create an `<ul>` to contain the todos from your todo list
* Add an event listener to that button so that when you click the `<button>`, the text from the inputs gets inserted onto the body as a `<li>`
* Make sure when you click the button, the `<input>` value is cleared

[09_for-each](workbook/09_for-each/index.html)
**Challenge**

* Create a div that contains a `<input type="text">` and a button - Give them a meaningful class names.
* Add a header that says "Todo List"
* Create an empty array in your javascript and assign it to a variable called "todos".
* Add an event listener to the `<button>`, so that on `click`, the text from the `input` is pushed into the "todos" array.
* Create an `<ul>` element. 
* Use the `.forEach()` method on your array to iteratively append `<li>` strings to your `<ul>` with the content from the text in your "todos" array.
* Make sure the value of your `<input>` is cleared when the button is clicked.

[16_read](workbook/16_read/index.html)
**Challenge**
* Using the [JSON Placeholder API](https://jsonplaceholder.typicode.com),
* Recreate the TODO app, but data is pulled from this API

[17_create](workbook/17_create/index.html)
**Challenge**
* Create a todo by making a POST request to the JSON Placeholder API

### Dog API
[boilerplate](workbook/dog-api/boilerplate)

[10_fetch-api](workbook/dog-api/10_fetch-api/index.html)
**Challenge**

* Create a `<button>` that says "Random dog" - give it a meaningful class name
* Add an `<img>` to your page setting the `src` attribute to `"#"`. e.g. `<img src="#">`
* Use the [dog.ceo API](https://dog.ceo/dog-api/) and get a URL endpoint to fetch a random dog image from the API.
* Add an event handler to the button that triggers a GET request using `fetch()`. Use the `async/await` syntax to create an async function that will await the data from the API call. 
* Set the src of the image equal to the response image url. You can do this by selecting the image element with javascript, then setting the src attribute to the one you retrieved from the API.

[11_fetch-api-async-await](workbook/dog-api/11_fetch-api-async-await/index.html)
**Challenge**

* Create a `<button>` that says "Random dog" - give it a meaningful class name
* Add an `<img>` to your page setting the `src` attribute to `"#"`. e.g. `<img src="#">`
* Use the [dog.ceo API](https://dog.ceo/dog-api/) and get a URL endpoint to fetch a random dog image from the API.
* Add an event handler to the button that triggers a GET request using `fetch()`. Use the `async/await` syntax to create an async function that will await the data from the API call. 
* Set the src of the image equal to the response image url. You can do this by selecting the image element with javascript, then setting the src attribute to the one you retrieved from the API.

[12_dog-final](workbook/dog-api/12_dog-final)
Final solution of dog api example

### Star Wars API
[boilerplate](workbook/star-wars-api/boilerplate)

[13_star-wars-api](workbook/star-wars-api/13_star-wars-api/index.html)
**Challenge**

* Using the [Star Wars API](https://swapi.co/api/), Get a list of characters using the correct API endpoint.
* Create a div and give it a class name, "characters"
* Write a function that uses the `fetch()` function with the correct API URL and options to retrieve this list of characters. 
  * within this function, take the result of the `fetch()` GET request and `return` a string
* Call your function and Use the result of your custom function (the string result) and set this string to the innerHTML of the `.characters` div.

[14_code-organization](workbook/star-wars-api/14_code-organization/index.html)
**Challenge**

* Use an `<input type="text">` to dynamically `search` the star wars api with the value given in the input box. 
* Create button and attach an event listener to it that, on `click`, will trigger a GET request using the `fetch()` function to retrieve the relevant data of the star wars character. 
* Organize your code using functional programming. Think about how to break up your components into UI components. 

[15_star-wars-final](workbook/star-wars-api/15_star-wars-final)
Final solution for Star Wars app

## APIs
* https://jsonplaceholder.typicode.com/
* https://swapi.co/documentation
* https://ron-swanson-quotes.herokuapp.com/v2/quotes
* https://dog.ceo/dog-api/