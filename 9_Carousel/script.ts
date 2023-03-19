const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slide = document.querySelector('.imgs');
const imgs = document.querySelectorAll('.img');

// clientWidth : 패딩값과 너비값을 포함한 값으로, 마진값을 나타나지 않는다.
const size = imgs[0].clientWidth;
let index = 0;

(function cloneSlide() {
    // 타입 어설션(type assertion)를 통한 강제 타입 교체
    // cloneNode : 복제된 node를 반환한다. 사용법 -> 기존노드.cloneNode(복제할노드)
    const firstImgClone = imgs[0].cloneNode(true) as HTMLImageElement;
    const lastImgClone = imgs[imgs.length-1].cloneNode(true) as HTMLImageElement;
    firstImgClone.setAttribute('id', 'firstImg');
    lastImgClone.setAttribute('id', 'lastImg');
    
    if (slide instanceof HTMLDivElement) {
        slide.appendChild(firstImgClone);
        slide.prepend(lastImgClone);
        slide.style.transform = `translateX(-${size}px)`
        slide.style.transition = '0.4s';
    }
})();


setInterval(autoSlide, 1000);

function autoSlide() {

    index++;

    if (slide instanceof HTMLDivElement) {
        slide.style.transition = '0.4s';
        slide.style.transform = `translateX(-${index * size}px)`;
    }

    // console.log(index)
    
}


slide?.addEventListener('transitionend', moveSlide);
function moveSlide() {

    if (slide instanceof HTMLDivElement) {
        // if (imgs[index].id === 'lastImg') {
        //     console.log('b');
        //     slide.style.transition = 'none';
        //     index = 0;
        //     slide.style.transform = `translateX(-${index * size}px)`
        // }
        if (index === imgs.length) {
            console.log('a')
            slide.style.transition = 'none';
            index = 0;
            slide.style.transform = `translateX(-${index * size}px)`
        }
    }
}

