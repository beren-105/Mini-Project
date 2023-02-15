
loaded()
function loaded() {
    const grid = document.querySelector('.grid')

    for (let i=0; i<25; i++) {
        const div = document.createElement('div')
        div.classList.add('card')
        grid?.appendChild(div)
    }

    // setInterval(randons, 2000)
}


function randons() {
    let randomNub = Math.floor(Math.random() * 24)
    const card = document.querySelectorAll('.card')
    const img = document.createElement('img')
    img.setAttribute('src', './image/fox.png')

    console.log(randomNub)
    card[randomNub].appendChild(img)
    
    setTimeout(remove, 500);
}

function remove() {
    const img = document.querySelector('img')
    img?.remove()
}