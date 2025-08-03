console.log('%c Домашняя работа №5.', 'color:red');

console.log('\n%c Задание №1:', 'color:green');
let compare = (a, b) => {
    console.log(a < b ? `${a}` : `${b}`);
}

compare(8, 4);
compare(6, 6);

console.log('\n%c Задание №2:', 'color:green');
let evenOdd = (number) => {
    console.log(number % 2 === 0 ? 'Число четное' : 'Число нечетное');
}

evenOdd(25);
evenOdd(12);

console.log('\n%c Задание №3.1:', 'color:green');
let square = (numberOne) => {
    console.log(`Квадрат числа равен:`, numberOne ** 2);
}
square(5);

console.log('\n%c Задание №3.2:', 'color:green');
let pow2 = (numberTwo) => {
    return numberTwo ** 2;
}

let result = pow2(3);
console.log(`Квадрат числа равен: ${result}`);

console.log('\n%c Задание №4:', 'color:green');
let ageVerification = (age) => {

    if (isNaN(age) || age < 0) {
    console.log(`Вы ввели неверное значение!`);
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Привет, друг!');
    }
}

ageVerification(-5);
ageVerification(5);
ageVerification(15);

console.log('\n%c Задание №5:', 'color:green');
let multiplication = (a, b) => {

    isNaN(a) || isNaN(b)
    ? console.log(`Одно или оба значения не являются числом`)
    : console.log(`Произведение чисел ${a} и ${b} равно: ${a * b}`);
}

multiplication ("d", 3);
multiplication (5, "b");
multiplication ("d", "b");
multiplication (6, 6);
multiplication (2, 6);


console.log('\n%c Задание №6:', 'color:green')
let cube = (n) => {

    isNaN(n)
    ? console.log('Переданный параметр не является числом!')
    :console.log(`Результатом возведения значения ${n} в куб, является: ${n ** 3} !`);
}

cube("abc");
cube(0);
cube(1);
cube(2);
cube(3);
cube(4);
cube(5);
cube(6);
cube(7);
cube(8);
cube(9);
cube(10);

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