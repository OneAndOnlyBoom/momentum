const images =  [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];


const randomImage =  images[Math.floor(Math.random() * images.length)];

console.log(randomImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);