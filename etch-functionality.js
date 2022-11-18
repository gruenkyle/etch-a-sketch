/*
    This is my rendition of the Etch-a-Sketch Project 
    Currently this is the most updated version of 
    the javascript functionality behind the html program

    Author: Kyle Gruen
    Date: 11-17-2022
*/

//Button References Created
const resetButton = document.querySelector(".reset");
const blackCheck = document.querySelector('.black');
const rainbowCheck = document.querySelector(".rainbow");

//Reset Button Listener which Resets Game And Values
resetButton.addEventListener('click', () => {
    console.log("reset game");
    setGameSize();
})

//Set Game Size Function Replaces Size of Grid 
function setGameSize() {
    reset(); //Resets Game

    let myList = document.getElementById("sizes");  //Gathers which option in form was taken
    gridContainer(myList.options[myList.selectedIndex].value);  //Proceeds to resize grid based off size
}

//Fills grid with square divs based off size given 
function gridContainer(size) {

    const grid = document.querySelector(".center-container");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;    //Spaces each square in grid
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let count = 0; count < size * size; count++) { //For Loop Creating Each Square
        const newDiv = document.createElement('div');
        newDiv.classList.add("square");
        grid.appendChild(newDiv);
    }
}

//Changes pen color to black 
function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

//Uses changeColor() function to draw black on each square
function black() {
    let gridBoxList = document.querySelectorAll(".center-container");
    gridBoxList.forEach(gridBox => { gridBox.addEventListener("mouseover", changeColor) });
}

//Creates array that will be used in rainbow pen 
const colors = ['red', 'blue', 'green', 'yellow', 'violet', 'teal'];

//Rainbow Pen Creation 
function changeRainbow(e) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.backgroundColor = randomColor;
}

//Uses changeRainbow() function to draw rainbow colors from array
function rainbow() {
    let styleList = document.querySelectorAll(".center-container");
    styleList.forEach(gridChoice => { gridChoice.addEventListener("mouseover", changeRainbow) });
}

//Function resets entire grid by removing all divs from the box
function reset() {
    let allBoxes = document.querySelector(".center-container");
    while (allBoxes.hasChildNodes()) {
        allBoxes.removeChild(allBoxes.firstChild);
    }
}

//Base grid is a 4x4 that is created on launch with this function 
gridContainer(4);
