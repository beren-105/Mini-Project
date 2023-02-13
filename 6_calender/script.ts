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

    // 월 출력하기
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = nowLast.getFullYear() + ', ' + monthName[nowLast.getMonth()]
    }

    //요일 출력하기
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

    
    const dayPTages = document.querySelectorAll('.now')

    // 오늘인 날짜 활성화하기
    if (date.getFullYear() === nowLast.getFullYear() && date.getMonth() === nowLast.getMonth()) {
        dayPTages.forEach((dayPTage :HTMLParagraphElement) => {
            if (Number(dayPTage.innerText) === nowLast.getDate()) {
                dayPTage.classList.add('nowDay')
            }
        })
    }

    // 클릭 시 일자 활성화하기
    dayPTages.forEach((dayPTage :HTMLParagraphElement) => {
        dayPTage.addEventListener('click', pClick)
    })
    

}

// a 날짜에서 b 날짜까지 선택하기
let clickIndex = 0
let clickItem :Element[] = []
type PClick = (e :MouseEvent) => void

let pClick :PClick = function(e) {
    
    clickIndex++
    if (e.target instanceof HTMLParagraphElement) {
        switch (clickIndex) {
            case 1 :
                e.target.classList.add('from')
                clickItem.push(e.target)
                break
            case 2 :
                e.target.classList.add('to')
                clickItem.push(e.target)
                break
            case 3 :
                clickItem.forEach((dayPTage) => {
                    dayPTage.classList.remove('from', 'to')
                })
                clickIndex=0
                break
        }
        
    }
}

// 버튼 클릭 이벤트
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let index = 0

prevBtn?.addEventListener('click', () => {
    index++
    prevLast = new Date(date.getFullYear(), date.getMonth()-index, 0)
    nowLast = new Date(date.getFullYear(), (date.getMonth()+1)-index, 0)
    day(nowLast, prevLast)
    
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0.5s'
        tableDays.style.transform = `translateX(-${364}px)`
    }

    setTimeout(remove,500)
})

nextBtn?.addEventListener('click', () => {
    index--
    prevLast = new Date(date.getFullYear(), date.getMonth()-index, 0)
    nowLast = new Date(date.getFullYear(), (date.getMonth()+1)-index, 0)
    console.log(prevLast.getMonth())
    day(nowLast, prevLast)
    
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0.5s'
        tableDays.style.transform = `translateX(-${364}px)`
    }

    setTimeout(remove,500)
    
    console.log(index)
})

function remove() {
    tableDays?.firstChild?.remove()
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0s'
        tableDays.style.transform = `translateX(0px)`
    }
}


