const bgc = ["green", "yellow", "blue"];

function handleResize() {
  if (window.innerWidth > 700) {
    document.body.style.backgroundColor = bgc[0];
  } else if (window.innerWidth > 500 && window.innerWidth < 700) {
    document.body.style.backgroundColor = bgc[1];
  } else {
    document.body.style.backgroundColor = bgc[2];
  }
}
function init() {
  window.addEventListener("resize", handleResize);
}
init();
