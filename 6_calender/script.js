var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var weekName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var date = new Date();
var prevLast = new Date();
var nowLast = new Date();
var tableDays = document.querySelector('.tableDays');
document.addEventListener('DOMContentLoaded', function () {
    var tableWeek = document.querySelector('.tableWeek');
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
    day(nowLast, prevLast);
});
var day = function (nowLast) {
    var mounthTitle = document.querySelector('.title');
    var tableDay = document.createElement('div');
    tableDay.classList.add('tableDay', 'grid');
    tableDays === null || tableDays === void 0 ? void 0 : tableDays.appendChild(tableDay);
    // 월 출력하기
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = nowLast.getFullYear() + ', ' + monthName[nowLast.getMonth()];
    }
    //요일 출력하기
    if (tableDay instanceof HTMLDivElement) {
        if (prevLast.getDay() !== 6) {
            for (var i = prevLast.getDate() - prevLast.getDay(); i <= prevLast.getDate(); i++) {
                var p = document.createElement('p');
                p.classList.add('prev');
                p.innerHTML = i.toString();
                tableDay.appendChild(p);
            }
        }
        for (var i = 1; i <= nowLast.getDate(); i++) {
            var p = document.createElement('p');
            p.classList.add('now');
            p.innerText = i.toString();
            tableDay.appendChild(p);
        }
        if (nowLast.getDay() !== 6) {
            for (var i = 1; i <= (6 - nowLast.getDay() === 0 ? 1 : 6 - nowLast.getDay()); i++) {
                var p = document.createElement('p');
                p.classList.add('next');
                p.innerText = i.toString();
                tableDay.appendChild(p);
            }
        }
    }
    var dayPTages = document.querySelectorAll('.now');
    // 오늘인 날짜 활성화하기
    if (date.getFullYear() === nowLast.getFullYear() && date.getMonth() === nowLast.getMonth()) {
        dayPTages.forEach(function (dayPTage) {
            if (Number(dayPTage.innerText) === nowLast.getDate()) {
                dayPTage.classList.add('nowDay');
            }
        });
    }
    // 클릭 시 일자 활성화하기
    dayPTages.forEach(function (dayPTage) {
        dayPTage.addEventListener('click', pClick);
    });
};
// a 날짜에서 b 날짜까지 선택하기
var clickIndex = 0;
var clickItem = [];
var pClick = function (e) {
    clickIndex++;
    if (e.target instanceof HTMLParagraphElement) {
        switch (clickIndex) {
            case 1:
                e.target.classList.add('from');
                clickItem.push(e.target);
                break;
            case 2:
                e.target.classList.add('to');
                clickItem.push(e.target);
                break;
            case 3:
                clickItem.forEach(function (dayPTage) {
                    dayPTage.classList.remove('from', 'to');
                });
                clickIndex = 0;
                break;
        }
    }
};
// 버튼 클릭 이벤트
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var index = 0;
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
    index++;
    prevLast = new Date(date.getFullYear(), date.getMonth() - index, 0);
    nowLast = new Date(date.getFullYear(), (date.getMonth() + 1) - index, 0);
    day(nowLast, prevLast);
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0.5s';
        tableDays.style.transform = "translateX(-".concat(364, "px)");
    }
    setTimeout(remove, 500);
});
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function () {
    index--;
    prevLast = new Date(date.getFullYear(), date.getMonth() - index, 0);
    nowLast = new Date(date.getFullYear(), (date.getMonth() + 1) - index, 0);
    console.log(prevLast.getMonth());
    day(nowLast, prevLast);
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0.5s';
        tableDays.style.transform = "translateX(-".concat(364, "px)");
    }
    setTimeout(remove, 500);
    console.log(index);
});
function remove() {
    var _a;
    (_a = tableDays === null || tableDays === void 0 ? void 0 : tableDays.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transition = '0s';
        tableDays.style.transform = "translateX(0px)";
    }
}
