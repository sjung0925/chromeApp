const images = ["landscape.jpg", "movie.jpg", "music.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");

bg.src = `img/${chosenImage}`;

document.body.appendChild(bg);