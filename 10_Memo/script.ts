
const plusBtn = document.querySelector('.plus-btn');
const closeBtn = document.querySelector('.close');
let memos = [
    '만들 기능',
    '삭제버튼, 추가버튼, 드래그 기능'
];

if (plusBtn instanceof HTMLButtonElement) {
    plusBtn.addEventListener('click',(e) => plusBtnClick(e));

    function plusBtnClick(e: MouseEvent) {
        const modal = document.querySelector('.modal');

        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.remove('hidden');
        }
    }
}

if (closeBtn instanceof HTMLButtonElement) {
    closeBtn.addEventListener('click', (e) => closeBtnClick(e));

    function closeBtnClick(e: MouseEvent) {
        const modal = document.querySelector('.modal');

        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.add('hidden');
        }
    }
}


document.addEventListener('DOMContentLoaded', loaded);

function loaded() {
    memos.forEach((memo) => {

    });
}