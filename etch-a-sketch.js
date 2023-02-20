const gridContainer = document.getElementById("gridContainer");
const gridSizeSlider = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");
const redrawGridButton = document.getElementById("redrawGrid");
const colorButtons = document.querySelectorAll(".colorButton");
const colorPicker = document.getElementById("colorPicker");
const colorSwatch = document.getElementById("colorSwatch");
const footer = document.getElementById("footer");
let gridSize = 16;
let colorChoice = "blackPen"

let mouseDown = false
gridContainer.onmousedown = (e) => {
    mouseDown = true;
    e.preventDefault();
}
gridContainer.onmouseup = () => (mouseDown = false);
gridContainer.onmouseleave = () => (mouseDown = false);

colorSwatch.style.backgroundColor = `${colorPicker.value}`;
    
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
    colorSwatch.style.backgroundColor = `${colorPicker.value}`;
});

colorButtons.forEach(btn => btn.addEventListener("click" , (e)=> {
    colorChoice = e.target.id;
    colorButtons.forEach(btn => btn.classList.remove("cbActive"));
    e.target.classList.add("cbActive");
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
        gridElement.addEventListener("mousedown" , (e)=> colorChange(e));
        i++;
    }
}

function colorChange(e){
    if((e.type === "mouseover" && mouseDown) || e.type === "mousedown"){
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
        
footer.innerHTML = `<a style="color:black; text-decoration:none" href="https://github.com/KHetherington89/etch-a-sketch">Copyright © ${new Date().getFullYear()} KHetherington89 
<i class="fa fa-github" style="font-size:24p; color:black"></i></a>`;

