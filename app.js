var myVariable = "some String";
myVariable = 123;
const myUnchangingValue = "some other string";
let blockScopedVariable = "whatever";
console.log(myVariable);
console.log(myUnchangingValue);
console.log(blockScopedVariable);

const rootContainer = document.getElementById("app-root");
const paragraphIntro = document.createElement("p");
paragraphIntro.innerText = "Welcome to BlueBook";
rootContainer.appendChild(paragraphIntro);

function addPostToBody(title, body){
    const newsFeed = document.createElement("div");
    const newsFeedTitle = document.createElement("h3");
    newsFeedTitle.innerText = title;
    const newsFeedContent = document.createElement("p");
    newsFeedContent.innerText = body;
    newsFeed.appendChild(newsFeedTitle);
    newsFeed.appendChild(newsFeedContent);
    
    rootContainer.appendChild(newsFeed);
}

function initialise(){
    http.get("https://jsonplaceholder.typicode.com/posts").then(async function(posts){
        for (let i =0; i < posts.length; i++){
            let post = posts[i];
            console.log(post.id, post.body);
            addPostToBody(post.title, post.body);
        }
    });
}

const http = {
    get: function(url){
        const request = new XMLHttpRequest();
        const promiseToReturnData = new Promise(function(resolve, reject){
            request.onreadystatechange = function(){
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200){
                    resolve(JSON.parse(request.response));
                } else if (request.readyState === XMLHttpRequest.DONE) {
                    throw new Error(request);
                    reject();
                }
            }
        });
        request.open("GET", url);
        request.send();
        return promiseToReturnData;
    }
};

initialise();