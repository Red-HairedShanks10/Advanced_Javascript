let url = "people.json";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(person => {
            console.log(`${person.first} ${person.last} - ${person.topic}`);
        });
    });
// people.json
[{
        "first": "Laurence",
        "last": "Svekis",
        "topic": "JavaScript"
    },
    {
        "first": "John",
        "last": "Smith",
        "topic": "HTML"
    },
    {
        "first": "Jane",
        "last": "Doe",
        "topic": "CSS"
    }
]