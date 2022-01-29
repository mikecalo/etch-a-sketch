const container = document.querySelector('.container')
document.container = createGrid()

// will eventually change 256 (16 x 16) to whatever user inputs.
function createGrid () {
    for (let i = 0; i < 256; i++) {
        const grid = document.createElement('div')
        grid.className = 'squares';
        // grid.className = 'unfill';
        grid.id = `div-${i + 1}`;
        container.appendChild(grid) 
    }
}

function addFill(e) {
    e.target.classList.add('fill');
  }


function clearGrid(e) {
    // let gridSize = prompt("Select size of new grid (maximum: 100):")
    const grid = Array.from(document.querySelectorAll('.fill'));
        // if (gridSize <= 100) {
            for (const fill of grid) {
                fill.classList.remove('fill')
            }
        // } else {
        //     alert('Enter valid number between 1 - 100')
        // }
            
        
}

const squares = Array.from(document.querySelectorAll('.squares'));
squares.forEach(square => square.addEventListener('mouseover', addFill))

const btn = document.querySelector('.btn').onclick = clearGrid