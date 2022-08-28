let title = document.createElement('h1');
title.innerText = 'Users';

let container = document.createElement('div');
container.classList.add('container');
document.body.append(title,container);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userBox = document.createElement('div');
            userBox.classList.add('userBox');

            let info = document.createElement('h2');
            info.innerText = `${user.id}. ${user.name}`;

            let infoBtn = document.createElement('button');
            infoBtn.classList.add('infoBtn');
            infoBtn.innerText = 'user details';

            infoBtn.onclick = function (e) {
                e.preventDefault();
                location.href = `user-details/user-details.html?data=${JSON.stringify(user)}`;
            }


            userBox.append(info,infoBtn);
            container.appendChild(userBox);
        }
    });