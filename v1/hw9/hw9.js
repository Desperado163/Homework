console.log('%c Домашняя работа №9.', 'color:tomato');

console.log('\n%c Задание №1:', 'color:lightgreen');
const titleEl = document.querySelector('.title');
const hideButtonEl = document.querySelector('.hideButton');

console.log(titleEl);
console.log(hideButtonEl);

hideButtonEl.addEventListener('click', function () {
    titleEl.textContent = '';
    titleEl.textContent = 'Домашнее задание №9';
});

console.log('\n%c Задание №2:', 'color:lightgreen');
const textEl = document.querySelector('.text');
const colorChangeButtonEl = document.querySelector('.colorChangeButton');

console.log(textEl);
console.log(colorChangeButtonEl);

colorChangeButtonEl.addEventListener('click', function() {
    textEl.style.color = 'blue';
});

