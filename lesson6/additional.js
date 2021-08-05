// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        let DivUsers=document.getElementsByClassName('users')[0];
        for (const val of value) {
            let div=document.createElement('div');
            div.innerText=val.id+''+val.username;

            let btn =document.createElement('button');
            btn.innerText='posts';
            btn.onclick=function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${val.id}/posts`)
                    .then(value_1 => value_1.json())
                    .then(value_1 => {
                        let DivPosts = document.getElementsByClassName('posts2')[0];
                        DivPosts.innerText = '';
                        for (const val_1 of value_1) {
                            let div = document.createElement('div');
                            div.innerText = val_1.id + '' + val_1.body;

                            let btn1=document.createElement('button');
                            btn1.innerText='comments';
                            btn1.onclick=function (){
                                fetch(`https://jsonplaceholder.typicode.com/posts/${val_1.id}/comments`)
                                    .then(value_2 => value_2.json())
                                    .then(value_2 => {
                                        let DivComment=document.getElementsByClassName('comments2')[0];
                                        DivComment.innerText='';
                                        for (const val_2 of value_2) {
                                            let div=document.createElement('div');
                                            div.innerText=val_2.id+''+val_2.body;
                                            DivComment.append(div);
                                        }
                                    })
                            }
                            div.append(btn1);
                            DivPosts.append(div);
                        }
                    })
            }


            div.append(btn);

            DivUsers.append(div);
        }
    })
