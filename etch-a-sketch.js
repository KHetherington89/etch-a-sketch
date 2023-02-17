const gridContainer = document.getElementById("gridContainer");
const gridSizeSlider = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");
const redrawGridButton = document.getElementById("redrawGrid");
const colorButtons = document.querySelectorAll(".colorButton");
let gridSize = 16;
let colorChoice = "blackPen"
    
gridSizeSlider.addEventListener("change" , (e)=> {
    gridSize = e.target.value;
    gridSizeLabel.innerText=`${gridSize} x ${gridSize}`;
});

redrawGridButton.addEventListener("click" , (e)=> {
    buildGrid(gridSize);
});

colorButtons.forEach(btn => btn.addEventListener("click" , (e)=> {
    colorChoice = e.target.id;
    console.log(colorChoice);
}));

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
    if(colorChoice === "blackPen"){
        e.target.style.backgroundColor = "rgb(0,0,0)"
    }
    else if(colorChoice === "rainbowPen"){
        e.target.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`
    }
    else if(colorChoice === "eraserPen"){
        e.target.style.backgroundColor = "rgb(255,255,255)"
    }
}

function randNum(){
    value = Math.floor(Math.random() * 255);
    return value;
}

buildGrid(gridSize);

