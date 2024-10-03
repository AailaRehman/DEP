window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

function revealStorySection() {
    const storySection = document.querySelector('.section-story');
    const sectionPosition = storySection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5; 
  
    if (sectionPosition < screenPosition) {
      storySection.classList.add('visible');
    }
  }
  
  window.addEventListener('scroll', revealStorySection);

let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = index;
    const slideWidth = document.querySelector('.review').offsetWidth;
    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

document.querySelector('.arrow.left').addEventListener('click', () => {
    slideIndex = (slideIndex === 0) ? dots.length - 1 : slideIndex - 1;
    showSlide(slideIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    slideIndex = (slideIndex === dots.length - 1) ? 0 : slideIndex + 1;
    showSlide(slideIndex);
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
});

showSlide(0);
