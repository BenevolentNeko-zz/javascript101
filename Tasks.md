# Javascript101 project
## Resources to help
MDN: https://developer.mozilla.org/bm/docs/Web/JavaScript
learnXinY: https://learnxinyminutes.com/docs/javascript/

## Building a social media site

1. Start a project from scratch
2. Define a variable and print it to the console with the function: `console.log`
3. Create a DOM element in the HTML document for your javascript to interact with
```html
<div id="myAmazingElement"></div>
```
4. Retrieve the reference to the element and add some text to it - `document.getElementById`
5. Define an array of unique data items to post on the page
```js
const dataStructure = {
    userId: 34,
    id: 123450,
    title: "some title",
    body: "some body text"
}
```
6. Iterate through the data items and print to the console
7. Create a suitable element to display the text using javascript, adding the new elements to the DOM as you go
8. Instead of using hardcoded data, use data from the api documented here: https://jsonplaceholder.typicode.com/
9. Display a news feed from the posts: https://jsonplaceholder.typicode.com/posts
10. Retrive and display user information from: https://jsonplaceholder.typicode.com/users
11. Display the last three comments on each post from: https://jsonplaceholder.typicode.com/comments
12. Retrive and display user's posts from: https://jsonplaceholder.typicode.com/posts
13. Style the HTML (using CSS) to make it look beautiful!
14. Build a Node server which serves the HTML file and assets.  See: http://koajs.com/
15. Use Node modules from https://www.npmjs.com to clean up code previously written
16. Modularise your code using exports/imports
17. Write unit tests for all of your public functions: https://mochajs.org/
