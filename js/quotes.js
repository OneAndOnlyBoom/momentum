const quotes = [
    {
        quotes: "the way",
        author: "walt disney",
    },
    {
        quotes: "the way2",
        author: "walt disney",
    },
    {
        quotes: "the way3",
        author: "walt disney",
    },
    {
        quotes: "the way4",
        author: "walt disney",
    },
    {
        quotes: "the way5",
        author: "walt disney",
    },
    {
        quotes: "the way6",
        author: "walt disney",
    },
    
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
 
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;


