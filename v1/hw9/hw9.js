console.log('%c Домашняя работа №9.', 'color:tomato');

console.log('\n%c Задание №1:', 'color:lightgreen');
const titleEl = document.querySelector('.title');
const hideButtonEl = document.querySelector('.hideButton');

console.log(titleEl);
console.log(hideButtonEl);

hideButtonEl.addEventListener('click', function () {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
    } else {
        titleEl.style.display = 'none';
    }
});

console.log('\n%c Задание №2:', 'color:lightgreen');
const textEl = document.querySelector('.text');
const colorChangeButtonEl = document.querySelector('.colorChangeButton');

console.log(textEl);
console.log(colorChangeButtonEl);

colorChangeButtonEl.addEventListener('click', function() {
    textEl.style.color = 'blue';
});

console.log('\n%c Задание №3:', 'color:lightgreen');
const textchangeButtonEl = document.querySelector('.textchangeButton');

console.log(titleEl);
console.log(textchangeButtonEl);

textchangeButtonEl.addEventListener('click', () => {
    titleEl.textContent = 'Привет, мир!';
});

console.log('\n%c Задание №4:', 'color:lightgreen');
const AllDescriptionEl = document.querySelectorAll('.description');

console.log(AllDescriptionEl);
AllDescriptionEl.forEach(description => {
    description.textContent = 'Измененный текст';
});

console.log('\n%c Задание №5:', 'color:lightgreen');
const AllDescription5El = document.querySelectorAll('.description5');
console.log(AllDescription5El);

AllDescription5El.forEach(description5 => {
    description5.textContent = 'Новый текст';
});

console.log('\n%c Задание №6:', 'color:lightgreen');
const createsNewElementButtonEl = document.querySelector('.createsNewElementButton');

console.log(createsNewElementButtonEl);

createsNewElementButtonEl.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

console.log('\n%c Задание №7:', 'color:lightgreen');
const elementDeletingButtonEl = document.querySelector('.elementDeletingButton');
const description7El = document.querySelector('.description7');

console.log(description7El);
console.log(elementDeletingButtonEl);

elementDeletingButtonEl.addEventListener('click', () => {
    description7El.remove();
});
