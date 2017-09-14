/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const http = {\n  get: function(url){\n      const request = new XMLHttpRequest();\n      const promiseToReturnData = new Promise(function(resolve, reject){\n          request.onreadystatechange = function(){\n              if (request.readyState === XMLHttpRequest.DONE && request.status === 200){\n                  resolve(JSON.parse(request.response));\n              } else if (request.readyState === XMLHttpRequest.DONE) {\n                  throw new Error(request);\n                  reject();\n              }\n          }\n      });\n      request.open(\"GET\", url);\n      request.send();\n      return promiseToReturnData;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (http);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9odHRwLmpzP2M1ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaHR0cCA9IHtcbiAgZ2V0OiBmdW5jdGlvbih1cmwpe1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgY29uc3QgcHJvbWlzZVRvUmV0dXJuRGF0YSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgcmV0dXJuIHByb21pc2VUb1JldHVybkRhdGE7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvaHR0cC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getNewsFeedItem__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_getUser__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getComments__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_getDisplayUserFunction__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_http__ = __webpack_require__(0);\n\n\n\n\n\n\nvar myVariable = \"some String\";\nmyVariable = 123;\nconst myUnchangingValue = \"some other string\";\nlet blockScopedVariable = \"whatever\";\nconsole.log(myVariable);\nconsole.log(myUnchangingValue);\nconsole.log(blockScopedVariable);\n\nconst rootContainer = document.getElementById(\"app-root\");\nconst paragraphIntro = document.createElement(\"p\");\nparagraphIntro.innerText = \"Welcome to BlueBook\";\nrootContainer.appendChild(paragraphIntro);\n\nfunction initialise(){\n    let domRefs = [];\n    __WEBPACK_IMPORTED_MODULE_4__lib_http__[\"a\" /* default */].get(\"https://jsonplaceholder.typicode.com/posts\").then(async function(posts){\n        const newsFeed = document.createElement(\"ul\");        \n        for (let i =0; i < 10; i++){\n            const post = posts[i];\n            const user = await Object(__WEBPACK_IMPORTED_MODULE_1__lib_getUser__[\"a\" /* default */])(post.userId);\n            const comments = await Object(__WEBPACK_IMPORTED_MODULE_2__lib_getComments__[\"a\" /* default */])(post.id);\n            const newsFeedItem = Object(__WEBPACK_IMPORTED_MODULE_0__lib_getNewsFeedItem__[\"a\" /* default */])(user.name, post.title, post.body, comments);\n            newsFeed.appendChild(newsFeedItem.element);\n            domRefs.push({\n                userId: post.userId,\n                domReference: newsFeedItem.ref\n            });\n        }\n        rootContainer.appendChild(newsFeed);\n    }).then(function(){\n        for (let i = 0; i < domRefs.length; i++){\n            const userLink = document.getElementById(domRefs[i].domReference);\n            userLink.addEventListener(\"click\", Object(__WEBPACK_IMPORTED_MODULE_3__lib_getDisplayUserFunction__[\"a\" /* default */])(domRefs[i].userId));\n        }\n    });\n}\n\ninitialise();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXROZXdzRmVlZEl0ZW0gZnJvbSAnLi9saWIvZ2V0TmV3c0ZlZWRJdGVtJztcbmltcG9ydCBnZXRVc2VyIGZyb20gJy4vbGliL2dldFVzZXInO1xuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vbGliL2dldENvbW1lbnRzJztcbmltcG9ydCBnZXREaXNwbGF5VXNlckZ1bmN0aW9uIGZyb20gJy4vbGliL2dldERpc3BsYXlVc2VyRnVuY3Rpb24nO1xuaW1wb3J0IGh0dHAgZnJvbSAnLi9saWIvaHR0cCc7XG5cbnZhciBteVZhcmlhYmxlID0gXCJzb21lIFN0cmluZ1wiO1xubXlWYXJpYWJsZSA9IDEyMztcbmNvbnN0IG15VW5jaGFuZ2luZ1ZhbHVlID0gXCJzb21lIG90aGVyIHN0cmluZ1wiO1xubGV0IGJsb2NrU2NvcGVkVmFyaWFibGUgPSBcIndoYXRldmVyXCI7XG5jb25zb2xlLmxvZyhteVZhcmlhYmxlKTtcbmNvbnNvbGUubG9nKG15VW5jaGFuZ2luZ1ZhbHVlKTtcbmNvbnNvbGUubG9nKGJsb2NrU2NvcGVkVmFyaWFibGUpO1xuXG5jb25zdCByb290Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtcm9vdFwiKTtcbmNvbnN0IHBhcmFncmFwaEludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5wYXJhZ3JhcGhJbnRyby5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gQmx1ZUJvb2tcIjtcbnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoSW50cm8pO1xuXG5mdW5jdGlvbiBpbml0aWFsaXNlKCl7XG4gICAgbGV0IGRvbVJlZnMgPSBbXTtcbiAgICBodHRwLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKS50aGVuKGFzeW5jIGZ1bmN0aW9uKHBvc3RzKXtcbiAgICAgICAgY29uc3QgbmV3c0ZlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7ICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHBvc3RzW2ldO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocG9zdC51c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhwb3N0LmlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld3NGZWVkSXRlbSA9IGdldE5ld3NGZWVkSXRlbSh1c2VyLm5hbWUsIHBvc3QudGl0bGUsIHBvc3QuYm9keSwgY29tbWVudHMpO1xuICAgICAgICAgICAgbmV3c0ZlZWQuYXBwZW5kQ2hpbGQobmV3c0ZlZWRJdGVtLmVsZW1lbnQpO1xuICAgICAgICAgICAgZG9tUmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBvc3QudXNlcklkLFxuICAgICAgICAgICAgICAgIGRvbVJlZmVyZW5jZTogbmV3c0ZlZWRJdGVtLnJlZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdzRmVlZCk7XG4gICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbVJlZnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdXNlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21SZWZzW2ldLmRvbVJlZmVyZW5jZSk7XG4gICAgICAgICAgICB1c2VyTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0RGlzcGxheVVzZXJGdW5jdGlvbihkb21SZWZzW2ldLnVzZXJJZCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmluaXRpYWxpc2UoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getNewsFeedItem;\nfunction getNewsFeedItem(name, title, body, comments){\n  const postContainer = document.createElement(\"li\");\n  postContainer.classList.add(\"post\");\n  const newsFeedTitle = document.createElement(\"h3\");\n  const newsFeedUserName = document.createElement(\"u\");\n  newsFeedUserName.id = `user-link-${Math.random()}`;\n  newsFeedUserName.innerText = name;\n  newsFeedTitle.appendChild(newsFeedUserName);\n  newsFeedTitle.innerHTML += ` - ${title}`;\n  const newsFeedContent = document.createElement(\"p\");\n  newsFeedContent.innerText = body;\n  postContainer.appendChild(newsFeedTitle);\n  postContainer.appendChild(newsFeedContent);\n  const commentsContainer = document.createElement(\"ol\");\n  for (let i = 0; i< comments.length; i++){\n      const comment = document.createElement(\"li\");\n      comment.innerText = comments[i].body;\n      commentsContainer.appendChild(comment);\n  }\n  postContainer.appendChild(commentsContainer);\n  \n  return {\n      element: postContainer,\n      ref: newsFeedUserName.id\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXROZXdzRmVlZEl0ZW0uanM/MjcyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROZXdzRmVlZEl0ZW0obmFtZSwgdGl0bGUsIGJvZHksIGNvbW1lbnRzKXtcbiAgY29uc3QgcG9zdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcG9zdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zdFwiKTtcbiAgY29uc3QgbmV3c0ZlZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgbmV3c0ZlZWRVc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1XCIpO1xuICBuZXdzRmVlZFVzZXJOYW1lLmlkID0gYHVzZXItbGluay0ke01hdGgucmFuZG9tKCl9YDtcbiAgbmV3c0ZlZWRVc2VyTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICBuZXdzRmVlZFRpdGxlLmFwcGVuZENoaWxkKG5ld3NGZWVkVXNlck5hbWUpO1xuICBuZXdzRmVlZFRpdGxlLmlubmVySFRNTCArPSBgIC0gJHt0aXRsZX1gO1xuICBjb25zdCBuZXdzRmVlZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbmV3c0ZlZWRDb250ZW50LmlubmVyVGV4dCA9IGJvZHk7XG4gIHBvc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3c0ZlZWRUaXRsZSk7XG4gIHBvc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3c0ZlZWRDb250ZW50KTtcbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpPCBjb21tZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29tbWVudC5pbm5lclRleHQgPSBjb21tZW50c1tpXS5ib2R5O1xuICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gIH1cbiAgcG9zdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50c0NvbnRhaW5lcik7XG4gIFxuICByZXR1cm4ge1xuICAgICAgZWxlbWVudDogcG9zdENvbnRhaW5lcixcbiAgICAgIHJlZjogbmV3c0ZlZWRVc2VyTmFtZS5pZFxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2dldE5ld3NGZWVkSXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getUser;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(0);\n\n\nconst userCache = {};\n\nasync function getUser(id){\n  if (userCache[id]){\n      return userCache[id];\n  } else {\n      let user = await __WEBPACK_IMPORTED_MODULE_0__http__[\"a\" /* default */].get(`https://jsonplaceholder.typicode.com/users?id=${id}`);\n      user = user[0];\n      userCache[id] = user;\n      return user;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXRVc2VyLmpzP2ZkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJztcblxuY29uc3QgdXNlckNhY2hlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoaWQpe1xuICBpZiAodXNlckNhY2hlW2lkXSl7XG4gICAgICByZXR1cm4gdXNlckNhY2hlW2lkXTtcbiAgfSBlbHNlIHtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgaHR0cC5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycz9pZD0ke2lkfWApO1xuICAgICAgdXNlciA9IHVzZXJbMF07XG4gICAgICB1c2VyQ2FjaGVbaWRdID0gdXNlcjtcbiAgICAgIHJldHVybiB1c2VyO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvZ2V0VXNlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getComments;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(0);\n\n\nasync function getComments(id){\n  let comments = await __WEBPACK_IMPORTED_MODULE_0__http__[\"a\" /* default */].get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);\n  return comments.slice(-3);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXRDb21tZW50cy5qcz85YTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gJy4vaHR0cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzKGlkKXtcbiAgbGV0IGNvbW1lbnRzID0gYXdhaXQgaHR0cC5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2lkfS9jb21tZW50c2ApO1xuICByZXR1cm4gY29tbWVudHMuc2xpY2UoLTMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2dldENvbW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getDisplayUserFunction;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(0);\n\n\nfunction getDisplayUserFunction(userId){\n  return async function(e){\n      let user = await __WEBPACK_IMPORTED_MODULE_0__http__[\"a\" /* default */].get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);\n      alert(JSON.stringify(user));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9nZXREaXNwbGF5VXNlckZ1bmN0aW9uLmpzPzYzODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGlzcGxheVVzZXJGdW5jdGlvbih1c2VySWQpe1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oZSl7XG4gICAgICBsZXQgdXNlciA9IGF3YWl0IGh0dHAuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/aWQ9JHt1c2VySWR9YCk7XG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9nZXREaXNwbGF5VXNlckZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);