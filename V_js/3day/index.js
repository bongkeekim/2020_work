const article = document.querySelector("h2"); //html속문서를 찾아오겠다는 뜻.(id=title)게가 title로 선언함.
article.innerHTML = "Hi! From JS"; //innerHtml 은 지정값으로 대체함.
article.style.color = "red";

// -------------펑션주고 작동시키고-------------------
function handleClick(event) {
  //클릭했을때 선언한title는 컬러를 바꾸고 대체하고..
  article.style.color = "blue";
  article.innerHTML = "What the fuck!!!!";
}

article.addEventListener("click", handleClick); // addEventListener기존이벤트 + 추가하는 자바 메소드
// -------------펑션주고 작동시키고-------------------
// const superEventHandler = {
//   mouseOver: (title.innerText = "suck my ass")
// };
// title.addEventListener("mouseover", superEventHandler);
