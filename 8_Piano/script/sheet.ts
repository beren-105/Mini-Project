import { littleStar } from './pianoItems.js';
import { Reset } from './score.js';

const freePlay  = document.querySelector('.free-play');
const sheetPlay  = document.querySelector('.sheet-play');
const sheet = document.querySelector('.sheet-music');

document.addEventListener('DOMContentLoaded', sheetSetting);

function sheetSetting() {

    // 연주 선택 이벤트
    if (freePlay instanceof HTMLButtonElement
        && sheetPlay instanceof HTMLButtonElement) {
    
        freePlay.addEventListener('click', (e) => handleTapBtn(e));
        sheetPlay.addEventListener('click', (e) => handleTapBtn(e));
    
    }
    
    // 악보창
    if (sheet instanceof HTMLElement) {
        sheet.innerHTML = (`
        <div class="score">
            <button class="btn reset">RESET</button>
            <span class="score-title">score: <span class="score-result">100</span></span>
        </div>
        <div class="music">
            <h3 class="music-title">${littleStar[0].name}</h3>
            <img class="img" src="${littleStar[0].src}" alt="악보">
            <div class="syllableNames">
                ${littleStar[0].syllableNames.map((name :String) => `<span class="key">${name}</span>`).join('')}
            </div>
        </div>
        `)
        
    }

    const reset = document.querySelector('.reset')
    if (reset instanceof HTMLButtonElement) {
        reset.addEventListener('click', handleResetBtn);
    }
}

function handleTapBtn(e:MouseEvent):void {

    if (e.target === freePlay) {
        freePlay?.classList.add('btn-active');
        sheetPlay?.classList.remove('btn-active');
        sheet?.classList.add('hidden');
    } else {
        sheetPlay?.classList.add('btn-active');
        freePlay?.classList.remove('btn-active');
        sheet?.classList.remove('hidden');
    }

}

function handleResetBtn () {
    const reset = new Reset();
    reset.reset()
}

