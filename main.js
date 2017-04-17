var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

var showRandQuote = function(data) {
    var quote = data.quoteText;
    var author = data.quoteAuthor || "Anonymous";
    $("#quote").html("<p>" + quote + "</p>");
    $("#author").html("<p>" + author + "</p>");
    var randQuote = encodeURIComponent(quote + " - " + author);
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + randQuote);
};


$(document).ready(function() {
    $.getJSON(url, showRandQuote);
});

$("#button").click(function() {
    $.getJSON(url, showRandQuote);
});