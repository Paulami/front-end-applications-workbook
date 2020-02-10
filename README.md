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
[01_add-to-dom](workbook/basic-dom/01_add-to-dom/index.html)
**Challenge**
* Add a <p> tag to the <body>

[02_onclick-event](workbook/basic-dom/02_onclick-event/index.html)
**Challenge**
* Create a <button> in HTML
* Create an `onclick` handler by selecting the button
* When this button is pressed, add a <p> to the body

[03_remove-from-dom](workbook/basic-dom/03_remove-from-dom/index.html)
**Challenge**
* Create a <div> that contains a <p> and a <button>
* Create an `onclick` handler by selecting the button
* When that <button> is pressed, remove the whole <div>

[04_update-dom-element](workbook/basic-dom/04_update-dom-element/index.html)
**Challenge**
* Create a <div> that contains a <p> and a <button>
* Create an `onclick` handler by selecting the button
* When that <button> is pressed, change the text using template strings
* When the <button> is pressed, change the background color to a random color

[05_dom-final](workbook/05_dom-final_/index.html)
Final solution for DOM example

[inner-html](workbook/basic-dom/inner-html)
**Extra Challenge**
* Create a div that contains a <input type="text"> and a button
* Create another empty <div>
* Add placeholder text to the <input>
* Add a header that says "Daily Wisdom"
* When you click the <button>, the text is inserted into a <p> tag using a template string
* The <p> gets inserted into the innerHTML of a different <div>
* When you click the button, the <input> value is cleared

### Todo List
[boilerplate](workbook/boilerplate)

[07_input-value](workbook/07_input-value/index.html)
**Challenge**
* Create a div that contains a <input type="text"> and a button
* Add a header that says "Todo List"
* When you click the <button>, the text gets inserted into a <li>
* The <li> is appended to the end of a <ul>
* When you click the button, the <input> value is cleared

[08_for-each](workbook/08_for-each/index.html)
**Challenge**
* Create a div that contains a <input type="text"> and a button
* Add a header that says "Todo List"
* When you click the <button>, the text is pushed into an array
* The array is converted to a list of <li> strings
* The <li>'s are inserted into the <ul> using innerHTML
* When you click the button, the <input> value is cleared

[15_read](workbook/13_read/index.html)
**Challenge**
* Using the [JSON Placeholder API](https://jsonplaceholder.typicode.com),
* Recreate the TODO app, but data is pulled from this API

[16_create]
**Challenge**
* Create a todo by making a POST request to the JSON Placeholder API

### Dog API
[boilerplate](workbook/dog-api/boilerplate)

[09_fetch-api](workbook/dog-api/09_fetch-api/index.html)
**Challenge**
* Create a <button> that says "Random dog"
* Add an <img> to hold this image
* Figure out the URL to fetch a random dog image from the [dog.ceo API](https://dog.ceo/dog-api/)
* Add an event handler to the button to fetch the image
* use the fetch API to request the image from JS
* Set the src of an image equal to the response image url

[10_fetch-api-async-await](workbook/dog-api/10_fetch-api-async-await/index.html)
**Challenge**
* Create a <button> that says "Random dog"
* Add an <img> to hold this image
* Figure out the URL to fetch a random dog image from the [dog.ceo API](https://dog.ceo/dog-api/)
* Add an event handler to the button to fetch the image
* use the fetch API to request the image from JS, using async/await
* Set the src of an image equal to the response image url

[11_dog-final](workbook/dog-api/11_dog-final)
Final solution of dog api example

### Star Wars API
[boilerplate](workbook/star-wars-api/boilerplate)

[12_star-wars-api](workbook/star-wars-api/12_star-wars-api/index.html)
**Challenge**
* Get a list of characters from the [Star Wars API](https://swapi.co/api/)
* Write a function that takes this list as JSON and returns a string
* Set this string to the innerHTML of a div

[13_code-organization](workbook/star-wars-api/13_code-organization/index.html)
**Challenge**
* Use an <input> to change the `search` parameter of the star wars api
* Put different components/event handlers in different files

[14_star-wars-final](workbook/star-wars-api/14_star-wars-final)
Final solution for Star Wars app

## APIs
* https://jsonplaceholder.typicode.com/
* https://swapi.co/documentation
* https://ron-swanson-quotes.herokuapp.com/v2/quotes
* https://dog.ceo/dog-api/