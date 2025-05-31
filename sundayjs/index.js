const h1 = document.getElementById("h1");
const changeView = document.getElementById("changeView");
const contentHolder = document.getElementById("contentHolder");

changeView.addEventListener("click", function () {
  console.log("Clicking");

  contentHolder.classList.toggle("changeView");
});

h1.addEventListener("click", function () {
  h1.style.background = "blue";
  h1.style.fontSize = "70px";
  h1.style.color = "grey";
  h1.style.border = "5px solid green";
  console.log(h1);
});
// h1.addEventListener("click",function(){
//      h1.style.background = "";
//   h1.style.fontSize = "";
//   h1.style.color = "";
//   h1.style.border = "";

// })
