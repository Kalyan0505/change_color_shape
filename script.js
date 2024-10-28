let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");

// To change the Color
btn[0].addEventListener("click", changeColor);

function randomColor() {
  let letters = "0123456789ABCDEF";
  let colorCodeLength = 6;
  let colorCode = "#";
  for (let i = 0; i < colorCodeLength; i++) {
    let randomNumber = Math.floor(Math.random() * letters.length);
    colorCode += letters.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}

function changeColor() {
  let newColor = randomColor();
  round.style.backgroundColor = newColor;
}

// To change the Shape
btn[1].addEventListener("click", changeShape);

let arr = [
  "square",
  "round",
  "diamond",
  "triangle",
  "arrow",
  "frame",
  "star",
  "cross",
  "left-point",
  "right-point",
  "parallal",
  "cheg",
];

function randomShape() {
  let idxx = Math.floor(Math.random() * arr.length);
  return arr[idxx];
}

function changeShape() {
  let idname = randomShape();
  shape.id = idname;
}
