let title = document.createElement('h1');
title.innerText = 'Post Details';

let url = new URL(location.href);

let post = JSON.parse(url.searchParams.get('data'));

let postDetails = document.createElement('div');
postDetails.classList.add('postDetails');

postDetails.innerHTML = `<h2>${post.userId}.${post.id}. ${post.title}</h2>
    <p>${post.body}</p>`;

let commentsBox = document.createElement('div');
commentsBox.classList.add('commentsBox');

let commentsTitle = document.createElement('h2');
commentsTitle.innerText = 'Comments:';

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let commentBox = document.createElement('div');
            commentBox.classList.add('commentBox');
            commentBox.innerHTML = `<h4>${comment.id}. ${comment.name}</h4>
                <p>Email: ${comment.email}</p>
                <p>${comment.body}</p>`;

            commentsBox.appendChild(commentBox);
        }
    });

document.body.append(title, postDetails, commentsTitle, commentsBox);