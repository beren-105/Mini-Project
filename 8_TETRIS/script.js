var tetrominos = [
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
var tetrominoColor = [
    '#F16767', '#F99417', '#F2CD5C', '#CDE990', '#89C4E1', '#00337C', '#D09CFA'
];
random(tetrominos);
random(tetrominoColor);
function random(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr;
}
var row = 10;
var col = 20;
var currentPositionX = 3;
var currentPositionY = 0;
var rotate = 0;
var hold = tetrominos[0];
var draw = function (tetromino, x, y) {
    var bord = document.querySelector('#bord');
    if (bord instanceof HTMLCanvasElement) {
        var ctx_1 = bord.getContext('2d');
        if (ctx_1 instanceof CanvasRenderingContext2D) {
            var size_1 = 30;
            ctx_1.clearRect(0, 0, ctx_1.canvas.width, ctx_1.canvas.height);
            ctx_1.fillStyle = tetrominoColor[0];
            tetromino.forEach(function (row, rowY) {
                row.forEach(function (col, colX) {
                    if (col > 0) {
                        ctx_1.fillRect((colX + x) * size_1, (rowY + y) * size_1, size_1, size_1);
                    }
                });
            });
        }
    }
};
draw(hold, currentPositionX, currentPositionY);
document.addEventListener('keyup', moveTetromino);
function moveTetromino(e) {
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
            break;
    }
}
function moveTetrominoLeft() {
    if (currentPositionX > 0) {
        currentPositionX--;
        draw(hold, currentPositionX, currentPositionY);
    }
}
function moveTetrominoRight() {
    if (currentPositionX < (row - hold[0].length)) {
        currentPositionX++;
        draw(hold, currentPositionX, currentPositionY);
    }
}
function moveTetrominoDown() {
    if (currentPositionY < col - hold.length) {
        currentPositionY++;
        draw(hold, currentPositionX, currentPositionY);
    }
}
