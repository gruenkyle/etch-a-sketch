
const resetButton = document.querySelector(".reset");
const colors = ['red', 'blue', 'green', 'yellow', 'violet', 'teal'];

resetButton.addEventListener('click', () => {
    console.log("reset game");
    setGameSize();
})

function setGameSize() {
    reset();

    let myList = document.getElementById("sizes");
    gridContainer(myList.options[myList.selectedIndex].value);
}

function gridContainer(size) {

    const grid = document.querySelector(".center-container");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let count = 0; count < size * size; count++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("square");
        grid.appendChild(newDiv);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function changeRainbow(e) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.backgroundColor = randomColor;
}

function black() {
    let gridBoxList = document.querySelectorAll(".center-container");
    gridBoxList.forEach(gridBox => { gridBox.addEventListener("mouseover", changeColor) });
}

function rainbow() {
    let styleList = document.querySelectorAll(".center-container");
    styleList.forEach(gridChoice => { gridChoice.addEventListener("mouseover", changeRainbow) });
}

function reset() {
    let allBoxes = document.querySelector(".center-container");
    while (allBoxes.hasChildNodes()) {
        allBoxes.removeChild(allBoxes.firstChild);
    }
}

gridContainer(4);
