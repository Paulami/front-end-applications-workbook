# Front End Applications Workbook

This repo accompanies [Week 3 of the DWD class](https://github.com/itp-dwd/2020-spring/blob/master/weeks/03_front-end-applications.md), covering the main points of the [Week 3 slides](https://docs.google.com/presentation/d/100WtCNmj6iJA8loNarUAnuLM5LoS09k2WkWhmRGJU_g/edit).


## Overview

[_template.html](workbook/_template.html)
* staring point

[00_setup](workbook/00_setup/index.html)
**Challenge**

* Create a JavaScript file and include it in the HTML
* Create a CSS file and include it in the HTML
* Add boilerplate CSS

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

[03_onclick-event](workbook/03_onclick-event/index.html)
**Challenge**

* Create a `<button>` in HTML - Give it a meaningful class name.
* Create an `onclick` handler by selecting the button by its class name.
* When this button is pressed, add a `<p>` to the body that has some text inside.

[04_remove-from-dom](workbook/04_remove-from-dom/index.html)
**Challenge**

* Create a `<div>` that contains a `<p>` and a `<button>` - Give them a meaningful class names.
* Select the button by its class name and add an `onclick` handler function
* When that `<button>` is pressed, remove the whole `<div>`

[05_update-dom-element](workbook/05_update-dom-element/index.html)
**Challenge**

* Create a `<div>` that contains a `<p>` and a `<button>` - Give them meaningful class names.
* Create an `onclick` handler by selecting the button
* When that `<button>` is pressed: 
  * change the text using template strings
  * change the background color to a random color

[06_input-value](workbook/06_input-value/index.html)
**Challenge**

* Add a header that says `"Todo List"`
* Create a div that contains a `<input type="text">` and a button - Give it a meaningful class name.
* Create an `<ul>` to contain the todos from your todo list
* Add an event listener to that button so that when you click the `<button>`, the text from the inputs gets inserted onto the body as a `<li>`
* Make sure when you click the button, the `<input>` value is cleared

[07_inner-html](workbook/07_inner-html/index.html)
**Challenge**
* Create a div that contains a `<input type="text">` and a button  - Give them a meaningful class names.
* Create another empty `<div>`
* Add placeholder text to the `<input>`
* Add a header that says "Daily Wisdom"
* When you click the `<button>`, the text is inserted into a `<p>` tag using a template string
* The `<p>` gets inserted into the innerHTML of a different `<div>`
* When you click the button, the `<input>` value is cleared

[08_for-each](workbook/08_for-each/index.html)
**Challenge**
* Create a div that contains a <input type="text"> and a button
* Add a header that says "Todo List"
* When you click the <button>, the text is pushed into an array
* The array is converted to a list of <li> strings
* The <li>'s are inserted into the <ul> using innerHTML
* When you click the button, the <input> value is cleared

[09_fetch-api](workbook/09_fetch-api/index.html)
**Challenge**
* Create a <button> that says "Random dog"
* Add an <img> to hold this image
* Figure out the URL to fetch a random dog image from the [dog.ceo API](https://dog.ceo/dog-api/)
* Add an event handler to the button to fetch the image
* use the fetch API to request the image from JS
* Set the src of an image equal to the response image url

[10_fetch-api-async-await](workbook/10_fetch-api-async-await/index.html)
**Challenge**
* Create a <button> that says "Random dog"
* Add an <img> to hold this image
* Figure out the URL to fetch a random dog image from the [dog.ceo API](https://dog.ceo/dog-api/)
* Add an event handler to the button to fetch the image
* use the fetch API to request the image from JS, using async/await
* Set the src of an image equal to the response image url

[11_star-wars-api](workbook/11_star-wars-api/index.html)
**Challenge**
* Get a list of characters from the [Star Wars API](https://swapi.co/api/)
* Write a function that takes this list as JSON and returns a string
* Set this string to the innerHTML of a div

[12_code-organization](workbook/12_code-organization/index.html)
**Challenge**
* Use an <input> to change the `search` parameter of the star wars api
* Put different components/event handlers in different files

[13_final](workbook/13_final/index.html)
No challenge, just the final outcome :)


## APIs
* https://jsonplaceholder.typicode.com/
* https://swapi.co/documentation
* https://ron-swanson-quotes.herokuapp.com/v2/quotes
* https://dog.ceo/dog-api/