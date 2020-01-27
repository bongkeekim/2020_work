const title = document.querySelector("title");

function handleClick(event) {
  title.style.color = "red";
}
title.addEventListener("click", handleClick);
