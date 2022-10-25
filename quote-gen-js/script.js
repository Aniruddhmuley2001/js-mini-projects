const quotes = [
    {
        "id": 1,
        "name": "Amy Poehler",
        "content": "Change the world by being yourself."
    },
    {
        "id": 2,
        "name": "T.S Eliot",
        "content": "Every moment is a fresh beginning."
    },
    {
        "id": 3,
        "name": "Mark Twain",
        "content": "Never regret anything that made you smile."
    },
    {
        "id": 4,
        "name": "Walt Disney",
        "content": "Whatever you do, do it well."
    },
    {
        "id": 5,
        "name": "Steve Martin",
        "content": "Be so good they can’t ignore you. "
    },
]

const getRandomQuote = (quotes) => {
    let len = Object.keys(quotes).length;
    let num = Math.floor(Math.random()*len);
    return quotes[num];
}

const printRandomQuote = () => {
    let quote = getRandomQuote(quotes);
    let container = document.getElementById("quote-box");
    let quoteString = `<p>${quote.content}</p><p>${quote.name}</p>`;
    container.innerHTML = quoteString;
}

// Adding Event Listener to the button
// Boolean value false added to end of addEventListener method, so as to execute the innermost HTML event handler first (bubbling phase). 
// More on bubbling: https://javascript.info/bubbling-and-capturing
document.getElementById("loadQuote").addEventListener("click", printRandomQuote, false);


// Fetching by API

const printRandomQuote2 = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': config.MY_API_KEY,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            let container2 = document.getElementById("quote-box-2");
            let quoteString2 = `<p>${response.content}</p><p>${response.originator.name}</p>`;
            container2.innerHTML = quoteString2;
        })
        .catch(err => console.error(err));
}