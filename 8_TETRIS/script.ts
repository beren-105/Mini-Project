const tetrominos = [
    [
        [1, 1],
        [1, 1],

    ], //O
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ], //L
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], //J
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],

    ], //Z
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],

    ], //S
    [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ], //I
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], // T
];

const tetrominoColor = [
    '#F16767', '#F99417', '#F2CD5C', '#CDE990', '#89C4E1', '#00337C', '#D09CFA'
];

random(tetrominos)
random(tetrominoColor)
function random(arr:number[][][]|string[]):number[][][]|string[]  {
    for (let i=arr.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}


const row = 10;
const col = 20;
let currentPositionX = 3
let currentPositionY = 0
let rotate = 0;
let hold = tetrominos[0];


type Draw = (tetromino:number[][], x:number, y:number) => void
let draw:Draw = function (tetromino, x, y) {
    const bord = document.querySelector('#bord');
    if (bord instanceof HTMLCanvasElement) {
        const ctx = bord.getContext('2d');
        
        if (ctx instanceof CanvasRenderingContext2D ) {
            const size = 30;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = tetrominoColor[0];
            tetromino.forEach((row, rowY) => {
                row.forEach((col, colX) => {
                    if (col > 0) {
                        ctx.fillRect((colX+x)*size, (rowY+y)*size, size, size);
                    }
                })
            })
        }
    }
}

draw(hold, currentPositionX, currentPositionY)

document.addEventListener('keyup', moveTetromino)
function moveTetromino(e:KeyboardEvent) {
    
    switch (e.key) {
        case 'ArrowLeft' : 
            moveTetrominoLeft();
            break;
        case 'ArrowRight' : 
            moveTetrominoRight();
            break;
        case 'ArrowDown' : 
            moveTetrominoDown();
            break;
        case ' ' : 

            break;
    }
}

function moveTetrominoLeft() {
    if (currentPositionX > 0) {
        currentPositionX--
        draw(hold, currentPositionX, currentPositionY)
    }
}

function moveTetrominoRight() {
    if (currentPositionX < (row-hold[0].length)) {
        currentPositionX++
        draw(hold, currentPositionX, currentPositionY)
    }
}

function moveTetrominoDown() {
    if (currentPositionY < col-hold.length) {
        currentPositionY++
        draw(hold, currentPositionX, currentPositionY)
    }
}