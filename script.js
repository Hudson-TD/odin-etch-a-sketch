const mainContainer = document.getElementById("main-container");
const canvasContainer = document.createElement("div");

function generateGrid() {
  for (let i = 0; i <= 255; i++) {
    let divElement = document.createElement("div");
    divElement.className = "grid-section";
    canvasContainer.appendChild(divElement);
  }
}

function init() {
  mainContainer.appendChild(canvasContainer);
  generateGrid();
}

init();
