import getNewsFeedItem from './lib/getNewsFeedItem';
import getUser from './lib/getUser';
import getComments from './lib/getComments';
import getDisplayUserFunction from './lib/getDisplayUserFunction';
import http from './lib/http';

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

initialise();