export default function getNewsFeedItem(name, title, body, comments){
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