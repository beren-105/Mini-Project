"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pianoItems_js_1 = require("./pianoItems.js");
console.log(pianoItems_js_1.whiteKey);
console.log(pianoItems_js_1.blackKey);
let index = 0;
setInterval(add, 1000);
function add() {
    index++;
}
console.log(index);
