const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2"); //html속문서를 찾아오겠다는 뜻.title은 속문서 h2 이다.

const superEventHandler = {
  enter: function handleEnter() {
    //마우스 갔을때 선언한 title는 컬러를 바꾸고 대체하고
    title.style.color = colors[0];
    title.innerHTML = "The mouse is here~!The mouse is here~!";
  },
  leave: function handleLeave() {
    title.style.color = colors[1];
    title.innerHTML = "The mouse is gone~!The mouse is gone~!";
  },
  rClick: function handleRClick() {
    title.style.color = colors[2];
    title.innerHTML = "That is a right click~!That is a right click~!";
  },
  resize: function handleResize() {
    title.style.color = colors[3];
    title.innerHTML = "You just resized~!You just resized~!";
  }
};

title.addEventListener("mouseenter", superEventHandler.enter); // addEventListener기존이벤트 + 추가하는 자바 메소드, 핸들오바하면, 펑션작동!
title.addEventListener("mouseleave", superEventHandler.leave); //타이틀.추가(기능,주문)
title.addEventListener("contextmenu", superEventHandler.rClick);
window.addEventListener("resize", superEventHandler.resize);
