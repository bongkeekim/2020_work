const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2"); //html속문서를 찾아오겠다는 뜻.title은 속문서 h2 이다.

const superEventHandler = {
  handleResize: function() {
    title.style.color = colors[3];
    title.innerHTML = "You just resized~!You just resized~!";
  }
};

window.addEventListener("resize", superEventHandler.resize);

// -----------------여기까지 잘 살려서 작성

// int value = 2;

// if( value > 5 )

// {

//     System.out.println(" value is bigger then 5 ");

// }

// else if( value > 1 )

// {

//         System.out.println(" value is bigger then 1 ");

// }

// else

// {

//     System.out.println(" contition is false ");

// }

// -----------------------조건문--------------

// function ResizeWindow(x,y) {
//   try
//   {
//       // tool box and border length
//       var deltaHeight, deltaWidth;

//       if (window.outerHeight) {
//           deltaWidth = window.outerWidth - window.innerWidth;
//           deltaHeight = window.outerHeight - window.innerHeight;
//       }
//       else {
//           // if ie..
//           if (document.documentElement.clientWidth) {

//               // get window fake outer size
//               var fakeOuterWidth = document.documentElement.clientWidth;
//               var fakeOuterHeight = document.documentElement.clientHeight;

//               // resize to innerSize
//               window.resizeTo(fakeOuterWidth, fakeOuterHeight);

//               // get window fake inner size
//               var fakeInnerWidth = document.documentElement.clientWidth;
//               var fakeInnerHeight = document.documentElement.clientHeight;

//               // get delta
//               deltaWidth = fakeOuterWidth - fakeInnerWidth;
//               deltaHeight = fakeOuterHeight - fakeInnerHeight;
//           }
//           else {
//               // not support -_-;;; ignore resizing;;;; sorry;;;;
//               throw "browser does not support!"
//           }
//       }
//       window.resizeTo(x + deltaWidth, y + deltaHeight);
//   }catch(e){}
// }
