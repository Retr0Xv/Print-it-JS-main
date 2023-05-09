const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const image = document.querySelector('.slider-img');
const tagLine = document.querySelector('.text-image');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
const link = 'assets/images/slideshow/';
let i = 0;

function previousSlide() {
    if (i === 0) {
        i = slides.length - 1;
    } else {
        i--;
    }
    /*i = i === 0 ? slides.length - 1 : i - 1;*/
    updateImage(i);
    handleDots(i);
}

function nextSlide() {
    if (i === slides.length - 1) {
        i = 0;
    } else {
        i++;
    }
    /*i = i === slides.length - 1 ? 0 : i + 1;*/
    updateImage(i);
    handleDots(i);
}

function updateImage(index) {
    image.src = link + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;
}

function handleDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
        /*i === index ? dot.classList.add("dot_selected") : dot.classList.remove("dot_selected");*/
    })
}

function handleDotsOnClick() {
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
        updateImage(i);
        handleDots(i);
    }))
}

addEventListener("DOMContentLoaded", async (event) => {
    leftArrow.addEventListener('click', previousSlide);
    rightArrow.addEventListener('click', nextSlide);
    handleDotsOnClick()
});