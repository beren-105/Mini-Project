// title
const yearTag = document.querySelector('.year')
const today = document.querySelector('.today')
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

let day = new Date()
let year = day.getFullYear()
let month = monthArr[day.getMonth()]
let date = day.getDate()

yearTag.innerHTML = year
today.innerHTML = month + '.' + date


const formText = document.querySelector('.form-text')
const form = document.querySelector('form')

// 미 입력 시 에러메세지
formText.addEventListener('keyup', (e)=> {
    const warning = document.querySelector('.warning')

    if (e.target.value === '') {
        warning.classList.remove('h-0')
        warning.classList.add('h-20')
    } else {
        warning.classList.remove('h-20')
        warning.classList.add('h-0')
    }
})

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const formValue = formText.value

    if (formValue !== '') {

        const ul = document.querySelector('.lists')
        const li = document.createElement('li')
        li.classList.add('list')
        ul.appendChild(li)
    

        // 체크표시, 할 일 내용 만들기
        const listCon = document.createElement('div')
        listCon.classList.add('list-cont')

        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check-btn')
        checkBtn.innerHTML = `
            <svg class="check-icon hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        `

        const listInput = document.createElement('input')
        listInput.classList.add('list-input')
        listInput.type = 'text'
        listInput.value= formValue
        listInput.setAttribute("readonly", 'readonly')
    
        li.appendChild(listCon)
        listCon.appendChild(checkBtn)
        listCon.appendChild(listInput)
    

        // 수정버튼, 삭제버튼 만들기
        const listBtn = document.createElement('div')
        listBtn.classList.add('list-btn')
        li.appendChild(listBtn)

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit','btn')
        editBtn.innerHTML = `
            <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>
        `
        editBtn.children[0].style.fill = `var(--color-blue)`
        listBtn.appendChild(editBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete','btn')
        deleteBtn.innerHTML = `
            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        `
        listBtn.appendChild(deleteBtn)


        // 체크박스 클릭 이벤트
        listCon.addEventListener('click', (e)=> {
            const btn = e.currentTarget.firstElementChild
            const input = e.currentTarget.children[1]
            btn.firstElementChild.classList.toggle('hidden')
            input.classList.toggle('through')
        })


        // 삭제하기
        deleteBtn.addEventListener('click', (e) => {
            li.remove(e.currentTarget)
        })


        // 내용 수정하기
        editBtn.addEventListener('click', (e)=>{
            const svg = e.currentTarget.firstElementChild
            if (svg.style.fill === `var(--color-blue)`) {
                svg.style.fill = `var(--color--green)`
                listInput.style.outline = 'auto'
                listInput.removeAttribute('readonly')
                listInput.focus()
            } else {
                listInput.setAttribute("readonly", 'readonly')
                svg.style.fill = `var(--color-blue)`
                listInput.style.outline = 'none'
            }
        })
    }

    formText.value =''
    
})