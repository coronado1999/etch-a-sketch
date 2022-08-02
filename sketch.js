let color = "black";

function sketchBoard(size) {
    let sketch = document.querySelector(".sketch")
    let square = sketch.querySelectorAll("div");
    square.forEach((div) => div.remove());
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "grey";
        sketch.insertAdjacentElement("beforeend", square);
    }
}


sketchBoard(16);

function setSize(input) {
    if (input >= 2 && input <= 100) {
        sketchBoard(input);
    } else {
        console.log("Enter a number between 2 and 100.")
    }
}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}


function reset() {
    let sketch = document.querySelector(".sketch")
    let square = sketch.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = 'grey');
}

