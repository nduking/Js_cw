console.log("working");
const header = document.getElementById("header");
console.dir(header);

// function changeBackground() {
//   header.style.backgroundColor = "red";
//   header.style.color = "white";
//   header.style.fontSize = "50px";
// }

header.addEventListener("click", function changeBackground() {
  header.style.backgroundColor = "red";
  header.style.color = "white";
  header.style.fontSize = "50px";
});

logo.addEventListener("click", function increaseText() {
  logo.style.fontSize = "100px";
  logo.style.fontFamily = "monospace";
  logo.style.textTransform = "uppercase";
});

logo.addEventListener("click", function increaseText() {
  logo.classList.add("logo");
});
