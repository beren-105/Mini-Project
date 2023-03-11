import { musics } from './pianoItems.js';

export let isMusic = 'Twinkle Twinkle Little Star';
const freePlay  = document.querySelector('.free-play');
const sheetPlay  = document.querySelector('.sheet-play');
const select = document.querySelector('.select');
const sheet = document.querySelector('.sheet-music');

document.addEventListener('DOMContentLoaded', sheetSetting);

function sheetSetting() {

    // 연주 선택 이벤트
    if (freePlay instanceof HTMLButtonElement
        && sheetPlay instanceof HTMLButtonElement) {
    
        freePlay.addEventListener('click', (e) => handleTapBtn(e));
        sheetPlay.addEventListener('click', (e) => handleTapBtn(e));
    
    }
    
    if (select instanceof HTMLDivElement) {

        // 악곡 선택 이벤트
        musics.forEach((music)=> {
            // 선택버튼
            const musicName = music[0].name
            
            const selectBtn = document.createElement('button');
            selectBtn.classList.add('btn', 'select-btn');
            selectBtn.setAttribute('data-music-name', musicName)
            selectBtn.innerText = `# ${musicName}`;
            
            select.appendChild(selectBtn);
            selectBtn.addEventListener('click', (e) => handleSelectBtn(e))
            
            
            // 악보창
            if (sheet instanceof HTMLElement) {
                const div = document.createElement('div');
                div.classList.add('musicDiv', 'hidden');
                div.setAttribute('data-name', musicName);
                div.innerHTML = (`
                    <div class="score">
                        <button class="btn reset">RESET</button>
                        <span class="score-title">score: <span class="score-result">100</span></span>
                    </div>
                    <div class="music">
                        <h3 class="music-title">${music[0].name}</h3>
                        <img class="music-img" src="${music[0].src}" alt="악보">
                        <div class="syllableNames">
                            ${music[0].syllableNames.map((name :String) => `<span class="key">${name}</span>`).join('')}
                        </div>
                    </div>
                `)
                sheet.appendChild(div)
            }
        })
    }

    const btn = document.querySelector(`button[data-music-name = "Twinkle Twinkle Little Star"]`);
    if (btn instanceof HTMLButtonElement) btn.click();
}

function handleTapBtn(e:MouseEvent):void {

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

function handleSelectBtn(e:MouseEvent):void {
    const btns = document.querySelectorAll('.select-btn');
    const musicDiv = document.querySelectorAll('.musicDiv');

    btns.forEach((btn) => {
        if (btn instanceof HTMLButtonElement) {
            btn.classList.remove('select-active');
        }
    })

    musicDiv.forEach((musicDiv) => {
        if (musicDiv instanceof HTMLDivElement) {
            musicDiv.classList.add('hidden')
        }

        if (e.target instanceof HTMLButtonElement) {
            const btnName = e.target.getAttribute('data-music-name');
            const divName = document.querySelector(`div[data-name = "${btnName}"]`);
            isMusic = `${btnName}`
            divName?.classList.remove('hidden')
            e.target.classList.add('select-active');
        }
    })
    
}