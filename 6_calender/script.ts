const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const date = new Date()


let prevLast = new Date()
let nowLast = new Date()

console.log(prevLast.getDate())

document.addEventListener('DOMContentLoaded', () => {
    const tableWeek = document.querySelector('.tableWeek')
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

    day()
})

function day() {
    const tableDay = document.querySelector('.tableDay')
    const mounthTitle = document.querySelector('.title')

    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[date.getMonth()]
    }
    
    if (tableDay instanceof HTMLDivElement) {
        for (let i=prevLast.getDay(); i>=0; i--) {
            const p = document.createElement('p')
            p.classList.add('prev')
            p.innerText = (prevLast.getDate()-i).toString()
            tableDay.appendChild(p)
        }
        for (let i=1; i<=nowLast.getDate(); i++) {
            const p = document.createElement('p')
            p.classList.add('now')
            p.innerText = i.toString()
            tableDay.appendChild(p)
        }
        for (let i=1; i<=(!0 ? 6-nowLast.getDay() : 1); i++) {
            const p = document.createElement('p')
            p.classList.add('next')
            p.innerText = i.toString()
            tableDay.appendChild(p)
            console.log(nowLast.getDay())
        }
    }
}
// 일 출력하기

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

prevBtn?.addEventListener('click', () => {
    // prevLast = new Date(date.getFullYear(), date.getMonth(), 0)
    nowLast = new Date(date.getFullYear(), date.getMonth()-1, 0)
    day()
})