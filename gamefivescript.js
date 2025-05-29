

document.getElementById("game-five").addEventListener('click', function() {
    const options = ["камень", "ножницы", "бумага"];

    let userChoice = prompt("Выбери: камень, ножницы или бумага");
    if (userChoice === null) {
        
        alert("Игра отменена.");
        return;
    }
    userChoice = userChoice.toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Невалидный выбор! Давай играем снова!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];

    alert(`Ты выбрал: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Ты победил!";
    } else {
        result = "Ты проиграл!";
    }

    alert(result);
});