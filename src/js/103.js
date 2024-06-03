/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */


// function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", ".");
//     numWeight = Number.parseFloat(numWeight);
//     const numHeight = Number.parseFloat(height);
//     const bmi = numWeight / (numHeight ** 2);
//     return bmi.toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

//--------------------------------------------------------------------------------------------------------

// -------------------------------------------- 3

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let message;


// if(minutes > 0) {
//     message = `${hours} г. ${minutes} хв.`;
// } else {
//     message = `${hours} г.`;
// }

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(message);








/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. 
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;

// if(deadline === 0) {
//     console.log("Today");
// } else if(deadline === 1) {
//     console.log("Tomorrow");
// } else if(deadline === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }





/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 1;
// let msg;

// switch(deadline) {
//     case 0:
//         msg = "Today";
//         break;
//     case 1:
//         msg = "Tomorrow";
//         break;
//     case 2:
//         msg = "Overmorrow";
//         break;
//     default:
//         msg = "Date in the future";
// }

// console.log(msg);




/*
 * Напиши скрипт выбора опції доставки товару.
 * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправленна сьогодні'
 * - 'Вам передзвонить менеджер'
 */


// const option = 3;
// let message = "";

// switch(option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//         break;
//     case 2:
//         message = 'Курьер доставить замовлення завтра з 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посилка буде відправленна сьогодні';
//         break;
//     default:
//         message = 'Вам передзвонить менеджер';
// }

// console.log(message);




/**
 * --------------------------------
 */

// console.log(true && 3);
// console.log(false && 3);

// console.log(true && 4 && "hello");
// console.log(true && 0 && "hello");

// console.log(true || 4);
// console.log(true || 4 || 3);
// console.log(true || false || 3);

// console.log(null || 3 || undefined);

// console.log(null || 2 && 3 || 4);










// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "free";
// let canConnect;
                    
// const canConnect = sub === "pro" || sub === "vip";


// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// console.log("дозволено доступ?", canConnect);






/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;

// console.log("can chat?", canChat);


//--------------------------------------------------------------------------------------------------
// ------------------------------------------ 2

/**
 * Форматування посилання
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.ua/about";

// if(!link.endsWith("/")) {
//   console.log("ok");
//   link += "/";
// }

// console.log(link);






/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */


// let link = "https://my-site.ua/about";

// if(!link.endsWith("/") && link.includes("my-site")) {
//   console.log("ok");
//   link += "/";
// }

// console.log(link);




// -------------------------------------- 4

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
//   if(!(i % 5)) {
//     console.log(i);
//   }
// }







/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому два парних числа - 2 і 4, їх сума 6.
 */



// for(let i = min; i <= max; i++) {
//   if(!(i % 2)) {
//     total += i;
//   }
// }


// for(let i = min; i <= max; i++) {
//   if(i % 2) {
//     continue;
//   }

//   total += i;
// }

// console.log(total);


// function sum(min, max) {
//   let total = 0;

//   for(let i = min; i <= max; i++) {
//     if(!(i % 2)) {
//       total += i;
//     }
//   }

//   return total;
// }

// console.log(sum(0, 10));







//-----------------------------------------------------------------------------------------------------
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
// const values = "8 11";

// const arr = values.split(" ");
// const result = Number(arr[0]) * Number(arr[1]);

// console.log(result);






/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for(let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1} - ${fruits[i]}`);  
// }





// ----------------------------------------- 5

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(const num of numbers) {
//     if(!(num % 2)) {
//         total += num;
//     }
// }




/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for(let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }




/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome  to  the future";

// const result = arr.slice(1, arr.length - 1).join(" ").trim();
// console.log(result);



/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [26, 17, 94, 1, -23, 37];
// let min;

// for(let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
//         min = values[i];
//     }
// }


// console.log(min);





//---------------------------------------------------------------------------------------------

/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleHours = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0);

//     return `${doubleHours}:${doubleMinutes}`
// }

// console.log(formatTime(70))
// console.log(formatTime(460))
// console.log(formatTime(1441))









// Створити функцію яка буде розбивати початковий масив 
// на потрібну кількість елементів розділюячи на декілька 
// масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


               //0  1  2  3  4  5  6  7  8
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function foo(arr, count) {
//     const res = [];
    
//     for(let i = 0; i < arr.length; i += count) {
//         const newArr = arr.slice(i, i + count);
//         console.log(newArr);
//         res.push(newArr);
//     }
//     return res;
// }

// console.log(foo(data, 3));



//-------------------------------------------------------------------------------------------------
