import { whiteKeys, blackKeys } from './pianoItems.js'
import { littleStar } from './pianoItems.js';

let index = 0;
let score = 100;

let arrIndex = 0;
let right:string[] = [];

export class Score {
    key? :string
    
    constructor(key? :string) {
        this.key = key;
    }

    littleStar() {

        const keys = document.querySelectorAll('.key');
        const sheet = document.querySelector('.sheet-music');

        const findWhiteKeys = whiteKeys.find((whiteKey) => whiteKey.keyboard === this.key);
        const findBlackKeys = blackKeys.find((blackKey) => blackKey.keyboard === this.key);

        // 맞을 시 변동사항
        if (sheet instanceof HTMLDivElement
            && index < littleStar.length) {

            if (!sheet.classList.value.includes('hidden')) {

                if(littleStar[index].syllableNames[arrIndex] === (findWhiteKeys?.syllableName || findBlackKeys?.syllableName)) {
                    right.push(littleStar[index].syllableNames[arrIndex]);
                    keys[arrIndex].classList.add('red');
                    arrIndex++;
                    score += 20;
                    console.log(score)
                } else {
                    score -=10;
                }
            }
        }

        // 스코어 및 맞춘 글자 표시
        if (right.length === littleStar[index].syllableNames.length
            && index+1 !== littleStar.length) {
            keys.forEach((key) => {
                if (key instanceof HTMLSpanElement) {
                    key.classList.remove('red');
                }
            })
            arrIndex = 0;
            index++;
            right = [];
        }


        // html 업데이트
        const scoreResult = document.querySelector('.score-result');
        const img = document.querySelector('.img');
        
        if (index < littleStar.length) {
            if (scoreResult instanceof HTMLSpanElement
                && img instanceof HTMLImageElement) {
                    scoreResult.innerText = `${score}`;
                    img.src=littleStar[index].src;
            }

            keys.forEach((key, i) => {
                if (key instanceof HTMLSpanElement) {
                    key.innerText = `${littleStar[index].syllableNames[i]}`
                }
            })
        }
    }

    reset() {
        index = 0;
        score = 100;
        arrIndex = 0;
        right = [];

        const scoreResult = document.querySelector('.score-result');
        const img = document.querySelector('.img');
        const keys = document.querySelectorAll('.key');
        
        if (index < littleStar.length) {
            if (scoreResult instanceof HTMLSpanElement
                && img instanceof HTMLImageElement) {
                    scoreResult.innerText = `${score}`;
                    img.src=littleStar[index].src;
            }

            keys.forEach((key, i) => {
                if (key instanceof HTMLSpanElement) {
                    key.innerText = `${littleStar[index].syllableNames[i]}`
                }
            })
        }
    }
}