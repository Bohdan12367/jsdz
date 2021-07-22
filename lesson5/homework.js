// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content);
//отримує текст з блоку з id "rules"
let rules=document.getElementById('rules');
console.log(rules);
//замініть текст параграфа з id 'content' на будь-який інший
content.innerText='Hello Dimon';
//замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML='<h1>Hello Tanya</h1>';
//змініть кожному елементу колір фону на червоний
document.body.style.color='red';
//змініть кожному елементу колір тексту на синій
document.body.style.color='blue';
//отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);
//отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let class_rules=document.getElementsByClassName('fc_rules');
console.log(class_rules);

for (const classRule of class_rules) {
    classRule.style.color='red';
    classRule.onclick = function () {
        console.log(`${class_rules}`);
    }

    // classRule.onclick =function (){
    //     console.log('egegdfhfhg');
    // }
}

