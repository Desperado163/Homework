let guessTheNumber = () => {
    alert('🕹️Угадай число!🕹️');

    const rnd = Math.floor(Math.random() * 100) + 1;

    let userInput, userNumber;
    
    for (;;) {
        userInput = prompt('👻Введите число от 1 до 100:👻');

        if (userInput === null) {
            break;
        }

        userNumber = Number(userInput);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert(`😔Введено неверное значение!😔`);
            continue;
        } 

        if (userNumber === rnd) {
            alert(`🎉УРА! Вы угадали! Загаданное число: ${rnd}🎉`);
            break;
        } else {
            alert(`😔Введенное число ${userNumber > rnd ? 'больше 📈' : 'меньше 📉'} загаданного!😔`);
        }
    }
    
    if (confirm('🕹️Сыграть ещё раз?🕹️')) {
        guessTheNumber();
    }
}