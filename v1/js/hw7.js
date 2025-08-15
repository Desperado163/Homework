console.log('%c Домашняя работа №7.', 'color:red');

console.log('\n%c Задание №1:', 'color:green');
let word = 'js';
console.log(`Переводим строку ${word} в вверхний регистр: ${word.toUpperCase()}!`);

console.log('\n%c Задание №2:', 'color:green');
const arrString = ['лесополоса', 'Вода', 'Лесник', 'скалы', 'Дубликат', 'Лесхоз'];

const searchString = 'лес';

const matches = arrString
    .filter(word => word.toLowerCase().startsWith(searchString.toLowerCase()));

console.log(`В массиве [${arrString.join(', ')}] найдены следующие совпадения со строкой "${searchString}": ${matches.join(', ')}`);

console.log('\n%c Задание №3:', 'color:green');
let numb = 32.58884;
console.log(`Округляем число ${numb} до меньшего целого: ${~~(numb)},
                         до большего целого: ${Math.ceil(numb)},
                         до ближайшего целого: ${Math.round(numb)}.`)
;

console.log('\n%c Задание №4:', 'color:green');
const numbArr = [52, 53, 49, 77, 21, 32];

const getMinOffArray = (arr) => Math.min(...arr);
const getMaxOffArray = (arr) => Math.max(...arr); 

console.log(`В массиве "${numbArr}" минимальным числом является: ${getMinOffArray(numbArr)},
а максимальным числом является: ${getMaxOffArray(numbArr)}!`);

console.log('\n%c Задание №5:', 'color:green');
console.log(`Случайное число в диапазоне от 1 до 10: ${~~((Math.random() * 10) + 1)}.`)

console.log('\n%c Задание №6:', 'color:green');
let getInt = (a) => {
    let rndArr = Array.from(
        {length: (a / 2)},
        () => ~~((Math.random() * a))
    );
    console.log(`Целое число: ${a}, массив:`, rndArr);
}

getInt(10);
getInt(15);

console.log('\n%c Задание №7:', 'color:green');
let getRndInt = (a, b) => {
    let minInt = Math.min (a, b);
    let maxInt = Math.max (a, b);
    console.log(`Случайное значение в диапазоне от ${minInt} до ${maxInt}:`, ~~(Math.random() * (maxInt - minInt + 1) + minInt));
}

getRndInt(25, -10);
getRndInt(-3, -15);
getRndInt(-12, 24);
getRndInt(100, 1000);

console.log('\n%c Задание №8:', 'color:green');
let currentDate = new Date ();
console.log(`Текущая дата:`, currentDate.toLocaleDateString('ru-RU'));

console.log('\n%c Задание №9:', 'color:green');
const futureDate = new Date ();
futureDate.setDate(currentDate.getDate() + 73)
console.log(`Через 73 дня будет:`, futureDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }));

console.log('\n%c Задание №10:', 'color:green');
const dateOption = {day: 'numeric', month: 'long', year: 'numeric'};
const weekdayOption = {weekday: 'long'};
const timeOption = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
console.log(`Дата:`, currentDate.toLocaleDateString('ru-RU', dateOption), ` - это`, currentDate.toLocaleDateString('ru-RU', weekdayOption),
`\nВремя:`, currentDate.toLocaleTimeString('ru-RU', timeOption));
