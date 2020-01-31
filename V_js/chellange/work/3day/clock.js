// const clockContainer = document.querySelector(".js-clock"),
//   clockTitle = clockContainer.querySelector("h3");
// function getTime() {
//   const date = new Date();
//   const xmars = new Date("2020-12-24:00:00:00+0900");
//   const count = xmars.getTime() - date.getTime();

//   const day = count.getDate();
//   const minutes = count.getMinutes();
//   const hours = count.getHours();
//   const seconds = count.getSeconds();

//   clockTitle.innerText = `${day}d   ${
//     hours < 10 ? `0${hours}h` : `${hours}h`
//   }   ${minutes < 10 ? `0${minutes}m` : `${minutes}m`}  ${
//     seconds < 10 ? `0${seconds}s` : `${seconds}s`
//   }`;
// }

// //  `${시간 < 10 ?(if) `0${시간}`으로 나타내주고 : (else) 시간}

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }

// init();

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");

const countDownDate = new Date("Dec 24, 2020 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("h3").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("h3").innerHTML = "EXPIRED";
  }
}, 1000);
