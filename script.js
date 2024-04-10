const container = document.querySelector(".container");
let size = 16;
container.style.width = `${size * 10 + 2}px`; // container width in px

const sizeBtn = document.querySelector("#saveSize");

sizeBtn.addEventListener("click", () => {

  deleteGrid(container);

  const inputSize = document.querySelector("#inputSize");
  size = parseInt(inputSize.value);
  generateGrid(size)
});

function generateGrid(size){
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    mouseover(pixel);
    container.appendChild(pixel);
  }
}
function deleteGrid(container){
  const oldPixels = document.querySelectorAll(".pixel");
  oldPixels.forEach((px)=>{
    container.removeChild(px)
  });

}

function mouseover(pixel) {
  pixel.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
}
