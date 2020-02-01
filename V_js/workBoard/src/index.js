function selectCountry() {
  var countrySelect = document.getElementById("country");
  var myCountry = countrySelect.options[countrySelect.selectedIndex].value;
}
const USER_COUNTRY = "country";
function savedCountry() {
  localStorage.setItem(USER_COUNTRY, myCountry);
}
//여기서 왜 myCountry가 정의가 안되는지 모르겠어요.. 이방법이 맞는지도..# -----사칙연산 계산기-------------
