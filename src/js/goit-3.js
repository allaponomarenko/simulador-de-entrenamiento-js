function calculateTotalPrice(order) {
    let totalSum = 0;
    if (order && Array.isArray(order)) { // Перевіряємо, чи передано масив
      for(let i = 0; i < order.length; i++) {
        totalSum += order[i];
      }
    } else {
      console.log('Помилка: передайте масив чисел в функцію.');
    }
    return totalSum;
  }
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  console.log(calculateTotalPrice());


//--------------------------------------------------------------------------------------------

  function getCommonElements(array1, array2) {
    let sharedArray = [];
  
    for (let i = 0; i < array1.length; i++) {
      let currentItem = array1[i];
      if (array2.includes(currentItem)) {
        sharedArray.push(currentItem);
      }
    }
    
    return sharedArray;
  }
  
  console.log(getCommonElements([1, 2, 3], [2, 4]));
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
  console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
  console.log(getCommonElements([], [])); // Результатом буде порожній масив, оскільки немає спільних елементів



  //-------------------------------------------------------------------------------------------------------------
  function checkStorage(storage, item) {
    item = item.toLowerCase();
    if (storage.includes(item)) {
      return `${item} is available to order!`;
    } else {
      return "Sorry! We are out of stock!";
    }
  }
  
  console.log(checkStorage(["apple", "plum", "pear"], "plum"));
  console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
  console.log(checkStorage(["apple", "plum", "pear"], "pear"));
  console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
  console.log(checkStorage(["apple", "plum", "pear"], "orange"));
  console.log(checkStorage(["apple", "plum", "pear"], "carrot"));




  //-------------------------------------------------------------------------------------------------------
  function calculateTotalPrice(order) {
    // Перевірка на наявність аргументу та його типу
    if (!order || !Array.isArray(order)) {
        console.error('Передано неправильний аргумент. Очікувався масив чисел.');
        return 0; // Повертаємо 0, оскільки не можемо обчислити суму чисел у порожньому масиві або без аргументів
    }

    let totalPrice = 0;
    for (let price of order) {
        totalPrice += price;
    }
    return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([])); // Поверне 0, оскільки масив порожній
console.log(calculateTotalPrice()); // Поверне 0, оскільки не передано аргументів

  //---------------------------------------------------------------------------------------------------------
  function createReversedArray() {
    let reversedArgs = [];
    // Перевірка наявності аргументів
    if (arguments.length > 0) {
      // Проходимось по аргументах у зворотньому порядку і додаємо їх до масиву reversedArgs
      for (let i = arguments.length - 1; i >= 0; i--) {
        reversedArgs.push(arguments[i]);
      }
      return reversedArgs;
    } else {
      // Повертаємо порожній масив, якщо функція викликана без аргументів
      return [];
    }
  }
  
  console.log(createReversedArray(12, 85, 37, 4));
  console.log(createReversedArray(164, 48, 291));
  console.log(createReversedArray(412, 371, 94, 63, 176));
  console.log(createReversedArray());



  //-------------------------------------------------------------------------------------------------
  function getSlice(array, value) {
    const concluseTodo = array.includes(value);
    if(concluseTodo) {
      return array.slice(0, array.indexOf(value) + 1); 
    } else {
      return [];
    }
    
  }
  