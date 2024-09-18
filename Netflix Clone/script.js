const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTrack = document.querySelector('.carousel-track');

let currentIndex = 0;
let visibleCards = getVisibleCards(); 
const totalCards = 10;  
let cardWidth = document.querySelector('.card').offsetWidth;  
const margin = 20;      

window.addEventListener('resize', updateCarousel);

function updateCarousel() {
    visibleCards = getVisibleCards(); 
    cardWidth = document.querySelector('.card').offsetWidth;  
    carouselTrack.style.transform = `translateX(-${currentIndex * (cardWidth + margin)}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex += visibleCards;
        carouselTrack.style.transform = `translateX(-${currentIndex * (cardWidth + margin)}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= visibleCards;
        carouselTrack.style.transform = `translateX(-${currentIndex * (cardWidth + margin)}px)`;
    }
});

function getVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
        return 1; 
    } else if (screenWidth <= 900) {
        return 2;  
    } else if (screenWidth <= 1200) {
        return 3;  
    } else {
        return 4;  
    }
}

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const expanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !expanded);
        
        const answer = question.nextElementSibling;
        
        if (!expanded) {
            answer.style.display = "block"; 
        } else {
            answer.style.display = "none";  
        }
    });
});
