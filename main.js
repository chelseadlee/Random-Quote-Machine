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
    // var currentQuote = "", currentAuthor = "";
    // // $("#button").on("click", getRandomQuote);

    // function getRandomQuote() {
    //     $.ajax({
    //         url: url,
    //         data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    //         success: function(response) {
    //             $("#quote").html("<p>" + response.quoteText + "<br>" + response.quoteAuthor + "</p>");
    //             var r = JSON.parse(response);
    //             currentQuote = response.quoteText;
    //             currentAuthor = response.quoteAuthor;
    //             console.log(currentAuthor + " " + currentQuote);
    //         }
    //     });


    // };



// var tweetIt = function() {
//     var phrase = document.getElementById('result').innerText;
//     var tweetUrl = 'https://twitter.com/share?text=' +
//         randQuote +
//         '.' +
//         '&url=' +
//         'http://www.cookbooktitlegenerator.com/';

//     window.open(tweetUrl);
// };