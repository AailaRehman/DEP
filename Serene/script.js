const slides = document.querySelectorAll('.hero-image');
const dots = document.querySelectorAll('.dot');
const progressBar = document.querySelector('.progress');
let currentIndex = 0;
let interval = setInterval(nextSlide, 5000);

function nextSlide() {
    // Hide current slide
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    // Increment index (loop back to first if at the end)
    currentIndex = (currentIndex + 1) % slides.length;

    // Show next slide
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(interval);  // Stop auto-rotation on manual selection
        goToSlide(index);
        interval = setInterval(nextSlide, 5000);  // Resume auto-rotation
    });
});

function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const guestsInput = document.getElementById('guests');
    const roomInput = document.getElementById('room');
    const formMessages = document.getElementById('form-messages');

    // Helper function to display custom error messages
    function showErrorMessage(message) {
        formMessages.textContent = message;
        formMessages.style.display = 'block';
    }

    function clearErrorMessage() {
        formMessages.textContent = '';
        formMessages.style.display = 'none';
    }

    // Email validation using regular expression
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Phone validation (expects 10 digits)
    function isValidPhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    // Validation function
    function validateForm(event) {
        clearErrorMessage();

        if (!nameInput.value) {
            showErrorMessage('Full Name is required.');
            return false;
        }

        if (!isValidEmail(emailInput.value)) {
            showErrorMessage('Invalid Email address.');
            return false;
        }

        if (!isValidPhone(phoneInput.value)) {
            showErrorMessage('Phone number must be 10 digits.');
            return false;
        }

        const checkinValue = checkinInput.value;
        const checkoutValue = checkoutInput.value;

        if (!checkinValue) {
            showErrorMessage('Check-in date is required.');
            return false;
        }

        if (!checkoutValue) {
            showErrorMessage('Check-out date is required.');
            return false;
        }

        if (new Date(checkinValue) >= new Date(checkoutValue)) {
            showErrorMessage('Check-out date must be later than check-in date.');
            return false;
        }

        if (!guestsInput.value) {
            showErrorMessage('Please select the number of guests.');
            return false;
        }

        if (!roomInput.value) {
            showErrorMessage('Please select the number of rooms.');
            return false;
        }

        return true;
    }

    // Real-time validation for check-in and check-out dates
    checkinInput.addEventListener('change', () => {
        if (new Date(checkinInput.value) > new Date(checkoutInput.value)) {
            showErrorMessage('Check-out date must be later than check-in date.');
        } else {
            clearErrorMessage();
        }
    });

    checkoutInput.addEventListener('change', () => {
        if (new Date(checkinInput.value) >= new Date(checkoutInput.value)) {
            showErrorMessage('Check-out date must be later than check-in date.');
        } else {
            clearErrorMessage();
        }
    });

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Form is valid! Checking availability...');
        }
    });
});
