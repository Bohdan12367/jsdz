// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Наприклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// Англійська-2с
// Доїхати додому- 1с
// вигуляти собаку-0.2 с
// подивитись фільм-0.8 с
// почитати книгу - 0.6 с
//
// І так далі

//promise

// function WakeUp(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(time<7.10){
//             console.log('можна спати');
//             reject('спи');
//         }else{
//             console.log('Початок робочого дня')
//             resolve('Добрий ранок')
//         }
//         },300)
//     });
// }
//
// function Breakfast(food){
//     return new Promise( (resolve,reject) =>{
//         setTimeout(()=>{
//             if(food==='egg'){
//                 console.log('Сьогодні буде омлет');
//                 reject('знову те саме');
//             }
//             else {
//                 console.log('Сьогодні на сніданок шедевррр');
//                 resolve('Смачного)');
//             }
//         },1000)
//     })
// }
//
// function  Shower(waterTemp){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log('welcome to the Shower')
//             if (waterTemp === 'cold') {
//                 console.log('Не включили теплу воду');
//                 reject('Знову холодно...');
//
//             } else {
//                 console.log('Ура,тепла вода');
//                 resolve('В мене гарний настрій від теплої води')
//             }
//         },500);
//     })
//
// }
//
// function Bus(NumberBus){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас на зупинці!')
//             if(NumberBus===12){
//                 console.log('Не наш автобус');
//                 reject('не сідати');
//             }else{
//                 console.log('Ура! Наш автобус')
//                 resolve('Автобус до роботи')
//             }
//         },3000)
//     })
// }
//
// function Dinner(food){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас у їдальні')
//             if (food==='hamburger'){
//                 console.log('не смачна їжа');
//                 reject('можливий гастрит');
//             }else {
//                 console.log('Смачний та ситний обід')
//                 resolve(food);
//             }
//         },1000)
//     })
// }
//
// function English(homework){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Welcome to EnglishClub!');
//             if(homework===false){
//                 console.log('Виконай домашнє наступного разу!')
//                 reject('Погано так робити!');
//             }else {
//                 console.log('Давай перевіримо домашнє завдання')
//                 resolve('Молодець,домашнє зроблене правильно');
//             }
//         },2000)
//     })
// }
// function GoToHome(Money){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Час їхати додому');
//             if(Money<50){
//                 console.log('У тебе мало грошей,прийдетьс маршруткою додому');
//                 reject('заробляй більше!');
//             }
//             else {
//                 console.log('Сьогодні можна і на таксі');
//                 resolve('У нас достатьно грошей на таксі');
//             }
//         },1000)
//     })
// }
//
// function Dog(weather){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Треба вигули собаку');
//             if(weather==='rain'){
//                 console.log('Bad weather');
//                 reject('сьогодні сидимо дома');
//             }
//             else {
//                 console.log('Good weather');
//                 resolve('lets go!');
//             }
//         },200)
//     })
// }
//
// function WatchCinema(Time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас на переглді фільму')
//             if(Time>21){
//                 console.log('треба спати');
//                 reject('Фільму не буде,бо пізно');
//             }
//             else {
//                 console.log('Приємного перегляду');
//                 resolve('Сьогодні ми глянемо фільм!');
//             }
//         },800);
//     })
//
// }
//
// function GoToSleep(Time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('нас чекають сни')
//             if (Time<23){
//                 console.log('спати зарано');
//                 reject('можна ще повчитись');
//             }
//             else {
//                 console.log('час спати');
//                 resolve('Надобраніч!');
//             }
//         },600)
//
//     })
// }
// WakeUp(7.20)
//     .then(value =>{
//         console.log(value);
//         return Breakfast('bread');
//     } )
//     .then(value => {
//         console.log(value);
//         return Shower('hot');
//     })
//     .then(value => {
//         console.log(value);
//         return Bus(112);
//     })
//     .then(value => {
//         console.log(value);
//         return Dinner('borsch');
//     })
//     .then(value => {
//         console.log(`Я люблю їсти ${value}`);
//         return English(true);
//     })
//     .then(value => {
//         console.log(value);
//         return GoToHome(90);
//     })
//     .then(value => {
//         console.log(value);
//         return Dog('sun');
//     })
//     .then(value => {
//         console.log(value);
//         return WatchCinema(20);
//     })
//     .then(value => {
//         console.log(value);
//         return GoToSleep(23);
//     })
//     .then(value => {
//         console.log(value);
//     })
//
//     .catch(reason => {
//         console.log(reason);
//     })

//async await

// function WakeUp(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(time<7.10){
//                 console.log('можна спати');
//                 reject('спи');
//             }else{
//                 console.log('Початок робочого дня')
//                 resolve('Добрий ранок')
//             }
//         },300)
//     });
// }
//
// function Breakfast(food){
//     return new Promise( (resolve,reject) =>{
//         setTimeout(()=>{
//             if(food==='egg'){
//                 console.log('Сьогодні буде омлет');
//                 reject('знову те саме');
//             }
//             else {
//                 console.log('Сьогодні на сніданок шедевррр');
//                 resolve('Смачного)');
//             }
//         },1000)
//     })
// }
//
// function  Shower(waterTemp){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log('welcome to the Shower')
//             if (waterTemp === 'cold') {
//                 console.log('Не включили теплу воду');
//                 reject('Знову холодно...');
//
//             } else {
//                 console.log('Ура,тепла вода');
//                 resolve('В мене гарний настрій від теплої води')
//             }
//         },500);
//     })
//
// }
//
// function Bus(NumberBus){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас на зупинці!')
//             if(NumberBus===12){
//                 console.log('Не наш автобус');
//                 reject('не сідати');
//             }else{
//                 console.log('Ура! Наш автобус')
//                 resolve('Автобус до роботи')
//             }
//         },3000)
//     })
// }
//
// function Dinner(food){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас у їдальні')
//             if (food==='hamburger'){
//                 console.log('не смачна їжа');
//                 reject('можливий гастрит');
//             }else {
//                 console.log('Смачний та ситний обід')
//                 resolve(food);
//             }
//         },1000)
//     })
// }
//
// function English(homework){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Welcome to EnglishClub!');
//             if(homework===false){
//                 console.log('Виконай домашнє наступного разу!')
//                 reject('Погано так робити!');
//             }else {
//                 console.log('Давай перевіримо домашнє завдання')
//                 resolve('Молодець,домашнє зроблене правильно');
//             }
//         },2000)
//     })
// }
// function GoToHome(Money){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Час їхати додому');
//             if(Money<50){
//                 console.log('У тебе мало грошей,прийдетьс маршруткою додому');
//                 reject('заробляй більше!');
//             }
//             else {
//                 console.log('Сьогодні можна і на таксі');
//                 resolve('У нас достатьно грошей на таксі');
//             }
//         },1000)
//     })
// }
//
// function Dog(weather){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Треба вигули собаку');
//             if(weather==='rain'){
//                 console.log('Bad weather');
//                 reject('сьогодні сидимо дома');
//             }
//             else {
//                 console.log('Good weather');
//                 resolve('lets go!');
//             }
//         },200)
//     })
// }
//
// function WatchCinema(Time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Вітаємо вас на переглді фільму')
//             if(Time>21){
//                 console.log('треба спати');
//                 reject('Фільму не буде,бо пізно');
//             }
//             else {
//                 console.log('Приємного перегляду');
//                 resolve('Сьогодні ми глянемо фільм!');
//             }
//         },800);
//     })
//
// }
//
// function GoToSleep(Time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('нас чекають сни')
//             if (Time<23){
//                 console.log('спати зарано');
//                 reject('можна ще повчитись');
//             }
//             else {
//                 console.log('час спати');
//                 resolve('Надобраніч!');
//             }
//         },600)
//
//     })
// }
//
// async function MyDay(){
//     try{
//         const wakeup = await WakeUp(7.20);
//         console.log(wakeup);
//
//         const breakfast = await Breakfast('bread');
//         console.log(breakfast);
//
//         const shower=await Shower('hot');
//         console.log(shower);
//
//         const bus=await Bus(112);
//         console.log(bus);
//
//         const dinner=await Dinner('borsch');
//         console.log(`Я люблю їсти ${dinner}`);
//
//         const english=await English(true);
//         console.log(english);
//
//         const gohome=await GoToHome(90);
//         console.log(gohome);
//
//         const dog= await Dog('sun');
//         console.log(dog);
//
//         const cinema = await WatchCinema(20);
//         console.log(cinema);
//
//         const sleep= await GoToSleep(23);
//         console.log(sleep);
//
//     } catch (reason) {
//         console.log('Error Day');
//         console.log(reason);
//     }
// }
//
// MyDay();

//callback

function WakeUp(time,cb){
        setTimeout(()=>{
            if(time<7.10){
                console.log('можна спати');
                cb('спи');
            }else{
                console.log('Початок робочого дня')
                cb('Добрий ранок')
            }
        },300)
}

function Breakfast(food,cb){
        setTimeout(()=>{
            if(food==='egg'){
                console.log('Сьогодні буде омлет');
                cb('знову те саме');
            }
            else {
                console.log('Сьогодні на сніданок шедевррр');
                cb('Смачного)');
            }
        },1000)
}

function  Shower(waterTemp,cb){
        setTimeout(()=> {
            console.log('welcome to the Shower')
            if (waterTemp === 'cold') {
                console.log('Не включили теплу воду');
                cb('Знову холодно...');

            } else {
                console.log('Ура,тепла вода');
                cb('В мене гарний настрій від теплої води')
            }
        },500);

}

function Bus(NumberBus,cb){
        setTimeout(()=>{
            console.log('Вітаємо вас на зупинці!')
            if(NumberBus===12){
                console.log('Не наш автобус');
                cb('не сідати');
            }else{
                console.log('Ура! Наш автобус')
                cb('Автобус до роботи')
            }
        },3000)
}

function Dinner(food,cb){
        setTimeout(()=>{
            console.log('Вітаємо вас у їдальні')
            if (food==='hamburger'){
                console.log('не смачна їжа');
                cb('можливий гастрит');
            }else {
                console.log('Смачний та ситний обід')
                cb(food);
            }
        },1000)
}

function English(homework,cb){
        setTimeout(()=>{
            console.log('Welcome to EnglishClub!');
            if(homework===false){
                console.log('Виконай домашнє наступного разу!')
                cb('Погано так робити!');
            }else {
                console.log('Давай перевіримо домашнє завдання')
                cb('Молодець,домашнє зроблене правильно');
            }
        },2000)
}
function GoToHome(Money,cb){
        setTimeout(()=>{
            console.log('Час їхати додому');
            if(Money<50){
                console.log('У тебе мало грошей,прийдетьс маршруткою додому');
                cb('заробляй більше!');
            }
            else {
                console.log('Сьогодні можна і на таксі');
                cb('У нас достатьно грошей на таксі');
            }
        },1000)
}

function Dog(weather,cb){
        setTimeout(()=>{
            console.log('Треба вигули собаку');
            if(weather==='rain'){
                console.log('Bad weather');
                cb('сьогодні сидимо дома');
            }
            else {
                console.log('Good weather');
                cb('lets go!');
            }
        },200)
}

function WatchCinema(Time,cb){
        setTimeout(()=>{
            console.log('Вітаємо вас на переглді фільму')
            if(Time>21){
                console.log('треба спати');
                cb('Фільму не буде,бо пізно');
            }
            else {
                console.log('Приємного перегляду');
                cb('Сьогодні ми глянемо фільм!');
            }
        },800);

}

function GoToSleep(Time,cb){
        setTimeout(()=>{
            console.log('нас чекають сни')
            if (Time<23){
                console.log('спати зарано');
                cb('можна ще повчитись');
            }
            else {
                console.log('час спати');
                cb('Надобраніч!');
            }
        },600)

}

WakeUp(7.20,(wakeup)=>{
    console.log(wakeup);
    Breakfast('bread',(breakfast)=>{
        console.log(breakfast);
        Shower('hot',(shower)=>{
            console.log(shower);
            Bus(112,(bus)=>{
                console.log(bus);
                Dinner('borsch',(dinner)=>{
                    console.log(dinner);
                    English(true,(english)=>{
                        console.log(english);
                        GoToHome(90,(gohome)=>{
                            console.log(gohome);
                            Dog('sun',(dog)=>{
                                console.log(dog);
                                WatchCinema(20,(cinema)=>{
                                    console.log(cinema);
                                    GoToSleep(23,(sleep)=>{
                                        console.log(sleep);
                                    })
                                })
                            })

                        })

                    })
                })
            })
        })
    })
})
