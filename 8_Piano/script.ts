import { whiteKeys, blackKeys } from './pianoItems.js'

console.log(whiteKeys)
console.log(blackKeys)

document.addEventListener('DOMContentLoaded', pianoSetting);

function pianoSetting() {
    const keys = document.querySelector('.keys');
    const sharp = document.querySelector('.sharp');

    // 흰 건반 세팅
    if (keys instanceof HTMLDivElement) {
        whiteKeys.forEach((whiteKey) => {
            
            const key = document.createElement('div');
            key.classList.add('key');
            key.setAttribute('id', 'key');
            key.setAttribute('data-keyboard', whiteKey.keyboard);
            key.innerHTML = (`
                <div class="key-top">
                    <span class="key-name" >${whiteKey.dateVaule}</span>
                </div>
                <div class="key-bottom"></div>
            `);
            keys.appendChild(key);
        })
    }

    // 검은 건반 세팅
    if (sharp instanceof HTMLDivElement) {
        blackKeys.forEach((blackKey, i) => {
            if (i === 0 || i === 2 || i === 5 || i === 8) {
                const empty = document.createElement('div');
                empty.classList.add('empty');
                sharp.appendChild(empty);

                const sharpKey = document.createElement('div');
                sharpKey.setAttribute('id', 'sharp-key');
                sharpKey.innerHTML = (`
                    <div class="sharp-inner">
                        <span class="sharp-name">${blackKey.dateVaule}</span>
                    </div>
                `);
                sharp.appendChild(sharpKey);
            } else {
                const sharpKey = document.createElement('div');
                sharpKey.setAttribute('id', 'sharp-key');
                sharpKey.innerHTML = (`
                    <div class="sharp-inner">
                        <span class="sharp-name">${blackKey.dateVaule}</span>
                    </div>
                `);
                sharp.appendChild(sharpKey);
            }
        })
    }

    // 키보드 이벤트
    document.addEventListener('keydown', (e) => playPiano(e))   
}

function playPiano(e:KeyboardEvent):void {
    console.log(e.code)

    const keys = document.querySelectorAll('#keys');
    const sharp = document.querySelectorAll('#sharp');

    keys.forEach((key) => {
        if (key instanceof HTMLDivElement) {
            
        }
    })
}