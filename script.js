//задание1
/*let c = 10;
alert(c);
c = 20;
alert(c);

//задание2
const dateIphone = 2010;
console.log(dateIphone);

//задание3
const nameCreatorjs = 'Брендан Эйх';
console.log(nameCreatorjs);

//задание4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//задание5
let resultat = 2 ** 5;
alert(resultat);

//задание6
let a = 9;
let b = 2;
let rest = a % b;
alert(rest);

//задание7
let num = 1;
num  += 5;
num  -= 3;
num  *= 7;
num  /= 3;
num  += 1;
num  -= 1;
alert(num);

//задание8
let age = prompt(`Сколько вам лет?`);
alert(age);

//задание9
const user = {
    name: `Иван`,
    age: 18,
    isAdmin: true,
}

//задание10
let userName = prompt(`Твое Имя`);
alert(`Привет ${userName}!`);

//дополнительное задание
let numb = prompt(`Пожалуйста, загадайте любое число и введите его здесь:`); 
alert(numb);
let number = numb * 2;
alert(number)
let summa = number + 10;
alert(summa);
let division = summa / 2;
alert(division);
let subtraction = division - numb;
alert(subtraction);
let result = subtraction;
alert(result);*/

//Домашнее задание 2.3
//задание1

/*let password = `Пароль`;
let userPass = prompt (`Введите пароль`);
if (userPass === password) {
    alert (`Пароль верный`);
    
} else {
    alert (`пароль не верный`);
}


//задание2

let c = 3;
if (c > 0 && c < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}


//задание3
let d = 50;
let e = 200;
if (d >= 100 || e >= 100) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}


//задание4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//задание5

let monthNumber = 8;
switch (monthNumber) {
    case 3:
    case 4:
    case 5:
        alert('Весна');       
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;

    default:
        alert('Неверно');
        break;       
}

//Дополнительные задания 
//задание1
let userInput = prompt("Пожалуйста, введите любое число");

let number = Number(userInput);

if (isNaN(number)) {
    alert("Будьте внимателней! Введите любое число ");
} else {
    
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

//задание2 


let clientOS = 0; 
let clientDeviceYear = 2016; 
if (clientOS === 0) {    
    if (clientDeviceYear < 2015) {
        alert("Установите облегченную версию приложения для iOS по ссылке.");
    } else {
        alert("Установите версию приложения для iOS по ссылке.");
    }
} else if (clientOS === 1) {
    
    if (clientDeviceYear < 2015) {
        alert("Установите облегченную версию приложения для Android по ссылке.");
    } else {
        alert("Установите версию приложения для Android по ссылке.");
    }
} 

    //Домашнее задание 2.4


    //задание1
    for (let i = 0; i < 2; i++) {
        console.log('Привет');
           
    }

    //задание2

   for (let i = 1; i <= 5; i++) {
    console.log(i);
    
   }

   //задание3

   for (let i = 7; i <= 22; i++) {
    console.log(i);
    
   }

   //задание4

   const obj = {
    Коля : 200,
    Вася : 300,
    Петя : 400
   }
for (const key in obj) {
   console.log(`${key} - ${obj[key]}`);
}

//задание5

let n = 1000;
let num = 0;
 while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
 }
 console.log(num);

 //задание6

 let dayFriday = 1;

 let allDay = 31;
 
 for (let i = dayFriday; i < allDay; i += 7) {
    
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
 }


 //Дополнительное задание

 //задание1


 let k = 100;
 let nam = 0;
 while (k > 0) {
    k -= 7;
    console.log(k);
    nam ++;
 }
 console.log (nam);

 //задание2

 let month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

 console.log( month [0]);
 console.log( month [1]);
 console.log( month[2]);
 console.log( month[3]);
 console.log( month[4]);
 console.log( month[5]);
 console.log( month[6]);
 console.log( month[7]);
 console.log( month[8]);
 console.log( month[9]);
 console.log( month[10]);
 console.log( month[11]);

 for (let i = 0; i >=  11;) {
    i++;
    console.log(month[i]);
 }
 
 //задание3
const book = {
    Name: 'A spontaneous person',
    Author: 'Richard Russo',
    Published: 1997,
    Genre: 'novel'
};
console.log (`Name: ${book.Name}`);
console.log (`Author: ${book.Author}`);
console.log (`Pabliched: ${book.Published}`);
console.log (`Genre: ${book.Genre}`);
 
//задние4

let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let y = minNumber; y <= 1; y++) {
    
    randomArray.push(minNumber )
    
}
let = minNumber
console.log



function generateRandomArray(size) {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
        
        randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomArray;
}
let randomNumbers = generateRandomArray(10);

let minNumber = Math.min(...randomNumbers);

console.log("Минимальное число в массиве:", minNumber);


//Домашнее задание 2.5

//задание1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
    
}
console.log( min(4, 8));
console.log( min(6, 6));

//задание2

function isEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
       return 'Число нечетное';
    }
}
console.log(isEven(2));
console.log(isEven(88736598363));
//задание3


function square(number) {
    return number ** 2;
}
const up = (n) => n ** 2;
square(25); 
console.log(square(25));
console.log(up(25));

//задание4

function age() {

    let age = +prompt('Сколько тебе лет?')
    if (age < 0) {
        alert ('Вы ввели неправильное значение');
    }
     else if ( age >= 0 && age <= 12) {
        alert ('Привет, друг!');
     }  
     else if (age >= 13) {
        alert ('Добро пожаловать!');
     } else {
        alert('Вы ввели неправильное значение');
     }
       
        
    
}
age()


//задание5

function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
         
        
    } else {
        return a * b;
    }
}
console.log(calc('l', 'l'));

//задание6

function getNumber() {
    let number = prompt('Введите число!');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}
console.log(getNumber())

//задание7

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;

}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,

}
 
console.log(circle1.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetArea());
console.log(circle2.methodGetPerimeter());*/



//Домашнее задание 2.6

//задание1

/*let numbers = [1, 5, 4, 10, 0, 3];
    for (let element of numbers) {
        console.log(element);
        if (element === 10) {
           
            break
        }
        
    }

    //задание2

    const nam = [1, 5, 4, 10, 0, 3];
    const index = nam.indexOf(4);
    console.log (index);

    //задание3

    const arr = [1, 3, 5, 10, 20];
    const str = arr.join(' ');
    console.log(str);

    //задание4

    const array = [];
    for(let i = 0; i < 3; ++i) {
        const array2 = []
    for(let i = 0; i < 3; ++i) {
        array2.push(1);
    }
        array.push(array2);
    }
    console.log(array);


    //задание5

    let fiveArr = [1, 1, 1];
    fiveArr.push(2, 2, 2);
    console.log(fiveArr);

    //задание6

    const sixArr = [9, 8, 7, 'a', 6, 5];
    sixArr.sort()
    console.log(sixArr);
    sixArr.pop()
    console.log(sixArr);
    

    //задание7

   // const sevenArr = [9, 8, 7, 6, 5];
   // const userNamber = +prompt('Угадай число');
   // if (sevenArr.includes(userNamber)) {
   //     alert('Угадал')

   // } else{
   //     alert('Не угадал');
        
   // }


    //задание8

    let stroc = 'abcdef';
    stroc = stroc.split('');
    console.log(stroc);
    stroc.reverse();
    stroc = stroc.join('');
    console.log(stroc);

    //задание9

    const nextArr = [[1, 2, 3],[4, 5, 6]];
    const newArr = [];
    for(let i = 0; i < nextArr.length; i++) {
        newArr.push(...nextArr[i])
    }
    console.log(newArr);
    //задание10

    const arr10 =[3,5,2,1,0,6,9,7,8];
    for(let i = 0; i < arr10.length; i++) {
        if(arr10[i + 1]){
            console.log(arr10[i] + arr10[i + 1]);
        }
       
    }


    //задание11
    function square(arr) {
        return arr.map(item => item ** 2);
    }

    console.log(square([2,3,4]));


    //задание12
    function getLength(arr3) {
        return arr3.map(item => item.length);
    }
    console.log(getLength(['mini','image']));

    //задание13

    function negativeNumbers(array) {
        return array.filter(item => item < 0);
    }
    console.log(negativeNumbers([1, 2, 3, 4, 5, -6, -7]));


    //задание14

    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    const arr14 = [];
    for(let i = 0; i < 10; i++) {
        arr14.push(randomNumber());
    }
    console.log(arr14);
    const evenArr = [];
    for(let i = 0; i < arr14.length; i++) {
        if (arr14 [i] % 2 === 0) {
            evenArr.push(arr14[i]);
        }
    }
    console.log(evenArr);

    //задание15

    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    const arr15 = [];
    for(let i = 0; i < 2; i++) {
        arr15.push(randomNumber());
    }
    console.log(arr15);

    console.log(arr15.reduce((a, b ) => a + b) / arr15.length);*/





    // Домошнее задание 2.7


    //задание1

    let str = 'js';
    str = str.toUpperCase();
    console.log(str);


    //задание2

    function filter(arr, str) {
        let result = [];
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
        
      }
      return result;
    }
    console.log(filter(['sport', 'sportgame', 'soccer'], 'sp'))


    //задание3

    let nam = 32.58884;
    console.log(Math.floor(nam));
    console.log(Math.ceil(nam));
    console.log(Math.round(nam));


    //задание4

    console.log(Math.max(52, 53, 49, 77, 21, 32));
    console.log(Math.min(52, 53, 49, 77, 21, 32));


    //задание5

    function generateRandomArray() {
        return(Math.floor(Math.random() * 10) + 1);

    }
    console.log(generateRandomArray());

    //задание6

    function getRandomNumber(nam) {
        let arr = [];
        for (let i = 0; i < nam; i++) {
           arr.push(Math.floor(Math.random() * nam));
            
        }
        return arr;
        
    }
    console.log(getRandomNumber(10));
    //
    function generateRandomArray(nam) {
       
        const length = Math.floor(nam / 2);
        const arr = [];
    
        for (let i = 0; i < length; i++) {
           
            const randomNum = Math.floor(Math.random() * (nam + 1));
            arr.push(randomNum);
        }
    
        return arr;
    }
    
    
    console.log(generateRandomArray(10));



    //задание7

    function generateRandomInt( min, max) {
        return Math.floor(Math.random() * (max - min + 1)) +min;

    }

    console.log(generateRandomInt(1, 10));


    //задание8

    console.log(new Date());


    //задание9

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 73);
    console.log(currentDate);


    //задание10

    function formatDate(date) {
       const days = ["Воскресенье", "Понидельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
       const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
       const year = date.getFullYear();
       const day = date.getDate();
       const month = date.getMonth();
       const dayOfWeek = days[date.getDay()];
       const hours = date.getHours();
       const minutes = date.getMinutes();
       const seconds = date.getSeconds();

       return `
       Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
       Время : ${hours}:${ minutes}:${seconds}`;


    }
    console.log(formatDate(new Date()));



    function reverseText() {
        const input = document.getElementById('userInput').value; // получаем введённый текст
        const reversed = input.split('').reverse().join(''); // переворачиваем
        document.getElementById('result').textContent = reversed; // выводим результат
      }

      //
function functionWithCallback(callback) {
   callback();
}
  const greet = () => {
   console.log("Привет из именованной стрелочной функции");
};
   functionWithCallback(greet);
   //



   function functionWithCallback(callback) {
  
   callback("Глеб", "Фокин");
}
functionWithCallback((name, surname) => {
   
   console.log(`Привет, ${name} ${surname}!`);
   
});
//

function uploadCompleted () {
    console.log('загрузка завершена успешно!');

    console.log('Обработка файла...');
    setTimeout(() => {
        console.log('Обработка завершена!');

        console.log('Сохранение файла...')

        setTimeout(() => {
            console.log('Файл успешно сохранен! Файл можно использовать!');

        }, 1000);
    }, 2000);
}


function startCompleted(callback) {
    console.log('Начало загрузки файла...');

    let progress = 0;
    const intervalid = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        console.log(`Прогресс ${progress}%`)

        if (progress >= 100) {
            clearInterval(intervalid);
            console.log('Загрузка завершина!');
            if (callback) {
                callback;
            }
        }

    }, 1000);
}
startCompleted(uploadCompleted);


//Домашнее задание 2.8

//задание1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age ));


//задание2

function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
         
    }
    return result;
   
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));



//задание3

const allTheTime = 30 * 1000; 
const intervalTime = 3 * 1000;   

const intervalId = setInterval(() => {
    console.log(new Date().toString());
}, intervalTime);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, allTheTime);


//задание4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
   
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})



//задание5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет! ${name}`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond (() => sayHi('Глеб!'));