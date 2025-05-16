
    
    
    

    document.getElementById("game-two").addEventListener("click", function() {
    
        function generateTask() {
            const operations = ['+', '-', '*', '/'];
            const operation = operations[Math.floor(Math.random() * operations.length)];
            
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            
            if (operation === '/') {
                return {
                    question: `${num1} / ${num2}`,
                    answer: num1 / num2
                };
            } else if (operation === '+') {
                return {
                    question: `${num1} + ${num2}`,
                    answer: num1 + num2
                };
            } else if (operation === '-') {
                return {
                    question: `${num1} - ${num2}`,
                    answer: num1 - num2
                };
            } else if (operation === '*') {
                return {
                    question: `${num1} * ${num2}`,
                    answer: num1 * num2
                };
            }
        }
    
        const task = generateTask();
        const userResponse = prompt(`Раскинь мозгами реши задачу: ${task.question}`);
    
        if (userResponse !== null) { 
            const userAnswer = parseFloat(userResponse);
           
            
            if (Math.abs(userAnswer - task.answer) < 0.0001) { 
                alert('Молодец! Не плохо соображаешь!');
            } else {
                alert(`Ошибка. Правильный ответ: ${task.answer}`);
            }
        }
    });