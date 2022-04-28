const canvas = document.querySelector(".canvas");


createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridbox");
        canvas.appendChild(gridDiv);
    }
}

createGrid();

const grid = document.querySelectorAll(".gridbox");

grid.forEach(square => {
    square.addEventListener('mouseenter', function(){
        square.style.background = 'black';});
});