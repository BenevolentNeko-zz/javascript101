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

const posts = [
    {
        userId: 34,
        id: 1234,
        title: "my first post",
        body: "some totally awesome post content"
    },
    {
        userId: 34,
        id: 1235,
        title: "my second post",
        body: "some other totally awesome post content"
    }
];


function addPostToBody(title, body){
    const newsFeed = document.createElement("ul");
    const newsFeedTitle = document.createElement("h3");
    newsFeedTitle.innerText = title;
    const newsFeedContent = document.createElement("p");
    newsFeedContent.innerText = body;
    newsFeed.appendChild(newsFeedTitle);
    newsFeed.appendChild(newsFeedContent);
    
    rootContainer.appendChild(newsFeed);
}

for (let i =0; i < posts.length; i++){
    let post = posts[i];
    console.log(post.id, post.body);
    addPostToBody(post.title, post.body);
}
