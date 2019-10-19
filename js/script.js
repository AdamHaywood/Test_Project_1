/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Here i'm creating an object array to hold various information on the
  quotes I plan to display on the page. Also I'm going for meets expectations.
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
  Next I use a random number from 0-7 to choose which quote will display on the 
  page I plan to use this function within the printQuote function later
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  I've created a function that will print out the exact HTML needed to
  input my quote as well as the details of the quote such as source, citation,
  and year within the existing HTML located in the index.html
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

printQuote();

/***
  The code below is needed to make the button on this page actionable, allowing
  it to call the printQuote function in order to rewrite the quote on the page
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);