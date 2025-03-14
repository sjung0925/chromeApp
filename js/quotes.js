const quotes = [
  {
    quote: "Every second counts",
    author: "line from 'The Bear'",
  },
  {
    quote:
      "We're more popular than Jesus now; I don't know which will go first, rock 'n' roll or Christianity.",
    author: "John Lennon of The Beatles",
  },
  {
    quote:
      "Music is like a psychiatrist. You can tell your guitar things that you can't tell people. And it will answer you with things people can't tell you.",
    author: "Paul McCartney of The Beatles",
  },
  {
    quote: "Treat people with kindness",
    author: "harry styles",
  },
  {
    quote: "Music gives color to the air of the moment.",
    author: "Karl Lagerfeld",
  },
  {
    quote: "Music is my religion.",
    author: "Jimi Hendrix",
  },
  {
    quote:
      "Led Zeppelin is the greatest. Robert Plant is one of the most original vocalists of our time. As a rock band they deserve the kind of success they're getting.",
    author: "Freddie Mercury of Queen",
  },
  {
    quote: "I’m the One Who Gripped You Tight and Raised You From Perdition.",
    author: "Castiel(character in 'Supernatural')",
  },
  {
    quote: "Saving People. Hunting Things. The Family Business.",
    author: "Dean Winchester(character in 'Supernatural')",
  },
  {
    quote: "I love you dude. Let it rip!",
    author: "Michael Berzatto(character in 'The Bear')",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
