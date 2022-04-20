showQuote = () => {
    let quote = QUOTES[getRamdom(0, QUOTES.length - 1)];
    let elmQuote = document.getElementById("elm-box-quote");
    elmQuote.innerHTML = quote;
}

setInterval(() => {
    showQuote();
}, 5000);

showQuote();

