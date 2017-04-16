var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

var showRandQuote = function(data) {
    $("#quote").text(data.quoteText);
    $("#author").text(data.quoteAuthor);
};


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
    // var randQuote = currentQuote + " - " + currentAuthor;
    // // $(".twitter-share-button").attr("data-text", quote);


