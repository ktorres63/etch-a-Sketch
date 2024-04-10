const baseColor = "rgb(170, 221, 221)";
const overColor = "black"

const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetPixels");
const sizeBtn = document.querySelector("#saveSize");

const randomColBtn = document.querySelector("#randomColors");

generateGrid(16);

resetBtn.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((px) => {
    px.style.backgroundColor = baseColor;
  });
});

sizeBtn.addEventListener("click", () => {
  const inputSize = document.querySelector("#inputSize");
  let size = parseInt(inputSize.value);
  generateGrid(size);
});

function generateGrid(size) {
  deletePixels(container);
  container.style.width = `${size * 10 + 2}px`; // container width in px
  generatePixels(size);
}
function generatePixels(size) {
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    mouseover(pixel);
    container.appendChild(pixel);
  }
}
function deletePixels(container) {
  const oldPixels = document.querySelectorAll(".pixel");
  oldPixels.forEach((px) => {
    container.removeChild(px);
  });
}

function mouseover(pixel, randomColor=false) {
  if(randomColor){

  }
  else{
  pixel.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = overColor;
  });}
}
function randomColor(){
  let randomR = Math.floor(Math.random()*256);
  let randomG = Math.floor(Math.random()*256);
  let randomB = Math.floor(Math.random()*256);

  return `rgb(${randomR},${randomG},${randomB})`;
}