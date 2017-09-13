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

function getNewsFeedItem(title, body){
    const postContainer = document.createElement("li");
    const newsFeedTitle = document.createElement("h3");
    newsFeedTitle.innerText = title;
    const newsFeedContent = document.createElement("p");
    newsFeedContent.innerText = body;
    postContainer.appendChild(newsFeedTitle);
    postContainer.appendChild(newsFeedContent);
    
    return postContainer;
}

function initialise(){
    http.get("https://jsonplaceholder.typicode.com/posts").then(async function(posts){
        const newsFeed = document.createElement("ul");        
        for (let i =0; i < posts.length; i++){
            let post = posts[i];
            console.log(post.id, post.body);
            let newsFeedItem = getNewsFeedItem(post.title, post.body);
            newsFeed.appendChild(newsFeedItem);
        }
        rootContainer.appendChild(newsFeed);
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