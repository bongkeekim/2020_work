// --------------------------------------------------
const title = document.querySelector("#title"); //쿼리셀렉터 타이틀 사용하겠다.

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
// ---------------------------------------------------------
// const age = prompt("how old are you");
// console.log(age);
// if (age >= 18 && age < 21) {
//   console.log("you can drink but you should not");
// } else if (age > 21) {
//   console.log("go ahed");
// } else {
//   console.log("you cant");
// }

// -----------------------------------
// if (10 > 11 && "bongkee" === "bongkeekim") {
//   console.log("hi");
// } else if (10 > 11) {
//   console.log("ho");
// } else {
//   console.log("lalala");
// }
