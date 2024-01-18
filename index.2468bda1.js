/* eslint-disable prefer-promise-reject-errors *//* eslint-disable new-cap */// write your code here
var e=document.querySelector("body"),t=document.querySelector(".logo"),n=function(){var t=document.createElement("div");t.className="message",t.textContent="Promise was resolved!",e.append(t)},o=function(){var t=document.createElement("div");t.className="message error-message",t.textContent="Promise was rejected!",e.append(t)},c=new Promise(function(e){t.addEventListener("click",function(){e()})}),a=new Promise(function(e,t){setTimeout(function(){t()},3e3)});c.then(n).catch(o),a.then(n).catch(o);//# sourceMappingURL=index.2468bda1.js.map

//# sourceMappingURL=index.2468bda1.js.map
