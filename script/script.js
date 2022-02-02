const container = document.querySelector('.container')
const slider = document.querySelector('#myRange').value
document.container = createGrid()
const btnCreate = document.querySelector('.btn-create').onclick = createNewGrid
const btnClear = document.querySelector('.btn-clear').onclick = clearGrid

function createGrid() {
    const slider = document.querySelector('#myRange').value
    const container = document.querySelector('.container')
    container.setAttribute('style','grid-template-columns: repeat(' + slider + ',' + (100 / slider) + '%)');
    for (let i = 0; i < slider * slider; i++) {
        const grid = document.createElement('div')
        grid.className = 'squares';
        grid.id = `div-${i + 1}`;
        container.appendChild(grid) 
    }
const squares = Array.from(document.querySelectorAll('.squares'));
squares.forEach(square => square.addEventListener('mouseover', addFill))
}

function addFill(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const checkBox = document.querySelector('#check')
    if (checkBox.checked == true) {
        e.target.style.backgroundColor = "#" + randomColor;
    
    } else e.target.classList.add('fill');
    
}

function createNewGrid(e) {
    const grid = Array.from(document.querySelectorAll('.squares'));
        for (const squares of grid) {
            squares.remove()
        }
    createGrid()
}

function clearGrid(e) {
    const squares = Array.from(document.querySelectorAll('.squares'));
        for (const square of squares) {
            square.style.removeProperty('background-color');
            square.classList.remove('fill');
        }
}




