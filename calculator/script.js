

const buttons = document.querySelectorAll('button')
const input = document.querySelector('.input')
const answer = document.querySelector('.input-final')

let state = false
let index = 0

buttons.forEach((button) => {
    button.addEventListener('click', btnClick)
})

function btnClick(e) {
    const list = e.target.className

    switch (list) {
        case 'num' :
            numberClick(e.target)
            break;

        case 'operator' :
            if (state === true) {
                operatorClick(e.target)
                break;
            } else {break}

        case 'operator minus' :
            if (index === 0) {
                index = 1
                operatorClick(e.target)
                break;
            } else if (state === true) {
                operatorClick(e.target)
                break;
            } else {break}

        case 'equal' :
            if (state === true) {
                let result = (new Function ('return '+ input.value))
                answer.value = result()
                break;
            } else {break}

        case 'reset' : 
            state = true
            input.value = input.value.substring(0, input.value.length - 1)
            break;
        
        case 'all-reset' :
            allReset()
            break;
    }
}

function numberClick(e) {
    state = true
    index = 1
    input.value += e.dataset.value
}

function operatorClick(e) {
    state = false
    input.value += e.dataset.value
}

function allReset() {
    input.value = ''
    answer.value = '0'
    index = 0
}


window.addEventListener('keydown', keyclick)

function keyclick(e) {
    var keyNumber = e.which;

    if (keyNumber > 47 && keyNumber < 58 ||
        keyNumber > 96 && keyNumber < 105 ||
        keyNumber ===  189 ||
        keyNumber ===  187 ||
        keyNumber ===  191 ||
        keyNumber ===  111 ||
        keyNumber ===  107
        ) {
        buttons.forEach((btn) => {
            if (btn.dataset.value == e.key)
            btn.click()
        })
    } else if (keyNumber === 13) {
        buttons[17].click()
    } else if (keyNumber === 8) {
        buttons[2].click()
    } else if (keyNumber === 27) {
        buttons[1].click()
    }
}