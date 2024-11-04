let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slider-item");
    if (n >= slides.length) slideIndex = 0; // Loop back to the first slide
    if (n < 0) slideIndex = slides.length - 1; // Loop to the last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "flex"; // Show the current slide
}