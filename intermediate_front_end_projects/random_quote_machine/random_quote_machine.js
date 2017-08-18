$(document).ready(function() {
  
  var authorArray, randomNumber, randomAuthor, correspondingQuote, quotes;
 
  getQuote();
  
  function getQuote() { 
    quotes = {
    "-Kevin Kruse": "Life is about making an impact, not making an income.",
    "-Napoleon Hill": "Whatever the mind of man can conceive and believe, it can achieve.",
    "-Albert Einstein": "Strive not to be a success, but rather to be of value.",
    "-Wayne Gretzky": "You miss 100% of the shots you don’t take.",
    "-John Lennon": "Life is what happens to you while you’re busy making other plans.",
    "-Earl Nightingale": "We become what we think about.",
    "-Charles Swindoll": "Life is 10% what happens to me and 90% of how I react to it.",
    "-Woody Allen": "Eighty percent of success is showing up.",
    "-Steve Jobs": "Your time is limited, so don’t waste it living someone else’s life.",
    "-Mark Twain": "The two most important days in your life are the day you are born and the day you find out why."
    };
  
  authorArray = Object.keys(quotes);
  randomNumber = Math.floor(Math.random() * authorArray.length);
  randomAuthor = authorArray[randomNumber];
  correspondingQuote = quotes[randomAuthor];
    
  $(".quote").text(correspondingQuote);  
  $(".author").text(randomAuthor);
 };
  
    $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text="+ correspondingQuote + " " + randomAuthor);
  });
  
  $("#newQuote").on("click", function() {
    getQuote();
  });
});
  

