//оголошення операторів. Оголошення змінних:
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;

//отримати доступ до CSS за допомогою об’єкта документа, який представляє весь ваш документ CSS
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
//оголошувати функції
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {}

function buyWeapon() {}

function goTown() {}

                                                  //Шаблонні рядки
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
//console.log(greeting);


                                                 //Код з конкатенацією
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting =
//  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
//console.log(greeting); // "Welcome Mango, your room number is 207!"



                                                 //Довжина рядка
//const productName = "Repair droid";

                                           // Якщо у змінній зберігається рядок
//console.log(productName.length); // 12

                                           // Якщо рядковий літерал
//console.log("Repair droid".length); // 12
                                          //Довжина рядка (length)
//let username = "Poly";
//let message = `Username ${username} is ${username.length} characters long`;
//console.log(message);


//Довжина рядка (length)
const courseTopic = "JavaScript essentials";

const courseTopicLength = 21;
const firstElement = (courseTopic[0]);
const lastElement = (courseTopic[courseTopic.length - 1]);


const grade = 85;

                                                //НЕ ЗМОГЛА ВИРІШИТИ САМОСТІЙНО
function getFileName(file) {
  const dotIndex = file.indexOf('.');
  if (dotIndex === -1) {
    return file; // Якщо крапка не знайдена, повертаємо весь рядок
  } else {
    return file.slice(0, dotIndex); // Врізаємо рядок до першої крапки (включно), щоб отримати ім'я файлу
  }
}
// Перевірка роботи функції з заданими прикладами:
console.log(getFileName("styles.css")); // "styles"
console.log(getFileName("app.js")); // "app"
console.log(getFileName("app")); // "app"
console.log(getFileName("index.js")); // "index"
console.log(getFileName("index.html")); // "index"
console.log(getFileName("index.css")); // "index"
console.log(getFileName("index")); // "index"



function createFileName(name, ext) {
  // Використовуємо метод trim() для видалення зайвих пробілів на початку та в кінці рядка
  // І об'єднуємо ім'я файлу з розширенням за допомогою шаблонних рядків
  return `${name.trim()}.${ext}`;
}

// Перевірка роботи функції з заданими прикладами:
console.log(createFileName(" order ", "txt")); // "order.txt"
console.log(createFileName("report ", "csv")); // "report.csv"
console.log(createFileName(" presentation", "xml")); // "presentation.xml"



                                                   //НЕ ЗМОГЛА ВИРІШИТИ САМОСТІЙНО
function calculateTotal(number) {
  // Ініціалізуємо змінну для збереження суми
  let sum = 0;
  
  // Використовуємо цикл for для обчислення суми цілих чисел від 1 до number
  for (let i = 1; i <= number; i++) {
    sum += i; // Додаємо поточне число до суми
  }
  
  return sum; // Повертаємо обчислену суму
}

// Перевірка роботи функції з заданими прикладами:
console.log(calculateTotal(1)); // 1
console.log(calculateTotal(3)); // 6
console.log(calculateTotal(0)); // 0
console.log(calculateTotal(18)); // 171
console.log(calculateTotal(24)); // 300



                                                     //НЕ ЗМОГЛА ВИРІШИТИ САМОСТІЙНО
function calculateTotal(number) {
  let sum = 0; // Ініціалізуємо змінну для збереження суми
  
  // Використовуємо цикл for для обчислення суми цілих чисел від 1 до number
  for (let i = 1; i <= number; i++) {
    sum += i; // Додаємо поточне число до суми
  }
  
  return sum; // Повертаємо обчислену суму
}

// Перевірка роботи функції з заданими прикладами:
console.log(calculateTotal(1)); // 1
console.log(calculateTotal(0)); // 0
console.log(calculateTotal(7)); // 28
console.log(calculateTotal(18)); // 171
console.log(calculateTotal(24)); // 300


                                               //НЕ ЗМОГЛА ВИРІШИТИ САМОСТІЙНО
function calculateEvenTotal(number) {
  let total = 0;
  if (number === undefined) {
    return 0;
    }
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      total += i;
        }
    }
  return total;
}



console.log(calculateEvenTotal(1));    // Поверне 0
console.log(calculateEvenTotal(3));    // Поверне 2
console.log(calculateEvenTotal(7));    // Поверне 12
console.log(calculateEvenTotal(18));   // Поверне 90
console.log(calculateEvenTotal(27));   // Поверне 182



function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i ++) {
    if (i % divisor === 0) {
            return i;
        }
  }
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));



console.table



//-------------------------------------------------------------------------------



