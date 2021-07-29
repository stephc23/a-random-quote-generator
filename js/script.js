/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{
  quote: 'Yet what is any ocean but a multitude of drops?',
  source: 'David Mitchell',
  citation: 'Cloud Atlas',
  year: 2004,
  tags: ['Literature', 'Inspiration']
},
{
  quote: 'In the middle of winter I at last discovered that there was in me an invincible summer.',
  source: 'Albert Camus',
  citation: 'Return to Tipasa',
  year: 1952,
  tags: ['Literature', 'Inspiration']
},
{
  quote: "I would follow this road wherever it led me. I’d ignore all the others that crossed its path, no matter how intriguing or promising they looked. I’d finally become convinced that if I didn’t, I’d only walk an endless maze.",
  source: 'Cheryl Strayed',
  citation: 'Wild',
  year: 2012,
  tags: ['Memoir', 'Inspiration']
},
{
  quote: "An original idea. That can't be too hard. The library must be full of them.",
  source: 'Stephen Fry',
  tags: ['Humor']
},
{
  quote: 'If you type Google into Google, you can break the internet.',
  source: 'Jen Barber',
  citation: 'The I.T. Crowd',
  tags: ['Humor', 'TV']
}
];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
***/
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

  if (randomQuote.hasOwnProperty('citation')) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.hasOwnProperty('year')) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.hasOwnProperty('tags')) {
    html += `<div class="tags">${randomQuote.tags.join(', ')}</div>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  return html;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);