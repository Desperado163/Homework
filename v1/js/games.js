let guessTheNumber = () => {
    alert('🕹️Угадай число!🕹️');

    const rnd = ~~(Math.random() * 100) + 1;

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

let simpleArithmetic = () => {
    alert('🕹️Простая арифметика!🕹️');

    const rndOperations = ['+', '-', '*', '/'];

    while (true) {

        let rndArr = Array.from({ length: 2 }, () => ~~(Math.random() * 11));
        let operation = rndOperations[~~(Math.random() * rndOperations.length)];

        if (operation === '/' && rndArr[1] === 0) rndArr[1] = 1;

        let correctAnswer = eval(`${rndArr[0]} ${operation} ${rndArr[1]}`);
        if (operation === '/') correctAnswer = +correctAnswer.toFixed(2);

        let input = prompt(`Cколько будет: ${rndArr[0]} ${operation} ${rndArr[1]} ?`);

        if (input === null) break;
        let userAnswer = Number(input);

        if (isNaN(userAnswer)) {
            alert('Введите корректное число!');
            continue;
        }

        userAnswer === correctAnswer
        ? alert(`Всё правильно!`)
        : alert(`Ошибка! Правильный отве: ${correctAnswer} !`);

        if (!confirm('🕹️Сыграть ещё раз?🕹️')) break;
    }
}

let turnTheTextOver = () => {
    alert('🕹️Переверни текст!🕹️');

    let userText;

    for (;;) {
        userText = prompt('👻Введите текст:👻');

        if (userText === null) {
            break;
        }
    
        let reversed = userText.split("").reverse().join("");

        alert(`🔄Ваш перевернутый текст: ${reversed}🔄`);

        if (!confirm('🕹️Сыграть ещё раз?🕹️')) {
            break;
        }
    }
}

let rockPaperScissors = () => {
    alert('🕹️ Камень, ножницы, бумага! 🕹️');
    
    const choice = ["🗿 Камень","✂️ Ножницы","📄 Бумага"];

    for (;;) {
        let message = `${choice.join(", ")}.`
        let userChoice = prompt(`Выберите один из вариантов: ${message}`);
        let randomRobotChoice = Math.floor(Math.random() * choice.length);
        
        if (userChoice === null) {
            alert("❌ Игра прервана!");
            break;
        }

        let isUserChoiceNumberCorrect = Number(userChoice) >= 1 && Number(userChoice) <= choice.length;
        let normalChoice = choice.map(c => c
            .replace(/^\d+\.\s*/, "")
            .replace(/[🗿✂️📄]/g, "")
            .trim()
            .toLowerCase()
        );

        let normalUserChoice = userChoice
            .trim()
            .replace(/^\d+\.\s*/, "")
            .replace(/[🗿✂️📄]/g, "")
            .toLowerCase();

        let isUserChoiceStringCorrect = normalChoice.includes(normalUserChoice);

        if (!isUserChoiceNumberCorrect && !isUserChoiceStringCorrect) {
            alert("😖 Введено неверное значение! Попробуй ещё раз... 🤔")
            continue;
        }

        let userChoiceValidNumberIndex = Number(userChoice) - 1;
        let userChoiceValidStringIndex = normalChoice.indexOf(normalUserChoice);

        let userChoiceFinalIndex = userChoiceValidNumberIndex >= 0 ? userChoiceValidNumberIndex : userChoiceValidStringIndex;

        if (userChoiceFinalIndex === randomRobotChoice) {
            alert("Ничья! 🤖 🤝 🤓\nВаш выбор: ${choice[userChoiceFinalIndex]}, выбор робота: ${choice[randomRobotChoice]} ");
        } else if (
            (userChoiceFinalIndex === 0 && randomRobotChoice === 1) ||
            (userChoiceFinalIndex === 1 && randomRobotChoice === 2) ||
            (userChoiceFinalIndex === 2 && randomRobotChoice === 0)
        ) {
            alert(`🎉 УРА!!! Вы победили! 🤓 🏆\nВаш выбор: ${choice[userChoiceFinalIndex]}, выбор робота: ${choice[randomRobotChoice]}`);
        } else {
            alert(`😭 Увы! Вы проиграли! 🤖 🏆\nВаш выбор: ${choice[userChoiceFinalIndex]}, выбор робота: ${choice[randomRobotChoice]}`);
        }

        if (!confirm('🕹️ Хотите сыграть ещё раз? 🕹️')) break;
    }    
}

let simpleQuiz = () => {
        const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    do {
        alert('🕹️ Простая викторина! 🕹️');
        let score = 0;

        for (let q of quiz) {
            let message = `${q.question}\n${q.options.join('\n')}`;
            let answer = prompt(message);

            if (answer === null) {
                alert("❌ Викторина прервана!");
                return;
            }

            let isNumberCorrect = Number(answer) === q.correctAnswer;
            let isTextCorrect = answer.trim().toLowerCase() === q.options[q.correctAnswer - 1]
                .replace(/^\d+\.\s*/, '')
                .toLowerCase();

            if (isNumberCorrect || isTextCorrect) {
                alert('✅ Правильно!');
                score++;
            } else {
                alert(`❌ Неправильно! Правильный ответ: ${q.options[q.correctAnswer - 1]}`);
            }
        }

        alert(`🏆 Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
    } while (confirm('🕹️ Хотите сыграть ещё раз? 🕹️'));
};
