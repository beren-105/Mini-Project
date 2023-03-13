import { littleStar } from './pianoItems.js';
const freePlay = document.querySelector('.free-play');
const sheetPlay = document.querySelector('.sheet-play');
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
                ${littleStar[0].syllableNames.map((name) => `<span class="key">${name}</span>`).join('')}
            </div>
        </div>
        `);
    }
}
function handleTapBtn(e) {
    if (e.target === freePlay) {
        freePlay === null || freePlay === void 0 ? void 0 : freePlay.classList.add('btn-active');
        sheetPlay === null || sheetPlay === void 0 ? void 0 : sheetPlay.classList.remove('btn-active');
        sheet === null || sheet === void 0 ? void 0 : sheet.classList.add('hidden');
    }
    else {
        sheetPlay === null || sheetPlay === void 0 ? void 0 : sheetPlay.classList.add('btn-active');
        freePlay === null || freePlay === void 0 ? void 0 : freePlay.classList.remove('btn-active');
        sheet === null || sheet === void 0 ? void 0 : sheet.classList.remove('hidden');
    }
}
function handleSelectBtn(e) {
    const btns = document.querySelectorAll('.select-btn');
    const musicDiv = document.querySelectorAll('.musicDiv');
    btns.forEach((btn) => {
        if (btn instanceof HTMLButtonElement) {
            btn.classList.remove('select-active');
        }
    });
    musicDiv.forEach((musicDiv) => {
        if (musicDiv instanceof HTMLDivElement) {
            musicDiv.classList.add('hidden');
        }
        if (e.target instanceof HTMLButtonElement) {
            const btnName = e.target.getAttribute('data-music-name');
            const divName = document.querySelector(`div[data-name = "${btnName}"]`);
            divName === null || divName === void 0 ? void 0 : divName.classList.remove('hidden');
            e.target.classList.add('select-active');
        }
    });
}
