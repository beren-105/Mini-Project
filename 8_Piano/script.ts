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
                    <span class="key-vaule key-name" >${whiteKey.syllableName}</span>
                    <span class="key-vaule" >${whiteKey.key}</span>
                </div>
                <div class="key-bottom"></div>
            `);
            keys.appendChild(key);
        })
    }

    // 검은 건반 세팅
    if (sharp instanceof HTMLDivElement) {
        blackKeys.forEach((blackKey, i) => {
            if (i === 0 || i === 2 || i === 5 || i === 8 || i === 10) {

                // 흑건 사이 빈공간
                const empty = document.createElement('div');

                empty.classList.add('empty');
                sharp.appendChild(empty);


                //흑건
                const sharpKey = document.createElement('div');

                sharpKey.classList.add('sharp-key');
                sharpKey.setAttribute('id', 'sharp-key');
                sharpKey.setAttribute('data-keyboard', blackKey.keyboard);

                sharpKey.innerHTML = (`
                    <div class="sharp-inner">
                        <span class="sharp-vaule">${blackKey.syllableName}</span>
                        <span class="sharp-vaule">${blackKey.key}</span>
                    </div>
                `);
                sharp.appendChild(sharpKey);

            } else {

                const sharpKey = document.createElement('div');

                sharpKey.classList.add('sharp-key');
                sharpKey.setAttribute('id', 'sharp-key');
                sharpKey.setAttribute('data-keyboard', blackKey.keyboard);

                sharpKey.innerHTML = (`
                    <div class="sharp-inner">
                        <span class="sharp-vaule">${blackKey.syllableName}</span>
                        <span class="sharp-vaule">${blackKey.key}</span>
                    </div>
                `);
                sharp.appendChild(sharpKey);
            }
        })
    }

    
    const keysId = document.querySelectorAll('#key');
    const sharpId = document.querySelectorAll('#sharp-key');

    // 키보드 이벤트
    document.addEventListener('keydown', (e) => handleKeyDowm(e))
    document.addEventListener('keyup', (e) => handleKeyup(e))

    keysId.forEach((key) => {
        key.addEventListener('click', (e) => handleClickKey(e))
    })

}

function handleClickKey(e:MouseEvent) {
    const keys = document.querySelectorAll('#key');
    const sharp = document.querySelectorAll('#sharp-key');

    console.log('a')
    console.log(e.target)
    
}

function handleKeyDowm(e:KeyboardEvent):void {

    const keys = document.querySelectorAll('#key');
    const sharp = document.querySelectorAll('#sharp-key');

    keys.forEach((key) => {
        if (key instanceof HTMLDivElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard && !e.repeat) {

                const keyData = whiteKeys.find(whiteKey => whiteKey.keyboard === e.code);
                const audio = new Audio(keyData?.src);
                audio.play();
                key.firstElementChild?.classList.add('key-ative');
            }
        }
    })

    sharp.forEach((key) => {
        if (key instanceof HTMLDivElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard && !e.repeat) {

                const keyData = blackKeys.find(blackKey => blackKey.keyboard === e.code);
                const audio = new Audio(keyData?.src);
                audio.play();
                key.classList.add('sharp-active');
            }
        }
    })
}

function handleKeyup(e:KeyboardEvent):void {

    const keys = document.querySelectorAll('#key');
    const sharp = document.querySelectorAll('#sharp-key');

    keys.forEach((key) => {
        if (key instanceof HTMLDivElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard && !e.repeat) {
                key.firstElementChild?.classList.remove('key-ative');
            }
        }
    })

    sharp.forEach((key) => {
        if (key instanceof HTMLDivElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard && !e.repeat) {
                key.classList.remove('sharp-active');
            }
        }
    })
}