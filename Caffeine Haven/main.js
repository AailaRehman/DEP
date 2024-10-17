document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let message = document.getElementById('message').value;
  
    if (!name || !email || !phone || !date || !message) {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message!");
    }
  });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar nav ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
    
