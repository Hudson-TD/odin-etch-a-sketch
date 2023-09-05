const mainContainer = document.getElementById("main-container");
const canvasContainer = document.createElement("div");
const value = document.querySelector("#value");
const input = document.querySelector("#grid-formatter");

let clearBtn = document.getElementById("clear-sketch");
let gridValue = undefined;

canvasContainer.id = "grid-container";

function generateGrid() {
  for (let i = 1; i <= gridValue * gridValue; i++) {
    canvasContainer.style.cssText = `width:800px;height:800px;display:grid;grid-template-columns:repeat(${gridValue}, 1fr);grid-template-rows:repeat(${gridValue},1fr);grid-row-gap:0px;grid-column-gap:0px;`;
    let divElement = document.createElement("div");
    divElement.classList.add("grid-block");
    canvasContainer.appendChild(divElement);
  }

  mainContainer.appendChild(canvasContainer);
}

function refreshGrid() {
  generateGrid();
}

function init() {
  let startingGrid = window.prompt(
    "Please enter a value between 16 and 100 to generate your canvas!"
  );

  if (startingGrid < 1) {
    window.alert("You must enter a number between 1-100 to proceed.");
    init();
  } else if (startingGrid > 100) {
    window.alert("You must enter a number between 1-100 to proceed.");
    init();
  } else {
    gridValue = startingGrid;
    generateGrid();
  }
  value.textContent = `${gridValue} x ${gridValue}`;
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
