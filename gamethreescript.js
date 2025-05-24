

document.getElementById("game-three").addEventListener("click", function() {
    const userInput = prompt("Введите любой текст, который хотите перевернуть!");
    if (userInput !== null) {
        const reversedText = userInput.split('').reverse().join('');
        alert("Ваш перевернутый текст: " + reversedText);
    }
});