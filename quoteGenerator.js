function quoteGen(quoteCategory) {
    var categoryQuotes;
    if(quoteCategory === "1")
        categoryQuotes = quotes.Motivational;
    else if(quoteCategory === "2")
        categoryQuotes = quotes.Historical;
    else if(quoteCategory === "3")
        categoryQuotes = quotes.Funny;
    else if(quoteCategory === "4")
        categoryQuotes = quotes.Space;
    if (categoryQuotes) {
        document.getElementById("quote").innerText = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    } else {
        console.log("Invalid category.");
    }
}

const categories = {
    "1": "Motivational",
    "2": "Historical",
    "3": "Funny",
    "4": "Space",
};
