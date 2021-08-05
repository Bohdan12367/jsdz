// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(value => value.json())
// .then(value => {
//     let DivPosts=document.getElementsByClassName('posts1')[0];
//     for (const val of value) {
//         let div=document.createElement('div');
//         div.innerText=val.id+''+val.body;
//
//         let btn=document.createElement('button');
//         btn.innerText='comments';
//         btn.onclick=function (){
//             fetch(`https://jsonplaceholder.typicode.com/posts/${val.id}/comments`)
//                 .then(value => value.json())
//                 .then(value => {
//                     let DivComment=document.getElementsByClassName('comments1')[0];
//                     DivComment.innerText='';
//                     for (const val of value) {
//                         let div=document.createElement('div');
//                         div=val.id+''+val.body;
//                         DivComment.append(div);
//                     }
//                 })
//         }
//         div.append(btn);
//         DivPosts.append(div);
//     }
// })