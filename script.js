const mainContainer = document.getElementById("canvas-container");
const canvasContainer = document.createElement("div");
canvasContainer.id = "grid-container";

let clearBtn = document.getElementById("clear-sketch");

function generateGrid() {
  for (let i = 1; i <= 256; i++) {
    let divElement = document.createElement("div");
    divElement.className = "grid-block";
    divElement.id = `grid-section-${i}`;
    canvasContainer.appendChild(divElement);
  }
}

function init() {
  mainContainer.appendChild(canvasContainer);
  generateGrid();
}

init();

let gridBlocks = document.querySelectorAll(".grid-block");

gridBlocks.forEach((block) => {
  block.addEventListener("click", () => block.classList.add("blue"));
});

clearBtn.addEventListener("click", () => {
  gridBlocks.forEach((block) => {
    block.classList.remove("blue");
  });
});
