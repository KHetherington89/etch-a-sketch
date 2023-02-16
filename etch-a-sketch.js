const gridContainer = document.getElementById("gridContainer");

let gridSize = prompt("What grid size you want?");
console.log(gridSize);

function buildGrid(gridSize){
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize}, 1fr); 
                                    grid-template-rows: repeat(${gridSize}, 1fr);
                                    column-gap: 1px;
                                    row-gap: 1px;`                                   
    let i = 0;
    while(i<(gridSize*gridSize)){
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement);
        gridElement.classList.add("gridElement");
        gridElement.addEventListener("mousedown" , (e)=> colorChange(e))
        i++;
    }
}

function colorChange(e){
    e.target.style.backgroundColor = "yellow";
}

buildGrid(gridSize);