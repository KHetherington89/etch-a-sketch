const gridContainer = document.getElementById("gridContainer");
const gridSizeSlider = document.getElementById("gridSize");
const redrawGridButton = document.getElementById("redrawGrid");
const gridSizeLabel = document.getElementById("gridSizeLabel");
let gridSize = 16;
let colorChoice = "rgb(0, 0, 0)"
    
gridSizeSlider.addEventListener("change" , (e)=> {
    gridSize = e.target.value;
    gridSizeLabel.innerText=`${gridSize} x ${gridSize}`;
});

redrawGridButton.addEventListener("click" , (e)=> {
    buildGrid(gridSize);
 });

function buildGrid(gridSize){
    gridContainer.innerHTML="";
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize}, 1fr); 
                                    grid-template-rows: repeat(${gridSize}, 1fr);
                                    column-gap: 1px;
                                    row-gap: 1px;`                                   
    let i = 0;
    while(i<(gridSize*gridSize)){
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement);
        gridElement.classList.add("gridElement");
        gridElement.addEventListener("mouseover" , (e)=> colorChange(e));
        i++;
    }
}

function colorChange(e){
    e.target.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
}

function randNum(){
    value = Math.floor(Math.random() * 255);
    return value;
}

buildGrid(gridSize);

