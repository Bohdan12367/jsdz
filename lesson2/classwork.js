// створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let number=[5,56,23,12,4];
// let string=[5,'class',-23,'table',121];
// let mixed=[12,'Bohdan',true,'simpson',false];
//
// console.log(`${number}\n${string}\n${mixed}`);
//
// let array=[];
// array[1]=true;
// array[2]=23;
// array[10]='school';
// console.log(`${array}`);

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// document.write('<div>');
//
// for(let i=0;i<=9;i++){
//     document.write(`
//     <div>ggggwp
//     </div>
//     `);
// }
//
// document.write('</div>');

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<div>');
//
// for(let i=0;i<10;i++){
//     document.write(`
//     <div>ggggwp[${i}]
//     </div>
//    `);
//}
//
//document.write('</div>');

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// document.write('<div>');
//
// let i=0;
// while(i<20) {
//     document.write(`
//         <h1>
//             Im h1
//          </h1>`);
//     i++;
// };
//
// document.write('</div>');

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// document.write('<div>');
//
// let i=0;
// while(i<20) {
//     document.write(`
//         <h1>
//             ${i}Im h1
//          </h1>`);
//     i++;
// };
//
// document.write('</div>');

// let number=[23,-34,8,9,0,32,99,127,987,567];
//
// for(let i=0;i<number.length;i++){
//     console.log(`${number}`);
// }

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string=['q','w','e','r','t','y','u','i','o','p'];
//
// for(let i=0;i<string.length;i++){
//     console.log(`${string}`);
// }

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі

// let mixed=[12,'Bohdan',true,'simpson',false,33,98,'hello','dog',-678];
//
// for(let i=0;i<mixed.length;i++){
//    console.log(`${mixed}`);
// }

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let elements=[12,'Bohdan',true,'simpson',false,33,98,'hello','dog',-678];
//
// for(let element of elements){
//     if(typeof(element)=="boolean")
//         console.log(`${element}`);
// };
//
// for(let element of elements){
//     if(typeof(element)=="number")
//         console.log(`${element}`);
// };
//
// for(let element of elements){
//     if(typeof(element)=="string")
//         console.log(`${element}`);
// };

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array=[];
// array[0]=34;
// array[1]=true;
// array[2]='cat';
// array[3]='dog';
// array[4]='mouse';
// array[5]=false;
// array[6]=35;
// array[7]=-345;
// array[8]=12;
// array[9]='table';
//
// console.log(`${array}`);

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<10;i++){
//     console.log(i);
//     document.write(i);
// }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i++){
//     console.log(i);
//     document.write(i);
// }

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i+=2){
//     console.log(i);
//     document.write(i);
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i% 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
//
// }

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i% 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
//
// }

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for(let user of usersWithId){
    for(let city of citiesWithId){
        if(user.id===city.user_id){
            user.address=city;
        }

    }
}
console.log(usersWithId);
