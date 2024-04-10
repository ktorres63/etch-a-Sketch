const container = document.querySelector(".container");
let width = 160;
container.style.width = `${width+2}px`;

for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}
