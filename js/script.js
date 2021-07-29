/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// The `quotes` array contains quote objects with quote and source properties and optional citation, year, and tags properties.
const quotes = [
{
  quote: 'Yet what is any ocean but a multitude of drops?',
  source: 'David Mitchell',
  citation: 'Cloud Atlas',
  year: 2004,
  tags: ['Inspiration', 'Fiction']
},
{
  quote: 'In the middle of winter I at last discovered that there was in me an invincible summer.',
  source: 'Albert Camus',
  citation: 'Return to Tipasa',
  year: 1952,
  tags: ['Inspiration', 'Essays']
},
{
  quote: "I would follow this road wherever it led me. I’d ignore all the others that crossed its path, no matter how intriguing or promising they looked. I’d finally become convinced that if I didn’t, I’d only walk an endless maze.",
  source: 'Cheryl Strayed',
  citation: 'Wild',
  year: 2012,
  tags: ['Inspiration', 'Memoir']
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

// The `getRandomNumber` function returns a random number between a lower number and a higher number.
const getRandomNumber = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + lower;

// The `getRandomQuote` function returns a random quote object from the `quotes` array.
const getRandomQuote = () => {
  let randomIndex = getRandomNumber(0, quotes.length - 1);
  return quotes[randomIndex];
};

// The `getRandomRGB` function returns an array of three random numbers, each between 0 and 255.
const getRandomRGB = () => {
  let rgbValues = [];
  for (let i = 0; i < 3; i++) {
    rgbValues.push(getRandomNumber(0, 255));
  }
  return rgbValues;
};

// The `printQuote` function updates the HTML with a random quote, changes the background to a random color, and returns the updated HTML string.
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
  document.querySelector('body').style.background = `rgb(${getRandomRGB()})`;
  return html;
};

//Call the `printQuote` function every 8 seconds
setInterval(printQuote, 8000);

//Call the `printQuote` function whenever the `Show another quote` button is clicked (code already provided)
document.getElementById('load-quote').addEventListener("click", printQuote, false);