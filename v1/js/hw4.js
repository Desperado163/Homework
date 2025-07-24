console.log('%c Домашняя работа №4.', 'color:red');

console.log('\n%c Задание №1:', 'color:green');
let i = 1;

let n = 2;

while (i <= n) {
    console.log('Привет!');
    i++;
}

console.log('\n%c Задание №2:', 'color:green');
let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);

console.log('\n%c Задание №3:', 'color:green');
let numb = 7;

do {
    console.log(numb);
    numb++;
} while (numb <= 27);


console.log('\n%c Задание №4:', 'color:green');
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

console.log('\n%c Задание №5:', 'color:green');
let number = 1000;
let results = [];
let cycle = 0;

while (number > 50){
    results.push(number);
    number = number / 2;
    cycle++;
}

results.push(number);

console.log("Последнее значение (≤ 50):", number);
console.log("Количество циклов:", cycle);

console.log('\n%c Задание №6:', 'color:green');
for (let dayNumber = 4; dayNumber <= 31; dayNumber += 7) {
    console.log("Сегодня пятница,",dayNumber,"-е число. Необходимо подготовить отчет.")
}

console.log('\n%c Дополнительное задание №1:', 'color:green');
let k = 100;
let res = [];
let iteration = 0;

for (; k > 0; k -= 7){
    res.push(k);
    iteration++;
}

console.log("Последнее значение (> 0):", res[res.length - 1]);
console.log("Количество циклов:", iteration);

console.log('\n%c Дополнительное задание №2:', 'color:green');
let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let i = 0; i < month.length; i++){
    console.log("Месяц:", month[i],", порядковый номер в году:", i + 1, ".");
}

console.log('\n%c Дополнительное задание №3:', 'color:green');
const book = {
    "Название" : 'Сто дней до приказа',
    "Автор" : 'Юрий Поляков',
    "Год издания" : '1987 год (журнал «Юность»)',
    "Жанр" : 'повесть'
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

console.log('\n%c Дополнительное задание №4:', 'color:green');
let rnd = [];

for (let i = 0; i < 10; i++){
    rnd.push(Math.floor(Math.random() * 1001));
}

let min = Math.min(...rnd);

console.log("Массив:", rnd);
console.log("Минимальное число:", min);