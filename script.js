const container = document.querySelector(".container");
let width = 16;
container.style.width = `${width * 10 + 2}px`; // container width in px

const inputSize = document.querySelector("#inputSize");

width = parseInt(inputSize.value);

console.log(typeof width);

for (let i = 0; i < width * width; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");

  mouseover(pixel);

  container.appendChild(pixel);
}

function mouseover(pixel) {
  pixel.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
    console.log(e.target);
  });
}

const pix2 = document.querySelector(".pixel2");

pix2.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "white";
  console.log(e.target);
});
