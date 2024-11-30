var userName =
  JSON.parse(localStorage.getItem("name")).slice(0, 1).toUpperCase() +
  JSON.parse(localStorage.getItem("name")).slice(1);
var welcomeMsgEle = document.querySelector("h1");

welcomeMsgEle.textContent = `Welcome ${userName}`;
