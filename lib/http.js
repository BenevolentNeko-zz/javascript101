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

export default http;