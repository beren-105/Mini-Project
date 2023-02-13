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
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[nowLast.getMonth()];
    }
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
};
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var index = 0;
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
    index++;
    prevLast = new Date(date.getFullYear(), date.getMonth() - index, 0);
    nowLast = new Date(date.getFullYear(), (date.getMonth() + 1) - index, 0);
    day(nowLast, prevLast);
    if (tableDays instanceof HTMLDivElement) {
        tableDays.style.transform = "translateY(-".concat(260 * index, "px)");
    }
    setTimeout(remove, 500);
});
function remove() {
}
