//1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let mon=document.getElementById('main_header');
//
// console.log(mon);
//робить шириниу елементу ul 400px
// let ul=document.getElementsByTagName('ul');
// for (const ulElement of ul) {
//     ulElement.style.width='400px';
// }

//робить ширину всіх елементів з класом linkList шириною 50%

// let link=document.getElementsByClassName('linkList');
// for (const linkElement of link) {
//     linkElement.style.width="50%";
// }
//отримує текст який зберігається в елементі з класом listElement2
// let list_el=document.getElementsByClassName('listElement2');
// let list_element=list_el[0];
// console.log(list_element.innerText);

// отримує всі елементи li та змінює ім колір фону на сірий
// let list_li=document.getElementsByTagName('li');
// for (const listLiElement of list_li) {
//     listLiElement.style.background="gray";
// }

//отримує всі елементи 'a' та додає їм клас anchor
//let a=document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor');
// }
//отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (let i = 0; i < a.length; i++) {
//     let aElement = a[i];
//
// }
// console.log(aElement);
// let aElement= aElements.innerText;
// console.log(aElement);
// for (const a_Element of aElement) {
//     if(a_Element===`link3`){
//         aElement.style.size="40px";
//     }
// }

//отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a=document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add(`anchor_${aElement.innerText}`);
// }

//отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// let color=prompt('vvedit color:blue,red or darkblue');
// for (const subElement of sub) {
//
// if(color==='red'){
//     subElement.style.background='red';
// }
// else if(color==='blue'){
//     subElement.style.background='blue';
//     }
// else if(color==='darkblue'){
//     subElement.style.background='darkblue';
// }
// else{
//     subElement.style.background='purple';
// }
// }

//отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub=document.getElementsByClassName('sub-header');
// let color=prompt('vvedit color:blue,red or darkblue');
// let subElements=sub.innerText;
// console.log(subElements);
// for (const subElement of sub) {
//     let subElements=subElement.innerText;
// if(subElements==='content 2 segment') {
//     if (color === 'red') {
//         subElement.style.background = 'red';
//     } else if (color === 'blue') {
//         subElement.style.background = 'blue';
//     } else if (color === 'darkblue') {
//         subElement.style.background = 'darkblue';
//     } else {
//         subElement.style.background = 'purple';
//     }
// }
// }
