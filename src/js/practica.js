export function greet() {
  console.log('Hello from practica!');
}

export function farewell() {
  console.log('Goodbye from practica!');
}

//!перевірка віку користувача
//const userAge = 13;
//const result = userAge >= 18;
//console.log(result); //folse

//!розпарсити (дістати цифри з рядка)
//const x = "25px";
//const y = "30.2452212px";
//const numberX = Number.parseInt("25px");//TODO:розпарсити (дістати цифри (ціле число) з рядка від початку до першої літери чи іншого значення)
//console.log(numberX);
//const numberY = Number.parseFloat("30.2452212px");//TODO:розпарсити (дістати цифри (число з плаваючою крапочкою) з рядка від початку до першої літери чи іншого значення)
//console.log(numberY);

//!перевірити вік користвача різними методами
const userAge = prompt("Enter your age");

const result1 = +userAge > 18;
const result2 = Number(userAge) > 18;
const result3 = Number.parseFloat(userAge) > 18;
const result4 = Number.parseInt(userAge) > 18;
const result5 = userAge > 18;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);






// ! Це важливий коментар
// * Це позитивний коментар
// ? Це питання
// TODO: Завдання на потім