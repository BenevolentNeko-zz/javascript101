import http from './http';

export default function getDisplayUserFunction(userId){
  return async function(e){
      let user = await get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      alert(JSON.stringify(user));
  }
}