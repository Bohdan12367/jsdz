//створити функцію яка приймає масив та виводить його

// function array(){
//     document.write(arrays);
// }
//  arrays=[356,true,45];
// array(arrays);

//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(number1,number2,number3){
//    let min=arguments[0];
//    for(i=0;i<arguments.length;i++) {
//        if (arguments[i] < min)
//            console.log(arguments[i]);
//    }
// }
//
// min(34,35,2);

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(number1,number2,number3){
//    let max=arguments[0];
//    for(i=0;i<arguments.length;i++) {
//        if (arguments[i] > max)
//            console.log(arguments[i]);
//    }
// }
//
// max(34,35,2);

// створити функцію яка повертає найбільше число з масиву
//
// function masMax(){
//     let max=arrays[0];
//     for (const maxElement of arrays) {
//         if (maxElement > max)
//            max=maxElement;
//             }
//     return max;
//
// }
// arrays=[23,545,86544,34,676];
// console.log(masMax());

// створити функцію яка повертає найменьше число з масиву

// function masMin(){
//     let min=arrays[0];
//     for (const minElement of arrays) {
//         if (minElement < min)
//             min=minElement;
//             }
//     return min;
//
// }
// arrays=[23,545,86544,34,676];
// console.log(masMin());

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// function masSum(array) {
//
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
//
// }
//
// arrays = [1, 3, 5, 6];
// console.log(masSum(arrays));

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function arithmetic(array){
//     let sum=0;
//     let n=array.length;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     return sum/n;
// }
//
// arrays=[1,2,3,4,5];
// console.log(arithmetic(arrays));

//створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
//
// function random(length){
//     let mas=[];
//     for(let i=0;i<length;i++){
//          mas.push(Math.round(Math.random()*100));
//     }
//     return mas;
//
// }
//
// console.log(random(4));

//Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// function arrayKey(arrays) {
// let arrayMass = []
//     for(const array of arrays){
//         for (const arrayKey1 in array) {
//             arrayMass.push(arrayKey1)
//         }
//
//     }
//     return arrayMass
// }
//
// console.log(arrayKey(mass));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
//  function arrayElement(arrays){
//     let arrayMass=[];
//      for (const array of arrays) {
//          for (const arrayElement1 in array) {
//              arrayMass.push(array[arrayElement1]);
//          }
//
//      }
//      return arrayMass;
//  }
//  console.log(arrayElement(mass));
