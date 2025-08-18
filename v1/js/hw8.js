console.log('%c Домашняя работа №8.', 'color:tomato');

console.log('\n%c Задание №1:', 'color:lightgreen');
const people = [
    { name: 'Глеб', gender: 'male', age: 29 },
    { name: 'Анна', gender: 'female', age: 17 },
    { name: 'Олег', gender: 'male', age: 7 },
    { name: 'Оксана', gender: 'female', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

console.log('\n%c Задание №2:', 'color:lightgreen');
function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

console.log(filter(people, isMale));

console.log('\n%c Задание №3:', 'color:lightgreen');
const timer = (deadline) => {

    const interval = setInterval(() => {
        console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString());
    }, 3 * 1000);

    setTimeout (() => {
        clearInterval(interval);
        console.log(`${deadline} секунд прошло!`);
    }, deadline * 1000);
}

timer(30);

setTimeout(() => console.log('\n%c Задание №4:', 'color:lightgreen'), 32 * 1000);
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 33 * 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


setTimeout(() => console.log('\n%c Задание №5:', 'color:lightgreen'), 34 * 1000);
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

setTimeout(() => delayForSecond5(() => sayHi('Глеб')), 35 * 1000);