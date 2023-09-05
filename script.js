const mainContainer = document.getElementById("canvas-container");
const canvasContainer = document.createElement("div");
canvasContainer.id = "grid-container";

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
