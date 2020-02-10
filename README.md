# Front End Applications Workbook

This repo accompanies [Week 3 of the DWD class](https://github.com/itp-dwd/2020-spring/blob/master/weeks/03_front-end-applications.md), covering the main points of the [Week 3 slides](https://docs.google.com/presentation/d/100WtCNmj6iJA8loNarUAnuLM5LoS09k2WkWhmRGJU_g/edit).


## Overview

JSON placeholder example app 
https://jsonplaceholder.typicode.com/

https://swapi.co/documentation

const ronSwansonAPI = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const starWarsAPI = "https://swapi.co/api/"

Star wars story page!!!! w/ rotating in CSS craziness!

[_template.html](workbook/_template.html)
* staring point

[00_setup](workbook/00_setup/index.html)
**Challenge**
* Create a JavaScript file and include it in the HTML
* Create a CSS file and include it in the HTML
* Add boilerplate CSS

[01_dom-loaded](workbook/01_dom-loaded/index.html)
**Challenge**
* Add an event handler tp the JS that is called when the DOM is loaded

[02_add-to-dom](workbook/02_add-to-dom/index.html)
**Challenge**
* Add a <p> tag to the <body>

[03_onclick-event](workbook/03_onclick-event/index.html)
**Challenge**
* Create a <button> in HTML
* Create an `onclick` handler by selecting the button
* When this button is pressed, add a <p> to the body

[04_remove-from-dom](workbook/04_remove-from-dom/index.html)
**Challenge**
* Create a <div> that contains a <p> and a <button>
* Create an `onclick` handler by selecting the button
* When that <button> is pressed, remove the whole <div>

[05_update-dom-element](workbook/05_update-dom-element/index.html)
**Challenge**
* Create a <div> that contains a <p> and a <button>
* Create an `onclick` handler by selecting the button
* When that <button> is pressed, change the text using template strings
* When the <button> is pressed, change the background color to a random color

[06_input-value](workbook/06_input-value/index.html)
**Challenge**
* Create a div that contains a <input type="text"> and a button
* Add a header that says "Todo List"
* When you click the <button>, the text gets inserted into a <li>
* The <li> is appended to the end of a <ul>
* When you click the button, the <input> value is cleared

[07_inner-html](workbook/07_inner-html/index.html)
**Challenge**
* Create a div that contains a <input type="text"> and a button
* Create another empty <div>
* Add placeholder text to the <input>
* Add a header that says "Daily Wisdom"
* When you click the <button>, the text is inserted into a <p> tag using a template string
* The <p> gets inserted into the innerHTML of a different <div>
* When you click the button, the <input> value is cleared

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

[10_fetch-api-async-await]

1.  fetch API - promises
2.  fetch API - async/await
3.  functional programming: json -> HTML
4.  API -> JSON -> HTML
5.  JS code organization: multiple components and files


// weave these into the main content
14. Template strings
15. Arrow functions
16. Array functions
17. Object -> array functions