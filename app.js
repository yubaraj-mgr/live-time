var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

let myFunction = () => {
  var date = new Date();
  hour.textContent = date.getHours();
  minute.textContent = date.getMinutes();
  second.textContent = date.getSeconds();
};
setInterval(myFunction, 1000);
