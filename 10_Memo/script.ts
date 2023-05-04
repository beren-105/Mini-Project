
const plusBtn = document.querySelector('.plus-btn');
const closeBtn = document.querySelector('.close');
const form = document.querySelector('.form');

let memos = [
    {
        content: '장보기',
        id: 0,
    },
    {
        content: '운동하기',
        id: 1,
    },
    {
        content: '공부하기',
        id: 2,
    },
];

// 첫로딩 시 화면에 메모 생성
document.addEventListener('DOMContentLoaded', loaded);

function loaded() {
    const contents = document.querySelector('.contents');

    if (contents instanceof HTMLElement) {
        memos.forEach((memo) => {
            const article = document.createElement('article');
            article.classList.add('content');
            article.setAttribute('id', `${memo.id}`);
            article.innerHTML = `
                <div class="btns">
                    <button class="btn delete" type="button">Delete</button>
                </div>
                <textarea name="" id="" cols="30" rows="7" class="article-content">${memo.content}</textarea>
                `;
            contents.prepend(article);
        });

    }
}

// 모달 열기
if (plusBtn instanceof HTMLButtonElement) {
    plusBtn.addEventListener('click',(e) => plusBtnClick(e));

    function plusBtnClick(e: MouseEvent) {
        const modal = document.querySelector('.modal');

        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.remove('hidden');
        }
    }
}

// 모달 닫기
if (closeBtn instanceof HTMLButtonElement) {
    closeBtn.addEventListener('click', (e) => closeBtnClick(e));

    function closeBtnClick(e: MouseEvent) {
        const modal = document.querySelector('.modal');

        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.add('hidden');
        }
    }
}

// 폼 제출
if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', (e) => handleSubmit(e));

    function handleSubmit(e :SubmitEvent) {
        e.preventDefault();

        const addContent = document.querySelector('.add-content'); 

        if (addContent instanceof HTMLTextAreaElement) {
            memos = [...memos, {content: addContent.value, id:Math.floor(Math.random()*10000)}];
            addContent.value = '';

            if (closeBtn instanceof HTMLButtonElement) {
                closeBtn.click();
            }
        }
    }
}