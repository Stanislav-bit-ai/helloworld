/*document.getElementById("game-one").addEventListener("click",
   
function gameOne() {
   
    let randomNumbers = +prompt('Угадай число от 1 до 100');
    if (randomNumbers <= 0) {
       alert('Число не может быть меньше или равно ноль'); 
    } else if (randomNumbers > 100) {
        alert('Число не может быть больше 100');
    } else if (randomNumbers <= 24) {
        alert ('Загаданое число больше, попробуй еще!');
    } else if (randomNumbers >=26) {
        alert ('Загаданое число меньше, попробуй еще!');
    } else {
        alert('Молодец ты угадал!');
    }

}

);*/

document.getElementById("game-one").addEventListener("click",
    function gameOne() {
    
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let userGuess = 0;
    
        while (userGuess !== randomNumber) {
            userGuess = +prompt('Угадай число от 1 до 100');
    
            
            if (userGuess <= 0) {
                alert('Число не может быть меньше или равно ноль');
            } else if (userGuess > 100) {
                alert('Число не может быть больше 100');
            } else if (userGuess < randomNumber) {
                alert('Загаданное число больше, попробуй еще!');
            } else if (userGuess > randomNumber) {
                alert('Загаданное число меньше, попробуй еще!');
            } else {
                alert('Молодец, ты угадал!');
            }
        }
    }
);
gameOne();