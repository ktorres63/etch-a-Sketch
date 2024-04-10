const baseColor = "rgb(232, 241, 241)";
let overColor = "black";
const pixelEdge = 15;

const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetPixels");
const saveBtn = document.querySelector("#saveSize");

function resetPixels() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((px) => {
    px.style.backgroundColor = baseColor;
  });
}

const randomColBtn = document.querySelector("#randomColors");
randomColBtn.addEventListener("click", () => {
  const inputSize = document.querySelector("#inputSize");
  let size = parseInt(inputSize.value);
  generateGrid(size, true);
});

generateGrid(16);

resetBtn.addEventListener("click", resetPixels);

saveBtn.addEventListener("click", () => {
  const inputColor = document.querySelector("#inputColor")
  overColor = inputColor.value;
  console.log(inputColor.value);

  const inputSize = document.querySelector("#inputSize");
  let size = parseInt(inputSize.value);
  generateGrid(size);
});

function generateGrid(size, randomColor = false) {
  deletePixels(container);
  container.style.width = `${size * pixelEdge + 2}px`; // container width in px
  generatePixels(size, randomColor);
}
function generatePixels(size, randomColor = false) {
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${pixelEdge}px`;
    pixel.style.height = `${pixelEdge}px`;
    pixel.style.backgroundColor = baseColor;
    mouseover(pixel, randomColor);
    container.appendChild(pixel);
  }
}
function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR},${randomG},${randomB})`;
}

function mouseover(pixel, randomColor = false) {
  if (randomColor) {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getRandomColor();
    });
  } else {
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = overColor;
    });
  }
}

function deletePixels(container) {
  const oldPixels = document.querySelectorAll(".pixel");
  oldPixels.forEach((px) => {
    container.removeChild(px);
  });
}
