//get JSON format data from the forismatic API
$(document).ready(function() {
  $("#quotebtn").click(function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {
      //append the quote and author information to their appropiate tags in the html document
      $('.quotetxt').html("<p>" + response.quoteText + "</p>");
      $('.quoteAuthor').html("<p>--" + response.quoteAuthor + "</p>");
      a = response.quoteText;
      b = response.quoteAuthor;
      c = "http://twitter.com/home/?status=" + a + "--" + b;
      $('#tweetbtn').attr("href", c);
    });
  });
});

//take focus off the mouse after it is clicked
$(".btn").mouseup(function() {
  $(this).blur();
});
