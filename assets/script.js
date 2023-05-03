const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const image = document.querySelector('.slider-img');
const tagLine = document.querySelector('.text-image');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow-right');
const link = '/assets/images/slideshow/';
let i = 0;

function previousSlide() {
	i--;
	updateImage(i)
}

function nextSlide() {
	i++;
	updateImage (i)
}

function updateImage(index) {
	image.src = link + arraySlide[index].image
	tagLine.innerHTML = arraySlide[index].tagLine;
}

leftArrow.addEventListener('click',previousSlide);
rightArrow.addEventListener('click',nextSlide);



if (i<0) {i=3}
if (i>3) {i=0}