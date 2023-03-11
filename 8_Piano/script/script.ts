import { whiteKeys, blackKeys } from './pianoItems.js'
import { Score } from './score.js'

document.addEventListener('DOMContentLoaded', pianoSetting);

function pianoSetting() {
    const keys = document.querySelector('.keys');
    const sharp = document.querySelector('.sharp');

    // 흰 건반 세팅
    if (keys instanceof HTMLDivElement) {
        whiteKeys.forEach((whiteKey) => {
            
            const key = document.createElement('button');

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
                const sharpKey = document.createElement('button');

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

                const sharpKey = document.createElement('button');

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

    // 클릭 이벤트
    keysId.forEach((key) => {
        if (key instanceof HTMLButtonElement) {
            key.addEventListener('mousedown', (e) => handleMouseDown(e))
            key.addEventListener('mouseup', (e) => handleMouseUp(e))
        }
    })

    sharpId.forEach((sharp) => {
        if (sharp instanceof HTMLButtonElement) {
            sharp.addEventListener('mousedown', (e) => handleMouseDown(e))
            sharp.addEventListener('mouseup', (e) => handleMouseUp(e))
        }
    })

}


function handleKeyDowm(e:KeyboardEvent):void {

    const keys = document.querySelectorAll('#key');
    const sharp = document.querySelectorAll('#sharp-key');

    keys.forEach((key) => {
        if (key instanceof HTMLButtonElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard && !e.repeat) {

                const keyData = whiteKeys.find(whiteKey => whiteKey.keyboard === e.code);
                const audio = new Audio(keyData?.src);
                audio.play();
                key.firstElementChild?.classList.add('key-active');
            }
        }
    })

    sharp.forEach((key) => {
        if (key instanceof HTMLButtonElement) {
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
        if (key instanceof HTMLButtonElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard) {
                key.firstElementChild?.classList.remove('key-active');
            }
        }
    })

    sharp.forEach((key) => {
        if (key instanceof HTMLButtonElement) {
            const keyboard = key.getAttribute('data-keyboard');

            if (e.code === keyboard) {
                key.classList.remove('sharp-active');
            }
        }
    })
}

function handleMouseDown(e:MouseEvent) {

    if (e.currentTarget instanceof HTMLButtonElement) {
        const id = e.currentTarget.getAttribute('id');
        const keyboard = e.currentTarget.getAttribute('data-keyboard');
        
        if (id === 'key') {
            const keyData = whiteKeys.find(whiteKey => whiteKey.keyboard === keyboard);
            const audio = new Audio(keyData?.src);
    
            audio.play();
            
            e.currentTarget.firstElementChild?.classList.add('key-active');
        }

        if (id === 'sharp-key') {
            const keyData = blackKeys.find(blackKey => blackKey.keyboard === keyboard);
            const audio = new Audio(keyData?.src);
    
            audio.play();
            
            e.currentTarget.classList.add('sharp-active');
        }
    }
    
}

function handleMouseUp(e:MouseEvent) {
    if (e.currentTarget instanceof HTMLButtonElement) {
        const id = e.currentTarget.getAttribute('id');

        if (id === 'key') {
            e.currentTarget.firstElementChild?.classList.remove('key-active');
        }

        if (id === 'sharp-key') {
            e.currentTarget.classList.remove('sharp-active');
        }
    }
}


