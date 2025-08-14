console.log('%c Домашняя работа №6.', 'color:red');

console.log('\n%c Задание №1:', 'color:green');
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log (numbs[i]);
    if (numbs[i] === 10) break;
}

console.log('\n%c Задание №2:', 'color:green');
let position = numbs.indexOf(4);
console.log(position, ` - индекс значения 4`);

console.log('\n%c Задание №3:', 'color:green');
const numbers = [1, 3, 5, 10, 20];
let joinedNumbers = numbers.join(' ');
console.log(joinedNumbers);

console.log('\n%c Задание №4:', 'color:green');
let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

for (let arrIn of arr) {
    for (let element of arrIn) {
        console.log(element);
    }
}

console.log('\n%c Задание №5:', 'color:green');
const numArr = [1, 1, 1];
numArr.push(2, 2, 2);
console.log(numArr);

console.log('\n%c Задание №6:', 'color:green');
const compArr = [9, 8, 7, 'a', 6, 5];
compArr.sort();
compArr.pop();
console.log(compArr);

// console.log('\n%c Задание №7:', 'color:green');
// const guess = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt("Введите число:"));
// guess.includes(userNumber) 
// ? alert(`Угадал!🏆`)
// : alert(`Не угадал!😭`)

console.log('\n%c Задание №8:', 'color:green');
let string = 'abcdef';
console.log(`Дана строка:`, string);
let stringSplit = string.split("");
console.log(`Преобразуем строку в массив методом Split:`, stringSplit);
let stringReverse = stringSplit.reverse();
console.log(`Переворачиваем массив методом Reverse:`, stringReverse);
let stringJoin = stringReverse.join("");
console.log(`Преобразуем массив в строку методом Join:`, stringJoin);

console.log('\n%c Задание №9:', 'color:green');
let multiArr = [
    [1, 2, 3],
    [4, 5, 6],
];
let simpleArr = multiArr.flat();
console.log(simpleArr);

console.log('\n%c Задание №10:', 'color:green');
let rndArray = Array.from({length: 10}, () => ~~(Math.random() * 10) + 1);
console.log(`Массив из 10 элементов от 1 до 10:`, rndArray);

for (let i = 0; i < rndArray.length - 1; i++) {
    console.log(`${rndArray[i]} + ${rndArray[i + 1]} = ${rndArray[i] + rndArray[i + 1]}`);
}

console.log('\n%c Задание №11:', 'color:green');
console.log(`Массив из 10 элементов от 1 до 10:`, rndArray);

rndArray.forEach((val, i, arr) => {
    if (i < arr.length) {
        console.log(`Кадрат числа ${val} равен: ${val ** 2} `)
    }
})

console.log('\n%c Задание №12:', 'color:green');
const stringArr = ['Мир', 'Дружба', 'Жвачка'];
console.log(`Массив слов:`, stringArr);
const lengthWord = stringArr.map(word => word.length);
console.log(`Массив длины слов:`, lengthWord);

console.log('\n%c Задание №13:', 'color:green');
let rndNegativeArr = Array.from({length: 20}, () => ~~(Math.random() * 201) - 100);
console.log(`Массив из 20 элементов от -100 до 100:`, rndNegativeArr);
const negativeArr = rndNegativeArr.filter(num => num < 0);
console.log(`Новый массив из отрицательных элементов:`, negativeArr);

console.log('\n%c Задание №14:', 'color:green');
let rndArrayTen = Array.from({length: 10}, () => ~~(Math.random() * 10));
console.log(`Массив из 10 элементов от 0 до 10:`, rndArrayTen);
const honestArr = rndArrayTen.filter(num => num % 2 === 0);
console.log(`Новый массив из четных элементов:`, honestArr);

console.log('\n%c Задание №15:', 'color:green');
let rndArraySix = Array.from({length: 6}, () => ~~(Math.random() * 10) + 1);
console.log(`Массив из 6 элементов от 1 до 10:`, rndArraySix);

const summArr = rndArraySix.reduce((total, rndArraySix) => total + rndArraySix, 0);
console.log(`Среднее арифметическое элемнтов массива составляет: ${summArr / rndArraySix.length}`);