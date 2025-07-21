function scrollToSection() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// HomeWork № 2
//
// // Задание № 1
// let a = 10;
// alert (`Значение переменной a = ${a}`);
// a = Number(prompt ("Введите новое значение для переменной a!"));
// alert (`Новое значение переменной a = ${a}`);

// // Задание № 2
// let yearOfManufacture = 2007;
// alert (`Первый iPhone был выпущен в ${yearOfManufacture} году!`);

// // Задание № 3
// let name = "Brendan Eich";
// alert (`Создателем языка программирования JavaScript является американский программист ${name}!`);

// // Задание № 4
// a = 10;
// let b = 2;
// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;
// alert (`Сумма переменных a и b равна: ${sum}.
// Разность переменных a и b равна: ${difference}.
// Произведение переменных a и b равно: ${product}.
// Частное переменных a и b равно: ${quotient}.`);

// // Задание № 5
// let result = b ** 5;
// alert (`Результат возведения 2-х в 5-ю степень равен: ${result}`);

// // Задание № 6
// a = 9;
// let remainder = a % b;
// alert (`Остаток от деления переменных a и b составляет: ${remainder}`);

// // Задание № 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(`Значение переменной num равно: ${num}`);

// // Задание № 8
// function getYearWord(age) {
//     const lastDigit = age % 10;
//     const lastTwoDigits = age % 100;

//     if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
//         return 'лет';
//     }

//     if (lastDigit === 1) return 'год';
//     if (lastDigit >= 2 && lastDigit <= 4) return 'года';
//     return 'лет';
// }

// let age = Number(prompt ("Сколько вам лет?"));

// if (!isNaN(age) && age > 0) {
//     alert(`Вам ${age} ${getYearWord(age)}.`);
// } else {
//     alert("Введите корректное число.");
// }

// // Задание № 9
// const user = {
//     name: String("Иван Васильевич"),
//     age: Number(56),
//     isAdmin: true,
// }
// if (isAdmin = true) {
//     alert (`Данные пользователя:
// Имя: ${user.name}
// Возраст: ${user.age}
// Является Администратором: Дa`)
// } else {
//     alert (`Данные пользователя:
// Имя: ${user.name}
// Возраст: ${user.age}
// Является Администратором: Нет`)
// }

// // Задание № 10
// name = String(prompt("Введите ваше имя:"));
// alert (`Привет, ${name}!`)

// // Дополнительное задание
// let number = Number(prompt("Введите любое число X:"));
// let productNumber = number * 2;
// alert (`Удвоенное число Х равно: ${productNumber}!`)
// let sumProductNumber = productNumber + 10;
// alert (`Удвоенное число Х увеличеное на 10, равно: ${sumProductNumber}!`)
// let quotientSumProductNumber = sumProductNumber / 2;
// alert (`Удвоенное число Х увеличеное на 10 и разделенное на 2, равно: ${quotientSumProductNumber}!`)
// let differenceQuotientSumProductNumber = quotientSumProductNumber - number;
// alert (`Удвоенное число Х увеличеное на 10 и разделенное на 2 из которого вычтено первоначальное значение Х, равно: ${differenceQuotientSumProductNumber}!`)

//// HomeWork № 3
//alert (`Домашняя работа № 3`);

//// Задание № 1
// let password = String('SkyPro777');
// let newPassword = String(prompt('Введите пароль:'));
// (password === newPassword) ? alert (`Пароль введен верно!`) : alert (`Пароль введен не верно!`);

//// Задание № 2
// let с = Number(prompt('Введите число с :'));
// (с > 0 && с < 10) ? alert (`Верно!`) : alert (`Неверно!`);

//// Задание № 3
// let d = Number(prompt('Введите число d :'));
// let e = Number(prompt('Введите число e :'));
// (d > 100 || e > 100) ? alert (`Верно!`) : alert (`Неверно!`);

//// Задание № 4
// let a = '2';
// let b = '3';
// alert (Number(a) + Number(b));

//// Задание № 5
// var monthNumber=Number(prompt('Введите номер месяца:'));

// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:    
//         alert(`Зима`);
//         break;

//     case 3:
//     case 4:
//     case 5:
//         alert(`Весна`);
//         break;

//     case 6:
//     case 7:
//     case 8:
//         alert(`Лето`);
//         break;

//     case 9:
//     case 10:
//     case 11:
//         alert(`Осень`);
//         break;

//     default:
//         alert(`Введено неверное значение!`);
//         break;
// }

//// Дополнительные задания

//// задание №1


