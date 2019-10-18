/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: 'Devils never cry.',
    source: 'Dante',
    citation: 'Devil May Cry 3',
    year: '2005'
  },
  {
    quote: 'I need more power!',
    source: 'Vergil',
    citation: 'Devil May Cry 3',
    year: '2005'
  },
  {
    quote: 'I should have been the one to fill your dark soul with light!',
    source: 'Dante',
    citation: 'Devil May Cry',
    year: '2001'
  },
  {
    quote: 'SLAM DUNK!',
    source: 'Nero',
    citation: 'Devil May Cry 4',
    year: '2008'
  },
  {
    quote: "An opportunity to save the world doesn't happen everyday you know! Savor it.",
    source: 'Dante',
    citation: 'Devil May Cry 4',
    year: '2008'
  },
  {
    quote: "You're just dead weight.",
    source: 'Dante',
    citation: 'Devil May Cry 5',
    year: '2019'
  },
  {
    quote: 'What form of power is this?',
    source: 'Vergil',
    citation: 'Devil May Cry 5',
    year: '2019'
  },
  {
    quote: 'You look like you need a hug, but you\'re not gonna get one from me. -Better get lost.',
    source: 'Nero',
    citation: 'Devil May Cry 5',
    year: '2019'
  }
];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  quoteInfo = getRandomQuote();
  htmlString = '';
    htmlString += '<p class="quote">' + quoteInfo.quote + '</p>';
    htmlString += '<p class="source">' + quoteInfo.source;
    if (quoteInfo.citation != '') {
      htmlString += '<span class="citation">' + quoteInfo.citation + '</span>';
      } else {''}
    if (quoteInfo.year != '') {
      htmlString += '<span class="year">' + quoteInfo.year + '</span>';
      } else {''}
    htmlString += '</p>';
  console.log(quoteInfo);
  return document.getElementById('quote-box').innerHTML = htmlString;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.