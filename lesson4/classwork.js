//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Klient{
//     constructor(id,name,surname,email,phone,order=[]) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//     }
// }
//  let arr=[]
//  Klient0=new Klient(242,'dada','wfwf','wefwerfe',43546756,['milk']);
//  Klient1=new Klient(243,'dada','wfwf','wefwerfe',43546756,['milk','bread',]);
//  Klient2=new Klient(244,'dada','wfwf','wefwerfe',43546756,['milk','bread','juice']);
//  arr.push(Klient0,Klient1,Klient2);
//  console.log(arr);
//  let sort=arr.sort(function (current,next){
//      return current.order-next.order;
//  });
//  console.log(sort);

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(models,vurobnuk,years,max_speed,engine){
//     this.models=models;
//     this.vurobnuk=vurobnuk;
//     this.years=years;
//     this.max_speed=max_speed;
//     this.engine=engine;
//
//     this.drive=function (){
//         return`Ідемо зі швидкістю ${cars.max_speed} km на годину`;
//     };
//
//     this.info=function () {
//      return cars;
//     }
//
//     this.increaseMaxSpeed=function(newSpeed){
//         cars.max_speed+=newSpeed;
//     }
//
//     this.changeYear=function (newValue){
//         cars.years-=newValue;
//     }
//     this.addDriver= function (name,surname){
//         let driver={driverName:name,driverSurname:surname};
//         return this.driver = driver;
//     }
// }
//
// let cars= new Car('Lada-Kalina','LadaMotors',2010,160,'300k.s.');
//     console.log(cars.info());
//     console.log(cars.drive());
//     cars.increaseMaxSpeed(30);
//     console.log(cars.max_speed);
//     cars.changeYear(20);
//     console.log(cars.years);
//     cars.addDriver('vasya','petkovic');
//     console.log(cars);


//(Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//  class Car{
//  constructor(models,vurobnuk,years,max_speed,engine) {
//      this.models=models;
//      this.vurobnuk=vurobnuk;
//      this.years=years;
//      this.max_speed=max_speed;
//      this.engine=engine;
//  }
//      info () {
//          return cars;
//      }
//
//      drive (){
//         return`Ідемо зі швидкістю ${cars.max_speed} km на годину`;
//     };
//
//     increaseMaxSpeed(newSpeed){
//         cars.max_speed+=newSpeed;
//     }
//
//     changeYear(newValue){
//         cars.years-=newValue;
//     }
//     addDriver(name,surname){
//         let driver={driverName:name,driverSurname:surname};
//         return this.driver = driver;
//     }
// }
// let cars=new Car('Lada-Kalina','LadaMotors',2010,160,'300k.s.');
// console.log(cars.info());
// console.log(cars.drive());
// cars.increaseMaxSpeed(40);
// console.log(cars.max_speed);
// cars.changeYear(10);
// console.log(cars.years);
// cars.addDriver('vitya','dimovych');
// console.log(cars);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,age,foot_size) {
        this.name=name;
        this.age=age;
        this.foot_size=foot_size;
    }
    happyEnd(){
        for (let i = 0; i < cinderella.length; i++) {
            if(cinderella.foot_size===prince.shoes_size){
                return `${prince.name} найшов туфельку ${cinderella.name}`;
            }
            else return 0;
        }
    }

}

 let cinderella=[
     new Cinderella('tamara',15,36),
     new Cinderella('tamara',13,33),
     new Cinderella('tamara',19,36),
     new Cinderella('tamara',23,34),
     new Cinderella('tamara',17,39),
     new Cinderella('tamara',18,40),
     new Cinderella('tamara',22,36),
     new Cinderella('tamara',26,36),
     new Cinderella('tamara',27,36),
     new Cinderella('tamara',28,36),
 ];
console.log(cinderella.happyEnd());
class Prince {
    constructor(name, age, shoes_size) {
        this.name = name;
        this.age = age;
        this.shoes_size = shoes_size;
    }
}

let prince=new Prince('seryu',28,39);


