const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you’ll always have more.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const randomQuote = getRandomQuote();

    quoteElement.classList.add('fade');
    authorElement.classList.add('fade');

    setTimeout(() => {
        quoteElement.textContent = `"${randomQuote.quote}"`;
        authorElement.textContent = `- ${randomQuote.author}`;
        
        quoteElement.classList.add('fade-in');
        authorElement.classList.add('fade-in');

        setTimeout(() => {
            quoteElement.classList.remove('fade', 'fade-in');
            authorElement.classList.remove('fade', 'fade-in');
        }, 300);
    }, 300);
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

document.addEventListener('DOMContentLoaded', displayQuote);

quoteElement.classList.add('fade');
setTimeout(() => {
    quoteElement.textContent = `"${randomQuote.quote}"`;
    quoteElement.classList.add('fade-in');
}, 300)