const tetrominos = [
    [
        [1, 1],
        [1, 1],
    ],
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ],
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], // T
];
const tetrominoColor = [
    '#F16767', '#F99417', '#F2CD5C', '#CDE990', '#89C4E1', '#00337C', '#D09CFA'
];
random(tetrominos);
random(tetrominoColor);
function random(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const width = 10;
const height = 20;
let currentPositionX = 3;
let currentPositionY = 0;
let rotate = 0;
let hold = tetrominos[0];
const gameBoard = Array.from({ length: height }, () => new Array(width).fill(0));
console.table(gameBoard);
let draw = function (tetromino, x, y) {
    const bord = document.querySelector('#bord');
    if (bord instanceof HTMLCanvasElement) {
        const ctx = bord.getContext('2d');
        if (ctx instanceof CanvasRenderingContext2D) {
            const size = 30;
            // 처음 좌표 리셋
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = tetrominoColor[0];
            tetromino.forEach((row, rowY) => {
                row.forEach((col, colX) => {
                    if (col > 0) {
                        ctx.fillRect((colX + x) * size, (rowY + y) * size, size, size);
                    }
                });
            });
        }
    }
};
draw(hold, currentPositionX, currentPositionY);
document.addEventListener('keyup', moveTetromino);
function moveTetromino(e) {
    collisionCheck();
    switch (e.key) {
        case 'ArrowLeft':
            moveTetrominoLeft();
            break;
        case 'ArrowRight':
            moveTetrominoRight();
            break;
        case 'ArrowDown':
            moveTetrominoDown();
            break;
        case ' ':
            rotateTetromino();
            break;
    }
}
let direction = '';
function collisionCheck() {
    let isMove = true;
    hold.map((row, y) => {
        row.map((col, x) => {
            const boardCol = currentPositionX + x;
            const boardRow = currentPositionY + y;
            if (col > 0) {
                if (boardRow < 0 || boardRow >= gameBoard.length ||
                    boardCol < 0 || boardCol >= gameBoard[0].length) {
                    isMove = false;
                }
            }
        });
    });
    if (currentPositionX === 0) {
        direction = 'left';
    }
    else if (currentPositionX + hold[0].length === gameBoard[0].length) {
        direction = 'right';
    }
    else if (currentPositionY + hold.length === gameBoard.length) {
        direction = 'down';
    }
    else {
        direction = '';
    }
    console.log(direction);
    return isMove;
}
function moveTetrominoLeft() {
    if (direction !== 'left') {
        currentPositionX--;
        draw(hold, currentPositionX, currentPositionY);
    }
}
function moveTetrominoRight() {
    if (direction !== 'right') {
        currentPositionX++;
        draw(hold, currentPositionX, currentPositionY);
    }
}
function moveTetrominoDown() {
    if (direction !== 'down') {
        currentPositionY++;
        draw(hold, currentPositionX, currentPositionY);
    }
}
function rotateTetromino() {
    for (let y = 0; y < hold.length; y++) {
        for (let x = 0; x < y; x++) {
            [hold[x][y], hold[y][x]] = [hold[y][x], hold[x][y]];
        }
    }
    hold.forEach(row => row.reverse());
    draw(hold, currentPositionX, currentPositionY);
}
