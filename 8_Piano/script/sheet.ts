import { musics } from './pianoItems.js';

const freePlay  = document.querySelector('.free-play');
const sheetPlay  = document.querySelector('.sheet-play');
const select = document.querySelector('.select');
const sheet = document.querySelector('.sheet-music');

let score = 100
let index = 0

document.addEventListener('DOMContentLoaded', sheetSetting);

function sheetSetting() {

    // 연주 선택 이벤트
    if (freePlay instanceof HTMLButtonElement
        && sheetPlay instanceof HTMLButtonElement) {
    
        freePlay.addEventListener('click', (e) => handleTapBtn(e));
        sheetPlay.addEventListener('click', (e) => handleTapBtn(e));
    
    }
    
    // 악곡 선택 이벤트
    if (select instanceof HTMLDivElement) {

        musics.forEach((music)=> {
            // 선택버튼
            const musicName = music[0].name
            
            const selectBtn = document.createElement('button');
            selectBtn.classList.add('btn', 'select-btn');
            selectBtn.setAttribute('data-music-name', musicName)
            selectBtn.innerText = `# ${musicName}`;
            
            select.appendChild(selectBtn);
            selectBtn.addEventListener('click', (e) => handleSelectBtn(e))
        })
    }
}

function handleTapBtn(e:MouseEvent):void {
    
    if (select instanceof HTMLDivElement) {

        if (e.target === freePlay) {
            freePlay?.classList.add('btn-active');
            sheetPlay?.classList.remove('btn-active');
            select?.classList.add('hidden');
            sheet?.classList.add('hidden');
        } else {
            sheetPlay?.classList.add('btn-active');
            freePlay?.classList.remove('btn-active');
            select?.classList.remove('hidden');
            sheet?.classList.remove('hidden');
        }
    }
}

function handleSelectBtn(e:MouseEvent):void {
    const btns = document.querySelectorAll('.select-btn')
    btns.forEach((btn) => {
        if (btn instanceof HTMLButtonElement) {
            btn.classList.remove('select-active')
        }
    })

    if (e.target instanceof HTMLButtonElement) {
        e.target.classList.add('select-active')
        const name = e.target.getAttribute('data-music-name')
        sheetMusic(name, index)
    }
}

function sheetMusic(name: string|null, i:number) {
    const data = musics.find((music) => music[0].name === name)
    
    console.log(!!data)
    if (sheet instanceof HTMLElement && !!data) {
        sheet.innerHTML = (`
            <div class="score">
                <button class="btn reset">RESET</button>
                <span class="score-title">score: <span>100</span></span>
            </div>
            <div class="music">
                <h3 class="music-title">${data[i].name}</h3>
                <img src="${data[i].src}" alt="악보">
                <div class="syllableNames">
                    ${data[i].syllableNames.map(name => `<span class="key" data-value="${name}">${name}</span>`).join('')}
                </div>
            </div>
        `)
    }
}
