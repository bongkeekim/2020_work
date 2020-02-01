const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
// 여기서 사용할 html에 있는거 끌어오고 지정해줌

const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //쇼잉 클래스 네임
// 아이디 지정

function saveName(text) {
  localStorage.setItem(USER_LS, text); //로컬스토리지에 셋팅 아이템을 해라(유저, 텍스트로)
}
// 이름을 저장하라(텍스트로)/ 로컬스토리지 셋팅아이템(커렌트유져, 글씨)

function handleSubmit(event) {
  //헨들 서브밋(이벤트)
  event.preventDefault(); //이벤트를 종료해라
  const currentValue = input.value; // 커렌트 벨류는 인풋과밸유이다.
  paintGreeting(currentValue); // 프린트 그래이팅(커렌트 벨류)
  saveName(currentValue); // 세이브네임(커렌트벨류)  <--이게 타이핑 한걸 말하는듯.
}

function askForName() {
  //펑션 이름을 물어봐
  form.classList.add(SHOWING_CN); // 폼 클래스리스트 추가해라(쇼잉클레스네임)
  form.addEventListener("submit", handleSubmit); //그리고, 에드이벤트리스너(서브밋,핸들서브밋은 펑션 이름)
}

function paintGreeting(text) {
  //펑션 프린트그리팅(텍스트)
  form.classList.remove(SHOWING_CN); // 폼 클레스 리스트 지워라(쇼인클래스네임) 색칠하려면
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  //펑선의 이름 로드네임
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //만약 커랜트유져가 없으면, 이름을 물어봐라
    askForName();
  } else {
    paintGreeting(currentUser); //프린트그리팅 펑션호출(커랜트유저)
  }
}
function init() {
  loadName();
}
init();
