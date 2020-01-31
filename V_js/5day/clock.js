const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");
function getTime() {
  const date = new Date();
  // const minutes = date.getMinutes();
  // const hours = date.getHours();
  // const seconds = date.getSeconds();
//   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }
clockTitle.innerText =date;
//  `${시간 < 10 ?(if) `0${시간}`으로 나타내주고 : (else) 시간}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

// function sayHi(){console.log("say what the fuck~!~!~!~")}
// undefined
// sayHi()
// say what the fuck~!~!~!~
// undefined
// setInterval(sayHi, 2000)
// 1
// say what the fuck~!~!~!~
