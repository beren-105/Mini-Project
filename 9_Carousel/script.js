const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
const slide = document.querySelector('.imgs');
const imgs = document.querySelectorAll('.img');
// clientWidth : 패딩값과 너비값을 포함한 값으로, 마진값을 나타나지 않는다.
const size = imgs[0].clientWidth;
const startPosition = size * imgs.length;
let index = 0;
let autoSlide;
document.addEventListener('DOMContentLoaded', createBtn);
function createBtn() {
    const slideBtns = document.querySelector('.slide-btns');
    for (let i = 0; i < imgs.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('slide-btn');
        btn.setAttribute('data-id', `${i}`);
        if (slideBtns instanceof HTMLDivElement) {
            slideBtns.appendChild(btn);
        }
        btn.addEventListener('click', dotBtnActive);
    }
}
function dotBtnActive({ target }) {
    const slideBtns = document.querySelectorAll('.slide-btn');
    slideBtns.forEach((btn) => {
        if (btn instanceof HTMLButtonElement) {
            btn.classList.remove('active');
            if (slide instanceof HTMLDivElement && target) {
                const targetBtn = target;
                index = Number(targetBtn.dataset.id);
                targetBtn.classList.add('active');
                slide.style.transition = '0.4s';
                slide.style.transform = `translateX(-${index * size + startPosition}px)`;
            }
        }
    });
    console.log(index);
}
(function cloneSlide() {
    // 타입 어설션(type assertion)를 통한 강제 타입 교체
    // cloneNode : 복제된 node를 반환한다. 사용법 -> 기존노드.cloneNode(복제할노드)
    if (slide instanceof HTMLDivElement) {
        for (let i = 0; i < imgs.length; i++) {
            const imgClone = imgs[i].cloneNode(true);
            imgClone.setAttribute('id', 'clone');
            slide.appendChild(imgClone);
        }
        for (let i = imgs.length - 1; i >= 0; i--) {
            const imgClone = imgs[i].cloneNode(true);
            imgClone.setAttribute('id', 'clone');
            slide.prepend(imgClone);
        }
        slide.style.transform = `translateX(-${startPosition}px)`;
    }
})();
if (slide instanceof HTMLDivElement
    && carousel instanceof HTMLDivElement
    && prevBtn instanceof HTMLButtonElement
    && nextBtn instanceof HTMLButtonElement) {
    autoSlide = setInterval(nextSlide, 2000);
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    slide.addEventListener('transitionend', resetSlide);
    carousel.addEventListener('mouseover', handleMouseOver);
    carousel.addEventListener('mouseleave', handleMouseLeave);
}
function nextSlide() {
    if (slide instanceof HTMLDivElement && index < imgs.length) {
        index++;
        slide.style.transition = '0.4s';
        slide.style.transform = `translateX(-${index * size + startPosition}px)`;
    }
}
function prevSlide() {
    if (slide instanceof HTMLDivElement && index >= 0) {
        index--;
        slide.style.transition = '0.4s';
        slide.style.transform = `translateX(-${index * size + startPosition}px)`;
    }
}
function resetSlide() {
    if (slide instanceof HTMLDivElement) {
        if (index === imgs.length) {
            slide.style.transition = 'none';
            index = 0;
            slide.style.transform = `translateX(-${index * size + startPosition}px)`;
        }
        if (index < 0) {
            slide.style.transition = 'none';
            index = imgs.length - 1;
            slide.style.transform = `translateX(-${index * size + startPosition}px)`;
        }
    }
}
function handleMouseOver(e) {
    if (e.currentTarget)
        clearInterval(autoSlide);
}
function handleMouseLeave(e) {
    if (e.currentTarget)
        autoSlide = setInterval(nextSlide, 2000);
}
