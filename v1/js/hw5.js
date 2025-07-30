console.log('%c Домашняя работа №5.', 'color:red');

console.log('\n%c Задание №1:', 'color:green');
let compare = (a, b) => {
    console.log(a < b ? `${a}` : `${b}`);
}

compare(8, 4);
compare(6, 6);

console.log('\n%c Задание №2:', 'color:green');
let evenOdd = (number) => {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

let num1 = Number(prompt('Введите число:'));
alert(evenOdd(num1));

console.log('\n%c Задание №3.1:', 'color:green');
let square = (number) => {
    return number ** 2;
}
let num2 = Number(prompt('Введите число:'));
console.log(`Квадрат числа ${num2} равен: ${square(num2)}`);

console.log('\n%c Задание №3.2:', 'color:green');
let pow2 = (number) => {
    return number ** 2;
}
let num3 = Number(prompt('Введите число:'));
let c = pow2(num3);
console.log(`${c}`);

console.log('\n%c Задание №4:', 'color:green');
let ageVerification = () => {

    let userAge;

    for (;;) {
        userAge = Number(prompt(`Введите ваш возраст`));

        if (isNaN(userAge) || userAge < 0) {
            alert(`Вы ввели неверное значение!`);
            continue;
        }

        userAge >= 13 
            ? alert('Добро пожаловать!')
            : alert('Привет, друг!');

        break;
    }
}

ageVerification();

console.log('\n%c Задание №5:', 'color:green');
let multiplication = () => {

    for (;;) {
        a = Number(prompt('Введите значение a:'));
        b = Number(prompt('Введите значение b:'));

        if (isNaN(a) || isNaN(b)) {
            alert(`Одно или оба значения не являются числом`);
            continue;
        } else {
            let mult = a * b;
            alert(`Произведение чисел a и b равно: ${mult}`);
            break;
        }
    }
}

multiplication ();

console.log('\n%c Задание №6:', 'color:green')
let cube = () => {

    for (;;) {
        let n = Number(prompt('Введите значение n:'));

        if (isNaN(n)) {
            alert ('Переданный параметр не является числом!');
            continue;
        } else {
            let result = n ** 3;
            alert(`Результатом возведения значения n в куб, является: ${result} !`);
            return result;
        }
    }
}

cube();

console.log('\n%c Задание №7:', 'color:green')

const circle1 = {
    radius : 100
}

const circle2 = {
    radius : 200
}

let getAreaCircle = (circle) => {
    return Math.PI * circle.radius ** 2;
}

let getPerimeter = (circle) => {
  return 2 * Math.PI * circle.radius;
}

console.log(`Площадь круга с радиусом ${circle1.radius}: ${getAreaCircle(circle1)}`);
console.log(`Периметр круга с радиусом ${circle1.radius}: ${getPerimeter(circle1)}`);
console.log(`Площадь круга с радиусом ${circle2.radius}: ${getAreaCircle(circle2)}`);
console.log(`Периметр круга с радиусом ${circle2.radius}: ${getPerimeter(circle2)}`);