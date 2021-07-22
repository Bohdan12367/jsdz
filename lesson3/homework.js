//створити функцію яка обчислює та повертає площу прямокутника висотою

// function square(h,a){
//     return h*a/2;
// }
//
// let res=square(10,4);
// console.log(res);
//
// // створити функцію яка обчислює та повертає площу кола
// function circle(r){
//     return Math.PI*r**2;
// }
// let res1=circle(4);
// console.log(res1);

//- створити функцію яка обчислює та повертає площу циліндру

// function cylinder(h,r){
//     return 2*Math.PI*r*h;
// }
//
// let res2=cylinder(3,4);
// console.log(res2);
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numbers(){
//     let max=arguments[0];
//     let min=arguments[0];
//     for(i=0;i<arguments.length;i++){
//         if(arguments[i]>max)
//             max=arguments[i];
//         if (arguments[i]<min)
//             min=arguments[i];
//     }
//     console.log(max);
//     return min;
// }
//
// let masuv=numbers(3,4,68,676,8,22,45);
// console.log(masuv);

//створити функцію яка  створює блок з текстом. Текст задати через аргумент
//
// function createText(){
//     document.write(arguments[0]);
// }
//
// createText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, sapiente!');

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul_li(){
//     document.write(`<ul>`)
//     for(i=0;i<3;i++){
//         document.write(`<li>`)
//             document.write(arguments[0])
//         document.write(`</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ul_li('wkjrnfknvl vlwjbrflwjrfbjl');

//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul_li2(text,number){
//     document.write(`<ul>`);
//     for(i=0;i<arguments[1];i++){
//         document.write(`<li>`)
//             document.write(arguments[0])
//         document.write(`</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// ul_li2('I love database',5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function primitive() {
//
//     document.write(`<ul>`);
//     for (const element of elements) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
// }
// let elements=[24,true,'animal',2424];
// primitive(elements);
//
