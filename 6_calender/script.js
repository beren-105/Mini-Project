var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var date = new Date();
var prevLast = new Date();
var nowLast = new Date();
console.log(prevLast.getDate());
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
    day();
});
function day() {
    var tableDay = document.querySelector('.tableDay');
    var mounthTitle = document.querySelector('.title');
    if (mounthTitle instanceof HTMLHeadingElement) {
        mounthTitle.innerText = monthName[date.getMonth()];
    }
    if (tableDay instanceof HTMLDivElement) {
        for (var i = prevLast.getDay(); i >= 0; i--) {
            var p = document.createElement('p');
            p.classList.add('prev');
            p.innerText = (prevLast.getDate() - i).toString();
            tableDay.appendChild(p);
        }
        for (var i = 1; i <= nowLast.getDate(); i++) {
            var p = document.createElement('p');
            p.classList.add('now');
            p.innerText = i.toString();
            tableDay.appendChild(p);
        }
        for (var i = 1; i <= (!0 ? 6 - nowLast.getDay() : 1); i++) {
            var p = document.createElement('p');
            p.classList.add('next');
            p.innerText = i.toString();
            tableDay.appendChild(p);
            console.log(nowLast.getDay());
        }
    }
}
// 일 출력하기
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
    // prevLast = new Date(date.getFullYear(), date.getMonth(), 0)
    nowLast = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    day();
});
