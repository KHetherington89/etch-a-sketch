const gridContainer = document.getElementById("gridContainer");
const gridSizeSlider = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");
const redrawGridButton = document.getElementById("redrawGrid");
const colorButtons = document.querySelectorAll(".colorButton");
const colorPicker = document.getElementById("colorPicker");
const colorPickerLabel = document.getElementById("pickerLabel");
let gridSize = 16;
let colorChoice = "blackPen"

let mouseDown = false
gridContainer.onmousedown = (e) => {
    mouseDown = true;
    e.preventDefault();
}
gridContainer.onmouseup = () => (mouseDown = false)

pickerLabel.style.backgroundColor = `${colorPicker.value}`;
    
gridSizeSlider.addEventListener("change" , (e)=> {
    gridSize = e.target.value;
    gridSizeLabel.innerText=`${gridSize} x ${gridSize}`;
});

redrawGridButton.addEventListener("click" , (e)=> {
    buildGrid(gridSize);
});

toggleGrid.addEventListener("click" , ()=> {
    gridContainer.classList.contains("gridActive") ? gridContainer.classList.remove("gridActive") :
                                                     gridContainer.classList.add("gridActive");
});

colorPicker.addEventListener("click" , (e)=> {
    colorChoice = "customPen";
});

colorPicker.addEventListener("change" , (e)=> {
    pickerLabel.style.backgroundColor = `${colorPicker.value}`;
});

colorButtons.forEach(btn => btn.addEventListener("click" , (e)=> {
    colorChoice = e.target.id;
}));

function buildGrid(gridSize){
    gridContainer.innerHTML="";
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize}, 1fr); 
                                    grid-template-rows: repeat(${gridSize}, 1fr);`
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
    if(e.type === "mouseover" && mouseDown){
    (colorChoice === "blackPen") ? (e.target.style.backgroundColor = "rgb(0,0,0)") 
    : (colorChoice === "eraserPen") ? (e.target.style.backgroundColor = "rgb(255,255,255)")
    : (colorChoice === "rainbowPen") ? (e.target.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`)
    : (colorChoice === "customPen") ? (e.target.style.backgroundColor = `${colorPicker.value}`) : null;
    }
}

function randNum(){
    value = Math.floor(Math.random() * 255);
    return value;
}

buildGrid(gridSize);

