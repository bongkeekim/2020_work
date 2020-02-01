const select = document.querySelector(".js-select"),
  input = select.querySelector("option");

const country = "cou";

function saveCountry(selectoption) {
  localStorage.setItem(country, selectoption);
}
