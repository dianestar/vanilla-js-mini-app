const images = [
    "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

/*
const imgTag = document.createElement("img");
imgTag.src= `img/${randomImage}`;
imgTag.style="width: 100%";
document.body.appendChild(imgTag);
*/
// document.body.prepend(imgTag);

console.dir(document.body);
document.body.background = `img/${randomImage}`;
