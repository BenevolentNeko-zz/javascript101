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

function getNewsFeedItem(name, title, body, comments){
    const postContainer = document.createElement("li");
    postContainer.classList.add("post");
    const newsFeedTitle = document.createElement("h3");
    const newsFeedUserName = document.createElement("u");
    newsFeedUserName.id = `user-link-${Math.random()}`;
    newsFeedUserName.innerText = name;
    newsFeedTitle.appendChild(newsFeedUserName);
    newsFeedTitle.innerHTML += ` - ${title}`;
    const newsFeedContent = document.createElement("p");
    newsFeedContent.innerText = body;
    postContainer.appendChild(newsFeedTitle);
    postContainer.appendChild(newsFeedContent);
    const commentsContainer = document.createElement("ol");
    for (let i = 0; i< comments.length; i++){
        const comment = document.createElement("li");
        comment.innerText = comments[i].body;
        commentsContainer.appendChild(comment);
    }
    postContainer.appendChild(commentsContainer);
    
    return {
        element: postContainer,
        ref: newsFeedUserName.id
    };
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

async function getComments(id){
    let comments = await http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return comments.slice(-3);
}

function initialise(){
    let domRefs = [];
    http.get("https://jsonplaceholder.typicode.com/posts").then(async function(posts){
        const newsFeed = document.createElement("ul");        
        for (let i =0; i < 10; i++){
            const post = posts[i];
            const user = await getUser(post.userId);
            const comments = await getComments(post.id);
            const newsFeedItem = getNewsFeedItem(user.name, post.title, post.body, comments);
            newsFeed.appendChild(newsFeedItem.element);
            domRefs.push({
                userId: post.userId,
                domReference: newsFeedItem.ref
            });
        }
        rootContainer.appendChild(newsFeed);
    }).then(function(){
        for (let i = 0; i < domRefs.length; i++){
            const userLink = document.getElementById(domRefs[i].domReference);
            userLink.addEventListener("click", getDisplayUserFunction(domRefs[i].userId));
        }
    });
}

function getDisplayUserFunction(userId){
    return async function(e){
        let user = await http.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
        alert(JSON.stringify(user));
    }
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