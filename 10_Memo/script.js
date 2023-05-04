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
            article.classList.add('content', 'list');
            article.setAttribute('id', `${memo.id}`);
            article.innerHTML = `
                <div class="btns">
                    <button class="btn delete" type="button" data-id=${memo.id}>Delete</button>
                </div>
                <textarea name="" id="" cols="30" rows="7" class="article-content">${memo.content}</textarea>
                `;
            contents.prepend(article);
        });
    }
    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach(deleteBtn => {
        if (deleteBtn instanceof HTMLButtonElement) {
            deleteBtn.addEventListener('click', (e) => handleDelete(e));
        }
    });
}
// 모달 열기
if (plusBtn instanceof HTMLButtonElement) {
    plusBtn.addEventListener('click', (e) => plusBtnClick(e));
    function plusBtnClick(e) {
        const modal = document.querySelector('.modal');
        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.remove('hidden');
        }
    }
}
// 모달 닫기
if (closeBtn instanceof HTMLButtonElement) {
    closeBtn.addEventListener('click', (e) => closeBtnClick(e));
    function closeBtnClick(e) {
        const modal = document.querySelector('.modal');
        if (e.target && modal instanceof HTMLDivElement) {
            modal.classList.add('hidden');
        }
    }
}
// 폼 제출
if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', (e) => handleSubmit(e));
    function handleSubmit(e) {
        e.preventDefault();
        const contents = document.querySelector('.contents');
        const addContent = document.querySelector('.add-content');
        const list = document.querySelectorAll('.list');
        const lastList = list[list.length - 1];
        const id = Math.floor(Math.random() * 10000);
        if (addContent instanceof HTMLTextAreaElement) {
            // 메모 리스트 추가
            memos = [...memos, { content: addContent.value, id: id }];
            // 새 article 만들기
            if (contents instanceof HTMLElement) {
                const article = document.createElement('article');
                const btnDiv = document.createElement('div');
                const btn = document.createElement('button');
                article.classList.add('content', 'list');
                article.setAttribute('id', `${id}`);
                article.innerHTML = `
                    <textarea name="" id="" cols="30" rows="7" class="article-content">${addContent.value}</textarea>
                    `;
                btnDiv.classList.add('btns');
                btn.classList.add('btn', 'delete');
                btn.setAttribute('data-id', `${id}`);
                btn.innerText = 'Delete';
                contents.insertBefore(article, lastList.nextSibling);
                article.prepend(btnDiv);
                btnDiv.appendChild(btn);
                btn.addEventListener('click', (e) => handleDelete(e));
            }
            // 모달창 제거
            if (closeBtn instanceof HTMLButtonElement) {
                closeBtn.click();
            }
            addContent.value = '';
        }
    }
}
function handleDelete(e) {
    var _a;
    if (e.currentTarget instanceof HTMLButtonElement) {
        const btnId = e.currentTarget.dataset.id;
        if (btnId) {
            const updateMemo = memos.filter(memo => memo.id !== Number(btnId));
            memos = updateMemo;
            (_a = document.getElementById(btnId)) === null || _a === void 0 ? void 0 : _a.remove();
        }
        console.log(memos);
    }
}
