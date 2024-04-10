const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}
