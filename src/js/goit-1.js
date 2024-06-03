
                               //Вбудований скрипт

/*<!DOCTYPE html>
<html>
<head>
    <title>My HTML-page</title>
    <script>
        <!--Твій JavaScript-код тут-->
        console.log("Hello, world");
    </script>
</head>
<body>
    <!-- Вміст сторінки -->
</body>
</html>*/

//Зовнішній скрипт
/*<!DOCTYPE html>
<html>
<head>
    <title>My HTML-page</title>
    <script src="my-script.js" defer></script>
</head>
<body>
    <!-- Вміст сторінки -->
</body>
</html>*/

//Зовнішній скрипт
/*< !DOCTYPE html >
<html>
<head>
    <title>My HTML-page</title>
    <script src="my-script.js" defer></script>
</head>
<body>
    <!-- Вміст сторінки -->
</body>
</html>*/

                                                   //Виведення даних
/*Наступні комбінації клавіш відкривають інструменти розробника на вкладці Console:

Windows і Linux — Ctrl + Shift + J;*/

                                                   //Метод console.log()
//console.log("JavaScript is awesome!");
//console.log(10);
//console.log("Jacob Mercer");
//console.log(26);

                                                 //Оголошення змінних
//const age = 20;
//const username = "Mango";

//const age = 20;
//console.log(age); // 20

//const username = "Mango";
//console.log(username); // "Mango"

//const productName = "Droid";
//const pricePerItem = 2000;

                                                  //Перевизначення значення
//let username = "Mango";
//username = "Poly";

//let username = "Mango";
//console.log(username); // "Mango"

//username = "Poly";
//console.log(username); // "Poly"

                                                   //Звернення до змінної
//age = 25;
//console.log(age); // 25

                                                     //Типи даних
                                                      //Number
//const age = 20;
//const salary = 3710.84;

                                                      //String
//const username = "Mango995";
//const description = "JavaScript is awesome!";

                                                     //Boolean
//const isModalOpen = true;
//const isLoggedIn = false;

                                                //Оператор typeof використовується для визначення типу даних значення або виразу.
//typeof operand;

//const quantity = 17;
//console.log(typeof quantity); // виведе "number"

//const message = "JavaScript is awesome!";
//console.log(typeof message); // виведе "string"

//const isSidebarOpen = false;
//console.log(typeof isSidebarOpen); // виведе "boolean"

//let username;
//console.log(typeof username); // виведе "undefined"

//let status = null;
//console.log(typeof status); // виведе "object"

                                                   //Арифметичні операції
                                                   //Оператор (+) використовується для складання двох чисел.

//const x = 8;
//const y = 5;
//console.log(x + y); // 13

                                                   //Оператор (-) використовується для віднімання одного числа від іншого.

//const x = 8;
//const y = 5;
//console.log(x - y); // 3

                                                  //Оператор (*) використовується для множення двох чисел.

//const x = 8;
//const y = 5;
//console.log(x * y); // 40

                                                  //Оператор (/) використовується для ділення одного числа на інше.

//const x = 8;
//const y = 5;
//console.log(x / y); // 1.6

                                                  //Оператор (%) повертає остачу від ділення одного числа на інше.

//const x = 8;
//const y = 5;
//console.log(x % y); // 3

                                                   //ператор (**) використовується для піднесення числа до степеня.

//const x = 8;
//const y = 5;
//console.log(x ** y); // 32768

                                                           //Комбіновані оператори
/*Додавання: +=. Приклад: x += y еквівалентно x = x + y


Віднімання: -=. Приклад: x -= y еквівалентно x = x - y


Множення: *=. Приклад: x *= y еквівалентно x = x * y


Ділення: /=. Приклад: x /= y еквівалентно x = x / y


Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y*/

//let age = 25;
//age = age + 1;
//console.log(age); // 26

                                                        //Конкатенація рядків
//const message = "Mango " + "is" + " happy";
//console.log(message); // "Mango is happy"

//const age = 24;
//const message = "Poly is " + age + " years old!";

//console.log("Mango" + 55); // "Mango55"
//console.log("Mango" + true); // "Mangotrue"

                                                       //Перетворення типів: рядки
                                                       //Явне перетворення типів
//console.log(String(5)); // "5"
//console.log(String(true)); // "true"
//console.log(String(false)); // "false"
//onsole.log(String(null)); // "null"
//console.log(String(undefined)); // "undefined"

                                                       //Неявне перетворення типів
//console.log("5" + 3); // "53"
//console.log("5" + true); // "5true"
//console.log("5" + false); // "5false"
//console.log("5" + null); // "5null"
//console.log("5" + undefined); // "5undefined"

                                                       //Шаблонні рядки
                                                      //Синтаксис шаблонного рядка
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
//console.log(greeting); // "Welcome Mango, your room number is 207!"

                                                        //Порівняння конкатенації та шаблонних рядків
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting =
 // "Welcome " + guestName + ", your room number is " + roomNumber + "!";
//console.log(greeting); // "Welcome Mango, your room number is 207!"

                                                      //Код, де значення цих змінних підставляються у шаблонний рядок.
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
//console.log(greeting); // "Welcome Mango, your room number is 207!"

                                                       //Довжина рядка
//const productName = "Repair droid";

                                                      // Якщо у змінній зберігається рядок
//console.log(productName.length); // 12

                                                      // Якщо рядковий літерал
//console.log("Repair droid".length); // 12

                                                      //Індексація рядків
//const product = "Repair droid";
//console.log(product[0]); // 'R'
//console.log(product[5]); // 'r'
//console.log(product[11]); // 'd'

//const product = "Repair droid";
//const lastElementIndex = product.length - 1;
//console.log(product[lastElementIndex]); // 'd'

//const product = "Repair droid";
//console.log(product[product.length - 1]); // 'd'

                                                    //Оператори порівняння
//const a = 2;
//const b = 5;

//console.log(a > b); // false
//console.log(b > a); // true
//console.log(a >= b); // false
//console.log(b >= a); // true

//console.log(a < b); // true
//console.log(b < a); // false
//console.log(a <= b); // true
//console.log(b <= a); // false

                                                    //Оператори рівності
//console.log(5 == 5); // true
//console.log(5 == 3); // false
//console.log(5 != 3); // true
//console.log(5 != 5); // false

                                                   // Погано, бо виконується неявне приведення рядків і булевого значення до числа
//console.log(5 == "5"); // true
//console.log(5 != "5"); // false
//console.log(1 == true); // true
//console.log(1 != true); // false

                                                  //Перетворення типів: числа
//console.log(Number("5")); // 5
//console.log(Number(true)); // 1
//console.log(Number(false)); // 0
//console.log(Number(null)); // 0

//console.log(Number(undefined)); // NaN
//console.log(Number("Jacob")); // NaN
//console.log(Number("25px")); // NaN

//console.log("5" * 2); // 10
//console.log("10" - 5); // 5
//console.log(5 + true); // 6
//console.log(5 - true); // 4

//console.log("10" > 5); // true
//console.log(10 > "5"); // true
//console.log(5 > true); // true
//console.log(5 < true); // false
//console.log("5" < true); // false

                                                //Перетворення рядків у числа

                                                //Метод Number.parseInt()
//console.log(Number.parseInt("5")); // 5
//console.log(Number.parseInt("5.5")); // 5
//console.log(Number.parseInt("5cm")); // 5
//console.log(Number.parseInt("12qwe74")); // 12
//console.log(Number.parseInt("12.46qwe79")); // 12
//console.log(Number.parseInt("cm5")); // NaN
//console.log(Number.parseInt("")); // NaN
//console.log(Number.parseInt("qweqwe")); // NaN

                                                 //Метод Number.parseFloat()
//console.log(Number.parseFloat("5")); // 5
//console.log(Number.parseFloat("5.5")); // 5.5
//console.log(Number.parseFloat("3.14")); // 3.14
//console.log(Number.parseFloat("5cm")); // 5
//console.log(Number.parseFloat("5.5cm")); // 5.5
//console.log(Number.parseFloat("12qwe74")); // 12
//console.log(Number.parseFloat("12.46qwe79")); // 12.46
//console.log(Number.parseFloat("cm5")); // NaN
//console.log(Number.parseFloat("")); // NaN
//console.log(Number.parseFloat("qweqwe")); // NaN

                                              //Арифметичні функції
                                       //Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num. Наприклад:
//console.log(Math.floor(1.3)); // 1
//console.log(Math.floor(1.7)); // 1

                                     //Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num. Наприклад:
//console.log(Math.ceil(1.3)); // 2
//console.log(Math.ceil(1.7)); // 2

                                        /*Math.round(num): повертає значення числа після округлення до найближчого цілого. Округлення відбувається за математичними правилами, якщо десяткова частина числа менша 0.5, то округлення буде в меншу сторону, якщо 0.5 і більше — то в більшу.

                                 Наприклад: */
//console.log(Math.round(1.3)); // 1
//console.log(Math.round(1.7)); // 2

                               //Math.max(num1, num2, ...): повертає найбільше число з набору переданих чисел. Наприклад:
//console.log(Math.max(20, 10, 50, 40)); // 50

                                //Math.min(num1, num2, ...): повертає найменше число з набору переданих чисел. Наприклад:
//console.log(Math.min(20, 10, 50, 40)); // 10

                                 //Math.random(): повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком). Наприклад:
//console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

                                                   //Дробове число
//console.log(0.1 + 0.2 === 0.3); // false
//console.log(0.1 + 0.2); // 0.30000000000000004

                                                      //Підхід 1.
//console.log(0.1 * 10 + 0.2 * 10); // 3
//console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

                                                     //Підхід 2.
//console.log((0.1 + 0.2).toFixed(1)); // "0.3"
//console.log((5).toFixed(2)); //  ”5.00”
//console.log((8.762195).toFixed(4)); //  “8.7622”

                                                        //Основи функцій
                                                         //Оголошення та виклик функції
                                                         //Оголошення функції
//function doStuff() {
                                                      // Тіло функції
//  console.log("Log inside multiply function");
//}

                                                      //Виклик функції
                                                      // Оголошення функції multiply
//function doStuff() {
                                                       // Тіло функції
  //console.log("Log inside multiply function");
//}


                                                     // Виклики функції multiply
//doStuff(); // 'Log inside multiply function'
//doStuff(); // 'Log inside multiply function'
//doStuff(); // 'Log inside multiply function'

                                                     //Параметри та аргументи
                                                     // Оголошення параметрів x, y, z
//function multiply(x, y, z) {
//  console.log(`Result: ${x * y * z}`);
//}

                                                     //Параметри
                                                     // Оголошення параметрів x, y, z
//function multiply(x, y, z) {
//  console.log(`Result: ${x * y * z}`);
//}

                                                      // Передача аргументів
//multiply(2, 3, 5); // "Result: 30"
//multiply(4, 8, 12); // "Result: 384"
//multiply(17, 6, 25); // "Result: 2550"

                                                    //Повернення значення
//function multiply(x, y, z) {
  //const product = x * y * z;
                                     // Повертаємо результат виразу множення
  //return product;
//}



                                                    // Результат роботи функції можна зберегти у змінну
//const result = multiply(2, 3, 5);
//console.log(result); // 30

                                                     //повертати результат виразу
//function multiply(x, y, z) {
//  return x * y * z;
//}

//const result = multiply(2, 3, 5);
//console.log(result); // 30

                                               //Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення, функція поверне спеціальне значення undefined.
//function multiply(x, y, z) {
//  const product = x * y * z;
//}

//const result = multiply(2, 3, 5);
//console.log(result); // undefined

                                                 //функції припиняється відразу після зустрічі оператора return.
//function multiply(x, y, z) {
//  console.log("The code before return is executed as usual");

//  return x * y * z;

//  console.log("This code is never executed because it is after return");
//}

//console.log(multiply(2, 3, 5)); // 30

                                                         //Порядок виконання коду
//function multiply(x, y, z) {
//  console.log(`Result: ${x * y * z}`);
//}

//console.log("Log before multiply execution");
//multiply(2, 3, 5); // "Result: 30"
//console.log("Log after multiply execution");

                                                           //Область видимості функції
                                                           // Глобальна змінна
//const value = "I'm a global variable";

//function foo() {
                                                 // Можна звернутися до глобальної змінної
//  console.log(value); // "I'm a global variable"
//}

//foo();
                                                   // Можна звернутися до глобальної змінної
//console.log(value);
 // "I'm a global variable"

                                                  //Будь-яка конструкція, що використовує фігурні дужки {} (умови, цикли, функції тощо) створює нову локальну область видимості.
//function foo() {
                                              // Локальна змінна
  //const value = "I'm a local variable";
                                              // Можна звернутися до локальної змінної
  //console.log(value); // "I'm a local variable"
//}

//foo();
//onsole.log(value); // ReferenceError: value is not defined
                                                  // Помилка: локальну змінну не видно за межами функції;
