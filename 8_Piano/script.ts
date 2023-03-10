import { whiteKey, blackKey } from './pianoItems.js'

console.log(whiteKey)
console.log(blackKey)

let index = 0
setInterval(add, 1000)
function add () {
 index++
}

console.log(index)