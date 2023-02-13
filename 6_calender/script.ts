const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const date = new Date()


let prevLast = new Date()
let nowLast = new Date()

const tableDay = document.querySelector('.tableDay')
const tableWeek = document.querySelector('.tableWeek')

type Days = (prevLast :Date, nowLast :Date) => void

document.addEventListener('DOMContentLoaded', () => {
    prevLast = new Date(date.getFullYear(), date.getMonth(), 0)
    nowLast = new Date(date.getFullYear(), date.getMonth()+1, 0)

    // 요일 출력하기
    if (tableWeek instanceof HTMLDivElement) {
        weekName.forEach((week) => {
            const p = document.createElement('p')
            p.innerText = week
            tableWeek.appendChild(p)
        })
    }

    if (tableDay instanceof HTMLDivElement) {
        for (let i=prevLast.getDay(); i>=0; i--) {
            const p = document.createElement('p')
            p.classList.add('prev')
            tableDay.appendChild(p)
        }
        for (let i=1; i<=nowLast.getDate(); i++) {
            const p = document.createElement('p')
            p.classList.add('now')
            tableDay.appendChild(p)
        }
        for (let i=1; i<=(!0 ? 6-nowLast.getDay() : 1); i++) {
            const p = document.createElement('p')
            p.classList.add('next')
            tableDay.appendChild(p)
        }
    }

    day(prevLast, nowLast)
})

let day :Days = function (prevLast, nowLast) {
    const mounthTitle = document.querySelector('.title')

    const prev = document.querySelectorAll('.prev')
    const now = document.querySelectorAll('.now')
    const next = document.querySelectorAll('.next')
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[nowLast.getMonth()]
    }

    let prevLastArr : number[] = []
    
    for (let i=prevLast.getDay(); i>=0; i--) {
        prevLastArr.push(i)
    }
    prev.forEach((prevs :HTMLParagraphElement, i :number) => {
        if (prevs instanceof HTMLParagraphElement) {
            prevs.innerHTML = (prevLast.getDate()-(prevLastArr[i])).toString()
        }
    })
    
    now.forEach((nows :HTMLElement, i :number) => {
        if (nows instanceof HTMLParagraphElement) {
            nows.innerText = (i+1).toString()
        }
    })

    for (let i=0; i<=(!0 ? 6-nowLast.getDay() : 1); i++) {
        const a = next[i]
        {a instanceof HTMLParagraphElement ?
            a.innerText = (i+1).toString()
            : undefined
        }
    }
    
}

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

prevBtn?.addEventListener('click', () => {
    console.log('zzz')
    prevLast = new Date(date.getFullYear(), date.getMonth()-1, 0)
    nowLast = new Date(date.getFullYear(), date.getMonth()0, 0)
    day(prevLast, nowLast)
})