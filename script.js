const grid = document.querySelector(".grid");
let color = false;

function setGrid(num){
    for (let i = 0; i < num; i++){
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        for (let j = 0; j < num; j++){
            let square = document.createElement("div");
            square.addEventListener("mouseover", function(){
                if (color === false){
                    square.style.backgroundColor = "black";
                } else {
                    let RGB1 = Math.floor(Math.random() * 255);
                    let RGB2 = Math.floor(Math.random() * 255);
                    let RGB3 = Math.floor(Math.random() * 255);
                    square.style.backgroundColor = `rgb(${RGB1}, ${RGB2}, ${RGB3})`;
                }
            });
            square.classList.add("square");
            container.appendChild(square);
        }
        grid.appendChild(container);
    }
}

function resetGrid(){
    while (grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}

setGrid(16);

const button = document.getElementById("dimBtn");
button.addEventListener("click", () => {
    dimensions = prompt("Enter number of squares per side for the new grid");
    if (dimensions <= 100){
        resetGrid();
        setGrid(dimensions);
    } else {
        alert("Cannot be larger than 100!")
    }
});

const colorButton = document.getElementById("colorBtn");
colorButton.addEventListener("click", () => {
    if (color === true){
        color = false;
        colorButton.textContent = "Switch to rainbow";
    } else {
        color = true;
        colorButton.textContent = "Switch to black";

    }
});

