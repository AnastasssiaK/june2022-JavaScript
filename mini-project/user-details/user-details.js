let title = document.createElement('h1');
title.innerText = 'User Details';

let url = new URL(location.href);

let user = JSON.parse(url.searchParams.get('data'));

let userDetails = document.createElement('div');
userDetails.classList.add('user-details');
userDetails.innerHTML = `<h2>${user.id}. ${user.name}</h2>
    <h3><b>Username:</b> ${user.username}</h3>
    <p><b>Email:</b> ${user.email}</p>
    <ul>
    <p style="font-style: oblique">Address:</p>
<li>${user.address.street}</li>
<li>${user.address.suite}</li>
<li>${user.address.city}</li>
<li>${user.address.zipcode}</li>
<ul>
<p style="font-style: oblique">Geo:</p>
<li>${user.address.geo.lat}</li>
<li>${user.address.geo.lng}</li>
</ul>
</ul>
<p><b>Phone:</b> ${user.phone}</p>
<p><b>Website:</b> ${user.website}</p>
<ul>
<p style="font-style: oblique">Company:</p>
<li>Name: ${user.company.name}</li>
<li>Catch phrase: ${user.company.catchPhrase}</li>
<li>BS: ${user.company.bs}</li>
</ul>`;


let postOfCurrentUserBtn = document.createElement('button');
postOfCurrentUserBtn.classList.add('postOfCurrentUserBtn');
postOfCurrentUserBtn.innerHTML = `<b>post of current user</b>`;

postOfCurrentUserBtn.onclick = (e) => {
    postOfCurrentUserBtn.disabled = true;
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postsOfCurrentUser = document.createElement('div');
            postsOfCurrentUser.classList.add('postsOfCurrentUser');

            for (const post of posts) {
                let postOfCurrentUser = document.createElement('div');
                postOfCurrentUser.classList.add('postOfCurrentUser');

                let postTitle = document.createElement('p');
                postTitle.innerText = `${post.id}. ${post.title}`;

                let postDetails = document.createElement('a');
                postDetails.innerText = 'post details';

                postDetails.href = `../post-details/post-details.html?data=${JSON.stringify(post)}`;

                postOfCurrentUser.append(postTitle, postDetails);
                postsOfCurrentUser.appendChild(postOfCurrentUser);
                document.body.appendChild(postsOfCurrentUser);
            }
        });
}

document.body.append(title, userDetails, postOfCurrentUserBtn);

/*
id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
    street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
            lng: "81.1496"
    }
},
phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
    name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
*/