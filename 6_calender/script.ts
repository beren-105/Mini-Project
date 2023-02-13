const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const weekName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


const date = new Date()
let prevLast = new Date()
let nowLast = new Date()

const tableDays = document.querySelector('.tableDays')

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

    day(nowLast, prevLast)

})

type Days = (nowLast :Date, prevLast :Date) => void
let day: Days = function (nowLast) {
    const mounthTitle = document.querySelector('.title')

    const tableDay = document.createElement('div')
    tableDay.classList.add('tableDay', 'grid')
    tableDays?.appendChild(tableDay)


    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[nowLast.getMonth()]
    }

    if (tableDay instanceof HTMLDivElement) {
        if (prevLast.getDay() !== 6) {
            for (let i=prevLast.getDate() - prevLast.getDay(); i<=prevLast.getDate(); i++) {
                const p = document.createElement('p')
                p.classList.add('prev')
                p.innerHTML = i.toString()
                tableDay.appendChild(p)
            }
        }
        for (let i=1; i<=nowLast.getDate(); i++) {
            const p = document.createElement('p')
            p.classList.add('now')
            p.innerText = i.toString()
            tableDay.appendChild(p)
        }
        
        if (nowLast.getDay() !== 6) {
            for (let i=1; i<=(6 - nowLast.getDay() === 0 ? 1 : 6 - nowLast.getDay()); i++) {
                const p = document.createElement('p')
                p.classList.add('next')
                p.innerText = i.toString()
                tableDay.appendChild(p)
            }
        }
    }
}

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let index = 0

prevBtn?.addEventListener('click', () => {
    index++
    prevLast = new Date(date.getFullYear(), date.getMonth()-index, 0)
    nowLast = new Date(date.getFullYear(), (date.getMonth()+1)-index, 0)
    day(nowLast, prevLast)
    
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transform = `translateY(-${260*index}px)`
    }

    setTimeout(remove,500)
})

function remove() {
    
}