const images = ["landscape.jpg", "movie.jpg", "music.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.querySelector("body");
bg.style.backgroundImage = `url("img/${chosenImage}")`;
