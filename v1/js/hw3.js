// HomeWork № 3

alert (`Домашняя работа № 3`);

// Задание № 1
let password = ('SkyPro777');
let newPassword = prompt('Введите пароль:');
(password === newPassword) ? alert (`Пароль введен верно!`) : alert (`Пароль введен не верно!`);

// Задание № 2
let с = Number(prompt('Введите число с :'));
(с > 0 && с < 10) ? alert (`Верно!`) : alert (`Неверно!`);

// Задание № 3
let d = Number(prompt('Введите число d :'));
let e = Number(prompt('Введите число e :'));
(d > 100 || e > 100) ? alert (`Верно!`) : alert (`Неверно!`);

// Задание № 4
let a = '2';
let b = '3';
alert (Number(a) + Number(b));

// Задание № 5
var monthNumber=Number(prompt('Введите номер месяца:'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:    
        alert(`Зима`);
        break;

    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;

    case 6:
    case 7:
    case 8:
        alert(`Лето`);
        break;

    case 9:
    case 10:
    case 11:
        alert(`Осень`);
        break;

    default:
        alert(`Введено неверное значение!`);
        break;
}

// Дополнительные задания

//задание №1
let num = Number(prompt('Введите любое число:'));

if (isNaN(num) || num === 0) {
    alert(`Введено неверное значение!`)
} else if (num % 2 === 0) {
    alert (`Введено четное число!`)
} else {
    alert (`Введено нечетное число!`)
}

//Задание № 2 и № 3
let clientOS = Number(prompt('Введите значение ОС (0 — iOS, 1 — Android):'));
let clientDeviceYear = Number(prompt('Введите год выпуска вашего аппарата:'));

if ((clientOS !== 0 && clientOS !== 1) || isNaN(clientOS) || isNaN(clientDeviceYear)) {
    console.log ('Введено неверное значение!')
} else {
    const osName = clientOS === 0 ? 'iOS' : 'Android';
    const appType = clientDeviceYear < 2015 ? 'облегченную версию' : 'версию';
    const url = (osName === 'iOS')
    ? (appType === 'облегченную версию' ? 'https://skypro.ru/ios-lite' : 'https://skypro.ru/ios')
    : (appType === 'облегченную версию' ? 'https://skypro.ru/android-lite' : 'https://skypro.ru/android');

    console.log(`Установите ${appType} приложения для ${osName} по ссылке: ${url}`);
}