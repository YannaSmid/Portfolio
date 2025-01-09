
//For image animation
const images = document.querySelectorAll('.image');
let currentIndex = 0;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    images[currentIndex].classList.add('active');
}, 4000); // Change image every 4 seconds