// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
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

//Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// function random(length,min,max){
//     let mas=[];
//     for(let i=0;i<length;i++){
//          mas.push(Math.round(Math.random()*(max-min)+min));
//     }
//     return mas;
//
// }
//
// console.log(random(4,4,25));
//
//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let numbers=[23,5,8,6,38,76];
//
//
// let sort=numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(sort);

//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let numbers=[23,5,8,6,38,76,11,33];
//
// let filter=numbers.filter( function (a){
//    if(a%2===0){
//        return true;
//    }
//    return false;
// });
// console.log(filter);

//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let numbers=[23,5,8,6,38,76,11,33];
// let map=numbers.map(function (item){
//     return item+'!';
// });
// console.log(map);

// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
//
// let users=[
//     new User(3434,'Vasya','drovoryb','drovoryb.com',0993578570),
//     new User(3435,'Vasya','drovoryb','drovoryb.com',0993578570),
//     new User(34734,'Vasya','drovoryb','drovoryb.com',0993578570),
//     new User(4,'Vasya','drovoryb','drovoryb.com',0993578570),
//     new User(35,'Vasya','drovoryb','drovoryb.com',0993578570),
//
// ];
// console.log(users);
//
// let filter=users.filter(function (user){
//     if(user.id % 2===0){
//         return true;
//     }
//     return false;
// });
// let sort=filter.sort(function (current,next){
//     return current.id-next.id;
// });
// console.log(sort);