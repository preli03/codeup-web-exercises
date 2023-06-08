"use strict";

/*fetch('https://api.github.com/users')
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
    });*/

/*
const gitUsername = username => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_API}}).then(res => {
        console.log(res)
        return res.json()
    }).then(res => console.log(res[0].created_at))
}

gitUsername('preli')
*/
fetch(url, {headers: {'Authorization': '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'}})

const wait = (num) => {
    const myPromise = new Promise((res) => {
        setTimeout(() => {
            res({num})
        }, num );
    });
    return myPromise
}

wait(9000).then(res => console.log(`You will see this in ${res.num / 1000} second${res.num > 1000 ? 's' : ''}`))
