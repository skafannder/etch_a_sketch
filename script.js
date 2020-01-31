const container = document.querySelector('.container');

function removeGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function drawSquares(n) {
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 0; i < n*n; i++) {
        let content = document.createElement('div');
        content.classList.add('content');
        

        let size = (600/n);
        content.style.width = size;
        content.style.heigth = size;
        content.style.border= "1px solid #000";
        content.style.background = "#fff";
        content.addEventListener("mouseover", changeColor);

        container.appendChild(content);
    }

}

function getRandomColor() {
	let r, g, b;
	do {
		r = Math.round(Math.random() * 255);
		g = Math.round(Math.random() * 255);
		b = Math.round(Math.random() * 255);
	} while (r == g == b == 255);
	return [r, g, b];
}

function addBlack(rgb) {
	let r = Math.round(rgb[0] * 0.7);
	let g = Math.round(rgb[1] * 0.7);
	let b = Math.round(rgb[2] * 0.7);
	return [r, g, b];
}

function changeColor(e) {
	// e.target.classList.add("black");
	let rgb = window.getComputedStyle(e.target).backgroundColor.split(/[\s,\(\)]+/).slice(1, 4);
	if (rgb[0] == 255 && rgb[1] == 255 && rgb[2] == 255) {
		rgb = getRandomColor();
	} else {
		rgb = addBlack(rgb);
	}

	e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function setGrid() {
	let size = prompt("Enter Grid Size:");
	size = (!size || !Number.isInteger(+size) || size <= 0) ? GRID_SIZE : +size;
	console.log(size);
	removeGrid();
	drawSquares(size);
}

btn.addEventListener("click", setGrid);

drawSquares(10);