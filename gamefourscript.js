

document.getElementById("game-four").addEventListener('click', function() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["Красный", "Синий", "Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["Шесть", "Семь", "Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["Четыре", "Пять", "Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0; 

    for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        const optionsText = q.options.join("\n");
        const answer = prompt(`${q.question}\n${optionsText}\nВведите номер вашего ответа:`);

        if (answer === null) {
            alert('Игра окончена');
            break;
        }

        const userAnswer = parseInt(answer);
        if (userAnswer === q.correctAnswer) {
            alert('Правильно!');
            score++;
        } else {
            alert(`Неправильно! Правильный ответ: ${q.correctAnswer}`);
        }
    }

    
    alert(`Ваш результат: ${score} из ${quiz.length}`);
});


