import http from './http';

export default async function getComments(id){
  let comments = await http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return comments.slice(-3);
}