// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         let DivPosts=document.getElementsByClassName('posts')[0];
//         for (const val of value) {
//             let div=document.createElement('div');
//             div.innerText=val.id+''+ val.title;
//             DivPosts.append(div);
//         }
//     })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(value => value.json())
// .then(value => {
//     let DivComments=document.getElementsByClassName('comments')[0];
//     for (const val of value) {
//         let div=document.createElement('div');
//         div.innerHTML=val.id+''+val.body;
//         DivComments.appendChild(div);
//     }
// })