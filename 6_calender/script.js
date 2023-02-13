var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var date = new Date();
var prevLast = new Date();
var nowLast = new Date();
var tableDay = document.querySelector('.tableDay');
var tableWeek = document.querySelector('.tableWeek');
document.addEventListener('DOMContentLoaded', function () {
    prevLast = new Date(date.getFullYear(), date.getMonth(), 0);
    nowLast = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // 요일 출력하기
    if (tableWeek instanceof HTMLDivElement) {
        weekName.forEach(function (week) {
            var p = document.createElement('p');
            p.innerText = week;
            tableWeek.appendChild(p);
        });
    }
    if (tableDay instanceof HTMLDivElement) {
        for (var i = prevLast.getDay(); i >= 0; i--) {
            var p = document.createElement('p');
            p.classList.add('prev');
            tableDay.appendChild(p);
        }
        for (var i = 1; i <= nowLast.getDate(); i++) {
            var p = document.createElement('p');
            p.classList.add('now');
            tableDay.appendChild(p);
        }
        for (var i = 1; i <= (!0 ? 6 - nowLast.getDay() : 1); i++) {
            var p = document.createElement('p');
            p.classList.add('next');
            tableDay.appendChild(p);
        }
    }
    day(prevLast, nowLast);
});
var day = function (prevLast, nowLast) {
    var mounthTitle = document.querySelector('.title');
    var prev = document.querySelectorAll('.prev');
    var now = document.querySelectorAll('.now');
    var next = document.querySelectorAll('.next');
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[nowLast.getMonth()];
    }
    var prevLastArr = [];
    for (var i = prevLast.getDay(); i >= 0; i--) {
        prevLastArr.push(i);
    }
    prev.forEach(function (prevs, i) {
        if (prevs instanceof HTMLParagraphElement) {
            prevs.innerHTML = (prevLast.getDate() - (prevLastArr[i])).toString();
        }
    });
    now.forEach(function (nows, i) {
        if (nows instanceof HTMLParagraphElement) {
            nows.innerText = (i + 1).toString();
        }
    });
    for (var i = 0; i <= (!0 ? 6 - nowLast.getDay() : 1); i++) {
        var a = next[i];
        {
            a instanceof HTMLParagraphElement ?
                a.innerText = (i + 1).toString()
                : undefined;
        }
    }
};
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
    console.log('zzz');
    prevLast = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    nowLast = new Date(date.getFullYear(), date.getMonth(), 0, 0);
    day(prevLast, nowLast);
});
