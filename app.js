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

function getNewsFeedItem(name, title, body){
    const postContainer = document.createElement("li");
    const newsFeedTitle = document.createElement("h3");
    const newsFeedUserName = document.createElement("u");
    newsFeedUserName.innerText = name;
    newsFeedTitle.appendChild(newsFeedUserName);
    newsFeedTitle.innerHTML += ` - ${title}`;
    const newsFeedContent = document.createElement("p");
    newsFeedContent.innerText = body;
    postContainer.appendChild(newsFeedTitle);
    postContainer.appendChild(newsFeedContent);
    
    return postContainer;
}

const userCache = {};
async function getUser(id){
    if (userCache[id]){
        return userCache[id];
    } else {
        let user = await http.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        user = user[0];
        userCache[id] = user;
        return user;
    }
}

function initialise(){
    http.get("https://jsonplaceholder.typicode.com/posts").then(async function(posts){
        const newsFeed = document.createElement("ul");        
        for (let i =0; i < posts.length; i++){
            const post = posts[i];
            const user = await getUser(post.userId);
            const newsFeedItem = getNewsFeedItem(user.name, post.title, post.body);
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