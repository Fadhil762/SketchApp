const container = document.getElementById("container");
const sizeBtn = document.getElementById("setGrid");
const colorBtn = document.getElementById("setColor");
const randomColorBtn = document.getElementById("setRandomColor");
const resetBtn = document.getElementById("resetBtn");
const canvasBtn = document.getElementById("setCanvas");
let clicked = false;
let color = "#000";
let canvasColor = "#000";
const helpBtn =document.getElementById("helpBtn");

/* help button function*/
function displayHelp(){
alert("Click the brush icon for Hex table code")
}

/* reset grid function */
resetBtn.addEventListener('click', e => {
    let cells = container.childNodes;

    for (i = 0; i < cells.length; i++){
        cells[i].style.background = "white";
    }
});

/* change canvas color*/
function setCanvasColor(){
    canvasColor = prompt("Pick a color for your canvas: (warning: changing canvas color will reset the grid)");
    let cells = container.childNodes;

    for(i =0; i < cells.length; i++){
        cells[i].style.background = canvasColor;
    }

}
canvasBtn.addEventListener('click', setCanvasColor);


/* choose a color function */
function setColor(){
    if(clicked) this.setAttribute("style", `background-color: ${color};`);
}
function getColor() {
    color = prompt("Use a hexcode to change brush color: ");
}
colorBtn.addEventListener("click", getColor);

/* get randomize color */
function getRandomColor() {
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
randomColorBtn.addEventListener("click", getRandomColor);

/* main function that allows user to generate a grid */
function createGrids(numberOfGrids){
    container.innerHTML = "";
    let num = numberOfGrids * numberOfGrids;
    container.setAttribute("style", `grid-template-columns: repeat(${numberOfGrids}, auto);`);
    for(let i = 1; i <= num; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "container-grid");
        div.addEventListener("mouseover", setColor);
        container.appendChild(div);
        console.log(i);
    }
}
createGrids(16);

/* choose numbers of grid to generate */
function getGridAmount() {
    let gridSize = prompt("Choose number of grids to generate (note: its recommended to stay below 100)");
    if (gridSize === null) {
        return;
    } else {
        createGrids(gridSize);
    }
}
sizeBtn.addEventListener("click", getGridAmount);

/* mouse click events*/
function setClickedTrue() {
    clicked = true;
}

function setClickedFalse() {
    clicked = false;
}
container.addEventListener("mousedown", setClickedTrue);
window.addEventListener("mouseup", setClickedFalse);
