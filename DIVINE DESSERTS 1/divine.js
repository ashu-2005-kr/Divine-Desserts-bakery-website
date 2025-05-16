let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
    let searchForm = document.querySelector('.search-form');
let cartBtn = document.querySelector('#cart-btn');
    let cartItemsContainer = document.querySelector('.cart-items-container');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
}

searchBtn.addEventListener('click', () => {
searchForm.classList.toggle('active');
cartItemsContainer.classList.remove("active");
navbar.classList.remove("active");
});


cartBtn.addEventListener('click', () => {
cartItemsContainer.classList.toggle('active');
searchForm.classList.remove("active");
navbar.classList.remove("active");
});


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItemsContainer.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}