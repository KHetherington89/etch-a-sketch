const gridContainer = document.getElementById("gridContainer");
const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
/*     gridElement.textContent="A"; */

let gridSize = prompt("What grid size you want?");
console.log(gridSize);

function buildGrid(gridSize){
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize}, 1fr); 
                                    grid-template-rows: repeat(${gridSize}, 1fr);
                                    row-gap: 1px;
                                    column-gap: 1px;`
    let i = 0;
    while(i<(gridSize*gridSize)){
        gridContainer.appendChild(gridElement.cloneNode(true));
        i++;
    }
}

buildGrid(gridSize);