

fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            console.log(post);
        });
    })
    .catch(error => {
        console.error(error);
    });
