function countWords(sentence) {
    console.log(sentence)
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}


// next iteration
const users = [
    {
        id:1,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash', 'python']
    },
    {
        id:2,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript', 'ruby']
    },
    {
        id:3,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        id:4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        id:5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];
// Assume that the users array contains user objects with a `languages` array property
const usersArr = users.filter(user => user.languages.length >= 3);
    console.log(usersArr);

const initialValue = 0;
const sumOfExperience;
});

