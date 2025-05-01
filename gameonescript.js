document.getElementById("game-one").addEventListener("click",
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
);