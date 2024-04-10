const container = document.querySelector(".container");

const sizeBtn = document.querySelector("#saveSize");
sizeBtn.addEventListener("click", () => {
  deletePixels(container);

  const inputSize = document.querySelector("#inputSize");

  let size = parseInt(inputSize.value);
  container.style.width = `${size * 10 + 2}px`; // container width in px 
  generatePixels(size)
});

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
