const container = document.querySelector(".container");
generateGrid(16);

const sizeBtn = document.querySelector("#saveSize");
sizeBtn.addEventListener("click", () => {
  const inputSize = document.querySelector("#inputSize");
  let size = parseInt(inputSize.value);
  generateGrid(size);
});


function generateGrid(size){
  container.style.width = `${size * 10 + 2}px`; // container width in px 
  deletePixels(container);
  generatePixels(size)
}
function generatePixels(size){
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    mouseover(pixel);
    container.appendChild(pixel);
  }
}
function deletePixels(container){
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
