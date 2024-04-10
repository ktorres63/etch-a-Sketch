const container = document.querySelector(".container");
let width = 160;
container.style.width = `${width+2}px`;




for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");

  pixel.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "white"
    console.log(e.target)
  });

  container.appendChild(pixel);
}




const pix2 = document.querySelector(".pixel2");

pix2.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "white"
  console.log(e.target)
  
});