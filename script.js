const grid = document.querySelector(".grid");
let currentDimensions;

function setGrid(num){
    for (let i = 0; i < num; i++){
        let container = document.createElement("div");
        container.setAttribute("class", "container");
        for (let j = 0; j < num; j++){
            let square = document.createElement("div");
            square.addEventListener("mouseover", function(){
                square.classList.add("hovered");
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

