const cards = [
    {
        name: 'bear',
        src: 'img/bear.png',
        id: 0
    },
    {
        name: 'cow',
        src: 'img/cow.png',
        id: 1
    },
    {
        name: 'seal',
        src: 'img/seal.png',
        id: 2
    },
    {
        name: 'deer',
        src: 'img/deer.png',
        id: 3
    },
    {
        name: 'dog',
        src: 'img/dog.png',
        id: 4
    },
    {
        name: 'fox',
        src: 'img/fox.png',
        id: 5
    },
    {
        name: 'pig',
        src: 'img/pig.png',
        id: 6
    },
    {
        name: 'reindeer',
        src: 'img/reindeer.png',
        id: 7
    },
]

const cardCopy =  cards.concat(cards.slice(0))
// shuffle(cardCopy)

let pickedCards = []
let pickedCardsId = []
let completeCardsId = []
const card = document.querySelectorAll('.card')
const cardImg = document.querySelectorAll('.img')
const span = document.querySelector('.score')

let score = 0

document.addEventListener('DOMContentLoaded', ()=> {
    const section = document.querySelector('.cards')

    cardCopy.forEach((card) => {
        const div = document.createElement('button')
        const img = document.createElement('img')
        
        div.classList.add('card')
        img.classList.add('img', 'hidden')
        div.setAttribute('data-id', card.id)
        // img.setAttribute('data-id', card.id)
        img.setAttribute('src', card.src)

        section.appendChild(div)
        div.appendChild(img)
        div.addEventListener('click', picked)
    })

    
})




// 카드 섞기
function shuffle(cardCopy) {
    for (let i=cardCopy.length-1; i>0; i--) {
        const j = Math.floor((i + 1) * Math.random());
        [cardCopy[i], cardCopy[j]] = [cardCopy[j], cardCopy[i]]
    }
    return cardCopy
}

// 카드 클릭
function picked(e) {
    pickedCards.push(e.target)
    pickedCardsId.push(e.target.getAttribute('data-id'))

    e.target.classList.add('pickde')
    e.target.firstChild.classList.remove('hidden')

    if (pickedCards.length === 2) {
        setTimeout(matchCard, 500)
    }
    
}

// 카드 확인
function matchCard(e) {
    
    
    if (pickedCardsId[0] === pickedCardsId[1]) {
        score++
        span.innerText = score
        completeCardsId.push(pickedCardsId)
        pickedCards[0].disabled = true
        pickedCards[1].disabled = true
    } else {
        pickedCards[0].classList.remove('pickde')
        pickedCards[1].classList.remove('pickde')
        pickedCards[0].firstChild.classList.add('hidden')
        pickedCards[1].firstChild.classList.add('hidden')

    }
    if (score === cards.length) {
        complete()
    }
    pickedCards = []
    pickedCardsId = []
    
}

const clear = document.querySelector('.clear')
function complete() {
    const resetBtn = document.querySelector('.resetBtn')
    
    clear.classList.remove('hidden')
    resetBtn.addEventListener('click', reset)
}

function reset() {
    const cardImg = document.querySelectorAll('.img')
    score = 0
    span.innerText = '0'
    pickedCards = []
    pickedCardsId = []
    cardImg.forEach((cards)=> {
        cards.classList.add('hidden')
    })
    clear.classList.add('hidden')
}