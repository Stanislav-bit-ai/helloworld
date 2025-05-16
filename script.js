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

let password = `Пароль`;
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
console.log(circle2.methodGetPerimeter());



