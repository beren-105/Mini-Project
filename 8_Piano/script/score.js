import { whiteKeys, blackKeys } from './pianoItems.js';
import { littleStar, happyBirthdey } from './pianoItems.js';
export let littleStarIndex = 0;
export let littleStarScore = 100;
let arrIndex = 0;
let right = [];
let data = littleStar;
export class Score {
    constructor(key, isMusic) {
        this.key = key;
        this.isMusic = isMusic;
    }
    dataUpdate() {
        if (this.isMusic === 'Twinkle Twinkle Little Star') {
            data = littleStar;
        }
        else {
            data = happyBirthdey;
        }
    }
    littleStar() {
        this.dataUpdate();
        console.log(data);
        const keys = document.querySelectorAll('.key');
        const musicDiv = document.querySelector('div[data-name="Twinkle Twinkle Little Star"]');
        const findWhiteKeys = whiteKeys.find((whiteKey) => whiteKey.keyboard === this.key);
        const findBlackKeys = blackKeys.find((blackKey) => blackKey.keyboard === this.key);
        // 맞을 시 변동사항
        if (musicDiv instanceof HTMLDivElement
            && littleStarIndex < littleStar.length) {
            if (!musicDiv.classList.value.includes('hidden')) {
                if (littleStar[littleStarIndex].syllableNames[arrIndex] === ((findWhiteKeys === null || findWhiteKeys === void 0 ? void 0 : findWhiteKeys.syllableName) || (findBlackKeys === null || findBlackKeys === void 0 ? void 0 : findBlackKeys.syllableName))) {
                    right.push(littleStar[littleStarIndex].syllableNames[arrIndex]);
                    keys[arrIndex].classList.add('red');
                    arrIndex++;
                    littleStarScore += 20;
                }
                else {
                    littleStarScore -= 10;
                }
            }
        }
        // 스코어 및 맞춘 글자 표시
        if (right.length === littleStar[littleStarIndex].syllableNames.length
            && littleStarIndex + 1 !== littleStar.length) {
            keys.forEach((key) => {
                if (key instanceof HTMLSpanElement) {
                    key.classList.remove('red');
                }
            });
            arrIndex = 0;
            littleStarIndex++;
            right = [];
        }
        // html 업데이트
        const scoreResult = document.querySelector('.score-result');
        const img = document.querySelector('.music-img');
        if (littleStarIndex < littleStar.length) {
            if (scoreResult instanceof HTMLSpanElement
                && img instanceof HTMLImageElement) {
                scoreResult.innerText = `${littleStarScore}`;
                img.src = littleStar[littleStarIndex].src;
            }
            keys.forEach((key, i) => {
                if (key instanceof HTMLSpanElement) {
                    key.innerText = `${littleStar[littleStarIndex].syllableNames[i]}`;
                }
            });
        }
    }
}
