const scoreSpan = document.querySelector('.score')
const timeSpan = document.querySelector('.time')
const start = document.querySelector('button')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
const reset = document.querySelectorAll('.reset')

let score = 0
let time = 30
let randonsF
let timerF


document.addEventListener('DOMContentLoaded', loaded)

function loaded() {
    const grid = document.querySelector('.grid')
    
    scoreSpan.innerText = score
    timeSpan.innerText = time
    for (let i=0; i<25; i++) {
        const div = document.createElement('div')
        div.classList.add('card')
        grid.appendChild(div)
    }
}

start.addEventListener('click', gameStart)

// 시작버튼 클릭
function gameStart() {
    randonsF = setInterval(randons, 1500)
    timerF = setInterval(timer, 1000)
}

// 랜덤으로 두더지 나타나기
function randons() {
    let randomNub = Math.floor(Math.random() * 24)
    const card = document.querySelectorAll('.card')
    const img = document.createElement('img')
    img.setAttribute('src', 'https://raw.githubusercontent.com/beren-105/Mini-Project/main/7_Whack_a_mole/image/fox.png')

    console.log(randomNub)
    card[randomNub].appendChild(img)
    img.addEventListener('click', imgclick)
    setTimeout(remove, 700);
}

// 두더지 다시 사라지기
function remove() {
    const img = document.querySelector('img')
    img.remove()
}

// 두더지 클릭
function imgclick() {
    score++
    scoreSpan.innerText = score
}

// 타이머 이벤트
function timer() {
    time--
    timeSpan.innerText = time
    if (time === 0) {
        gameOver()
    }
}

// 게임종료
function gameOver () {
    clearInterval(timerF)
    clearInterval(randonsF)
    
    if (score >= 10) {
        win.classList.remove('hidden')
    } else {
        lose.classList.remove('hidden')
    }

    reset.forEach((reset)=> {
        reset.addEventListener('click', resetBtn)
    })
}

// 리셋버튼
function resetBtn() {
    win.classList.add('hidden')
    lose.classList.add('hidden')
    score = 0
    time = 30
    scoreSpan.innerText = score
    timeSpan.innerText = time
}